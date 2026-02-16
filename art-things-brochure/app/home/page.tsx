"use client"

import { useState, useMemo } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import ProductGrid from "@/components/product-grid"
import ProductDetail from "@/components/product-detail"

const PRODUCTS = [
  {
    id: 1,
    name: "Custom Portrait Frame",
    category: "Frames",
    image: "/Custom Portrait Frame.jpeg",
    description: "Beautiful custom portrait frame for your cherished memories",
  },
  {
    id: 2,
    name: "Custom Portrait Frame (Premium)",
    category: "Frames",
    image: "/Custom Portrait Frame (2).jpeg",
    description: "Premium custom portrait frame with elegant design",
  },
  {
    id: 3,
    name: "Golden Diya Decor",
    category: "Decor",
    image: "/Golden Diya Decor.jpeg",
    description: "Elegant golden diya for festive decoration",
  },
  {
    id: 4,
    name: "Festive Resin Diya",
    category: "Decor",
    image: "/Festive Resin Diya.png",
    description: "Handcrafted festive resin diya",
  },
  {
    id: 5,
    name: "Floral & Gold Heart Charm",
    category: "Accessories",
    image: "/Floral & Gold Heart Charm.png",
    description: "Delicate floral and gold heart charm",
  },
  {
    id: 6,
    name: "Personalized Name Keychain",
    category: "Accessories",
    image: "/Personalized Name Keychain.png",
    description: "Custom name keychain with elegant design",
  },
  {
    id: 7,
    name: "Personalized Name Keychain (Style 2)",
    category: "Accessories",
    image: "/Personalized Name Keychain (2).png",
    description: "Personalized keychain with unique style",
  },
  {
    id: 8,
    name: "Personalized Name Keychain (Style 3)",
    category: "Accessories",
    image: "/Personalized Name Keychain (3).png",
    description: "Custom name keychain with modern design",
  },
  {
    id: 9,
    name: "Personalized Name Keychain (Style 4)",
    category: "Accessories",
    image: "/Personalized Name Keychain (4).png",
    description: "Elegant personalized name keychain",
  },
  {
    id: 10,
    name: "Personalized Name Keychain (Style 5)",
    category: "Accessories",
    image: "/Personalized Name Keychain (5).png",
    description: "Stylish custom name keychain",
  },
  {
    id: 11,
    name: "Multi-Charm Name Set",
    category: "Accessories",
    image: "/Multi-Charm Name Set.png",
    description: "Beautiful multi-charm personalized name set",
  },
  {
    id: 12,
    name: "Multi-Charm Name Set (Deluxe)",
    category: "Accessories",
    image: "/Multi-Charm Name Set (2).png",
    description: "Deluxe multi-charm name set with premium finish",
  },
]

const CATEGORIES = ["All", "Frames", "Decor", "Accessories"]

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = useMemo(() => {
    const filtered = PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
      const matchesSearch =
        (product.name?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
        (product.description?.toLowerCase() || "").includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
    console.log('Selected Category:', selectedCategory)
    console.log('Filtered Products:', filtered.length, filtered.map(p => p.name))
    return filtered
  }, [selectedCategory, searchQuery])

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 dark:from-slate-900 dark:via-cyan-950/30 dark:to-slate-800">
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