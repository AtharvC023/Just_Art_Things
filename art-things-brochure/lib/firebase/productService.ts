import { collection, getDocs, doc, getDoc, query, where, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from './config';

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  price?: number;
  featured?: boolean;
  order?: number;
  stock?: number;
  soldCount?: number;
}

const PRODUCTS_COLLECTION = 'products';

export const productService = {
  async getAllProducts(): Promise<Product[]> {
    const productsRef = collection(db, PRODUCTS_COLLECTION);
    const snapshot = await getDocs(productsRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
  },

  async getProductById(id: string): Promise<Product | null> {
    const docRef = doc(db, PRODUCTS_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } as Product : null;
  },

  async getProductsByCategory(category: string): Promise<Product[]> {
    const productsRef = collection(db, PRODUCTS_COLLECTION);
    const q = query(productsRef, where('category', '==', category));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
  },

  async addProduct(product: Omit<Product, 'id'>): Promise<string> {
    const productWithDefaults = {
      ...product,
      stock: product.stock || 10,
      soldCount: product.soldCount || 0,
      price: product.price || 0
    };
    const docRef = await addDoc(collection(db, PRODUCTS_COLLECTION), productWithDefaults);
    return docRef.id;
  },

  async updateProduct(id: string, product: Partial<Omit<Product, 'id'>>): Promise<void> {
    await updateDoc(doc(db, PRODUCTS_COLLECTION, id), product);
  },

  async deleteProduct(id: string): Promise<void> {
    await deleteDoc(doc(db, PRODUCTS_COLLECTION, id));
  },

  async updateStock(productId: string, quantityPurchased: number): Promise<void> {
    const productRef = doc(db, PRODUCTS_COLLECTION, productId);
    const productSnap = await getDoc(productRef);
    
    if (productSnap.exists()) {
      const product = productSnap.data() as Product;
      const newStock = Math.max(0, (product.stock || 0) - quantityPurchased);
      const newSoldCount = (product.soldCount || 0) + quantityPurchased;
      
      await updateDoc(productRef, {
        stock: newStock,
        soldCount: newSoldCount
      });
    }
  },

  async checkStock(productId: string, requestedQuantity: number): Promise<boolean> {
    const product = await this.getProductById(productId);
    return product ? (product.stock || 0) >= requestedQuantity : false;
  },

  async getPopularProducts(limit: number = 5): Promise<Product[]> {
    const products = await this.getAllProducts();
    return products
      .filter(p => p.soldCount && p.soldCount > 0)
      .sort((a, b) => (b.soldCount || 0) - (a.soldCount || 0))
      .slice(0, limit);
  }
};
