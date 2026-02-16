"use client"

import { useState, useMemo } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import ProductCarousel from "@/components/product-carousel"
import ProductGrid from "@/components/product-grid"
import ProductDetail from "@/components/product-detail"
import Footer from "@/components/footer"

const PRODUCTS = [
  {
    id: 1,
    name: "Classic Wooden Portrait Frame",
    category: "Frames",
    image: "/Custom Portrait Frame.jpeg",
    description: "Timeless wooden frame perfect for cherished family portraits",
  },
  {
    id: 2,
    name: "Elegant Gold-Trimmed Frame",
    category: "Frames",
    image: "/Custom Portrait Frame (2).jpeg",
    description: "Sophisticated frame with luxurious gold accents",
  },
  {
    id: 3,
    name: "Vintage Ornate Picture Frame",
    category: "Frames",
    image: "/custom-portrait-frame.jpeg",
    description: "Beautifully detailed vintage-style frame with intricate patterns",
  },
  {
    id: 4,
    name: "Golden Diya Decor",
    category: "Decor",
    image: "/Golden Diya Decor.jpeg",
    description: "Elegant golden diya for festive decoration",
  },
  {
    id: 5,
    name: "Handcrafted Resin Diya",
    category: "Decor",
    image: "/Festive Resin Diya.png",
    description: "Artisan-crafted festive diya with unique resin design",
  },
  {
    id: 6,
    name: "Floral Heart Charm Pendant",
    category: "Accessories",
    image: "/Floral & Gold Heart Charm.png",
    description: "Delicate floral and gold heart charm for special occasions",
  },
  {
    id: 7,
    name: "Rose Gold Name Keychain",
    category: "Accessories",
    image: "/Personalized Name Keychain.png",
    description: "Elegant rose gold personalized name keychain",
  },
  {
    id: 8,
    name: "Crystal Acrylic Name Tag",
    category: "Accessories",
    image: "/Personalized Name Keychain (2).png",
    description: "Modern crystal-clear acrylic personalized keychain",
  },
  {
    id: 9,
    name: "Wooden Engraved Keychain",
    category: "Accessories",
    image: "/Personalized Name Keychain (3).png",
    description: "Natural wood keychain with laser-engraved name",
  },
  {
    id: 10,
    name: "Metallic Silver Name Charm",
    category: "Accessories",
    image: "/Personalized Name Keychain (4).png",
    description: "Sleek metallic silver personalized charm keychain",
  },
  {
    id: 11,
    name: "Colorful Resin Name Tag",
    category: "Accessories",
    image: "/Personalized Name Keychain (5).png",
    description: "Vibrant resin keychain with custom name design",
  },
  {
    id: 12,
    name: "Multi-Charm Personalized Set",
    category: "Accessories",
    image: "/Multi-Charm Name Set.png",
    description: "Beautiful collection of personalized charms and accessories",
  },
  {
    id: 13,
    name: "Luxury Charm Collection",
    category: "Accessories",
    image: "/Multi-Charm Name Set (2).png",
    description: "Premium multi-charm set with elegant finish",
  },
  {
    id: 14,
    name: "Ocean Wave Resin Art",
    category: "Decor",
    image: "/Resin Art 1.png",
    description: "Stunning ocean-inspired resin art piece",
  },
  {
    id: 15,
    name: "Marble Effect Coaster Set",
    category: "Decor",
    image: "/Resin Art 2.png",
    description: "Elegant marble-effect resin coasters for your home",
  },
  {
    id: 16,
    name: "Abstract Wall Art Panel",
    category: "Decor",
    image: "/Decorative Item.png",
    description: "Contemporary abstract wall art for modern spaces",
  },
  {
    id: 17,
    name: "Rustic Wooden Photo Frame",
    category: "Frames",
    image: "/Custom Frame.jpeg",
    description: "Charming rustic frame with natural wood texture",
  },
  {
    id: 18,
    name: "Designer Memory Frame",
    category: "Frames",
    image: "/Custom Portrait Frame (3).jpeg",
    description: "Artistic designer frame for your precious memories",
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
      <ProductCarousel products={PRODUCTS} />
      <ProductGrid
        products={filteredProducts}
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onProductSelect={setSelectedProduct}
      />
      {selectedProduct && (
        <ProductDetail 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)}
          allProducts={PRODUCTS}
          onProductSelect={setSelectedProduct}
        />
      )}
      <Footer />
    </div>
  )
}