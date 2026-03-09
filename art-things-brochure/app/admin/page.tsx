"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/contexts/AuthContext"
import { productService, Product } from "@/lib/firebase/productService"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Plus, Edit, Trash2, ArrowLeft, Star } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AdminPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    image: '',
    description: '',
    featured: false,
  })

  const isAdmin = user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL

  useEffect(() => {
    if (!user) {
      router.push('/home')
      return
    }
    if (!isAdmin) {
      alert('Access denied. Admin only.')
      router.push('/home')
      return
    }
    loadProducts()
  }, [user, isAdmin])

  const loadProducts = async () => {
    try {
      const data = await productService.getAllProducts()
      setProducts(data)
    } catch (error) {
      console.error('Error loading products:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingProduct) {
        await productService.updateProduct(editingProduct.id, formData)
      } else {
        await productService.addProduct(formData)
      }
      setFormData({ name: '', category: '', image: '', description: '', featured: false })
      setShowForm(false)
      setEditingProduct(null)
      loadProducts()
    } catch (error) {
      console.error('Error saving product:', error)
      alert('Error saving product')
    }
  }

  const handleEdit = (product: Product) => {
    setEditingProduct(product)
    setFormData({
      name: product.name,
      category: product.category,
      image: product.image,
      description: product.description,
      featured: product.featured || false,
    })
    setShowForm(true)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return
    try {
      await productService.deleteProduct(id)
      loadProducts()
    } catch (error) {
      console.error('Error deleting product:', error)
      alert('Error deleting product')
    }
  }

  const toggleFeatured = async (product: Product) => {
    try {
      await productService.updateProduct(product.id, { featured: !product.featured })
      loadProducts()
    } catch (error) {
      console.error('Error updating featured status:', error)
      alert('Error updating featured status')
    }
  }

  if (!user || !isAdmin) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 dark:from-slate-900 dark:via-cyan-950/30 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Button variant="ghost" onClick={() => router.push('/home')} className="mb-4">
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Button>
            <h1 className="text-4xl font-serif font-bold">Admin Panel</h1>
            <p className="text-foreground/60">Manage your products</p>
          </div>
          <Button onClick={() => { setShowForm(true); setEditingProduct(null); setFormData({ name: '', category: '', image: '', description: '', featured: false }) }}>
            <Plus size={20} className="mr-2" />
            Add Product
          </Button>
        </div>

        {showForm && (
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Product Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <Input
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  placeholder="e.g., Frames, Decor, Accessories"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Image URL</label>
                <Input
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="/image.jpg or full URL"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="w-4 h-4"
                />
                <label htmlFor="featured" className="text-sm font-medium cursor-pointer">
                  Featured in Carousel
                </label>
              </div>
              <div className="flex gap-4">
                <Button type="submit">{editingProduct ? 'Update' : 'Add'} Product</Button>
                <Button type="button" variant="outline" onClick={() => { setShowForm(false); setEditingProduct(null) }}>
                  Cancel
                </Button>
              </div>
            </form>
          </Card>
        )}

        {loading ? (
          <div className="text-center py-20">Loading...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="relative aspect-[5/4] bg-white">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  <button
                    onClick={() => toggleFeatured(product)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white shadow-md transition-all"
                    title={product.featured ? "Remove from carousel" : "Add to carousel"}
                  >
                    <Star 
                      size={20} 
                      className={product.featured ? "fill-yellow-500 text-yellow-500" : "text-gray-400"} 
                    />
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs text-muted-foreground uppercase">{product.category}</p>
                    {product.featured && (
                      <span className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full">
                        ⭐ Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-foreground/70 mb-4">{product.description}</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => handleEdit(product)}>
                      <Edit size={16} className="mr-1" />
                      Edit
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDelete(product.id)}>
                      <Trash2 size={16} className="mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
