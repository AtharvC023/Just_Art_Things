"use client"

import { useState, useMemo } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import ProductGrid from "@/components/product-grid"
import ProductDetail from "@/components/product-detail"

const PRODUCTS = [
  // Add your products here
  // Example structure:
  // {
  //   id: 1,
  //   name: "Product Name",
  //   category: "Category",
  //   price: "$Price",
  //   image: "/your-image.jpg",
  //   description: "Product description",
  // },
]

const CATEGORIES = ["All"] // Add your categories here

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductGrid
        products={filteredProducts}
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onProductSelect={setSelectedProduct}
      />
      {selectedProduct && <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  )
}
