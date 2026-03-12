import { productService } from './productService';
import { orderService } from './orderService';

export interface AnalyticsData {
  totalProducts: number;
  totalOrders: number;
  totalRevenue: number;
  pendingOrders: number;
  completedOrders: number;
  popularProducts: Array<{
    id: string;
    name: string;
    category: string;
    soldCount: number;
    revenue: number;
  }>;
  revenueByMonth: Array<{
    month: string;
    revenue: number;
    orders: number;
  }>;
  categoryStats: Array<{
    category: string;
    products: number;
    revenue: number;
  }>;
}

export const analyticsService = {
  async getAnalyticsData(): Promise<AnalyticsData> {
    try {
      // Get all products and orders
      const [products, orders, orderStats] = await Promise.all([
        productService.getAllProducts(),
        orderService.getAllOrders(),
        orderService.getOrderStats()
      ]);

      // Calculate popular products
      const popularProducts = products
        .filter(p => p.soldCount && p.soldCount > 0)
        .map(p => ({
          id: p.id,
          name: p.name,
          category: p.category,
          soldCount: p.soldCount || 0,
          revenue: (p.soldCount || 0) * (p.price || 0)
        }))
        .sort((a, b) => b.soldCount - a.soldCount)
        .slice(0, 5);

      // Calculate revenue by month (last 6 months)
      const revenueByMonth = this.calculateRevenueByMonth(orders);

      // Calculate category stats
      const categoryStats = this.calculateCategoryStats(products, orders);

      return {
        totalProducts: products.length,
        totalOrders: orderStats.totalOrders,
        totalRevenue: orderStats.totalRevenue,
        pendingOrders: orderStats.pendingOrders,
        completedOrders: orderStats.completedOrders,
        popularProducts,
        revenueByMonth,
        categoryStats
      };
    } catch (error) {
      console.error('Error fetching analytics data:', error);
      throw error;
    }
  },

  calculateRevenueByMonth(orders: any[]): Array<{ month: string; revenue: number; orders: number }> {
    const monthlyData: { [key: string]: { revenue: number; orders: number } } = {};
    
    // Get last 6 months
    const months = [];
    for (let i = 5; i >= 0; i--) {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      const monthKey = date.toISOString().slice(0, 7); // YYYY-MM format
      const monthName = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      months.push({ key: monthKey, name: monthName });
      monthlyData[monthKey] = { revenue: 0, orders: 0 };
    }

    // Process orders
    orders.forEach(order => {
      if (order.paymentStatus.toLowerCase().includes('paid')) {
        const orderDate = order.createdAt instanceof Date ? order.createdAt : new Date(order.createdAt);
        const monthKey = orderDate.toISOString().slice(0, 7);
        
        if (monthlyData[monthKey]) {
          monthlyData[monthKey].revenue += order.totalAmount;
          monthlyData[monthKey].orders += 1;
        }
      }
    });

    return months.map(month => ({
      month: month.name,
      revenue: monthlyData[month.key].revenue,
      orders: monthlyData[month.key].orders
    }));
  },

  calculateCategoryStats(products: any[], orders: any[]): Array<{ category: string; products: number; revenue: number }> {
    const categoryData: { [key: string]: { products: number; revenue: number } } = {};

    // Count products by category
    products.forEach(product => {
      if (!categoryData[product.category]) {
        categoryData[product.category] = { products: 0, revenue: 0 };
      }
      categoryData[product.category].products += 1;
    });

    // Calculate revenue by category
    orders.forEach(order => {
      if (order.paymentStatus.toLowerCase().includes('paid')) {
        order.items.forEach((item: any) => {
          if (!categoryData[item.category]) {
            categoryData[item.category] = { products: 0, revenue: 0 };
          }
          categoryData[item.category].revenue += item.price * item.quantity;
        });
      }
    });

    return Object.entries(categoryData).map(([category, data]) => ({
      category,
      products: data.products,
      revenue: data.revenue
    }));
  }
};