"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Package } from "lucide-react"
import { ProductCardSkeleton } from "@/components/loading-skeleton"

export default function ProductGrid({
  products,
  categories,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  onProductSelect,
  isLoading = false,
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="px-6 py-24 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Collection</h2>
          <p className="text-foreground/60 text-lg max-w-2xl">
            Discover our handpicked selection of premium products, carefully curated for quality and style.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 py-6 text-foreground bg-white border-border"
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-wrap gap-3"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => onCategoryChange(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border-border text-foreground hover:border-foreground/50"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        ) : products.length > 0 ? (
          <motion.div
            key={selectedCategory}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden bg-card border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <div className="relative overflow-hidden bg-white aspect-[5/4]">
                    <img
                      src={product.image || "/placeholder.svg?height=256&width=400&query=product"}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">{product.category}</p>
                    <h3 className="text-lg font-serif font-bold mb-2 text-foreground">{product.name}</h3>
                    <p className="text-foreground/70 text-sm mb-4 flex-grow">{product.description}</p>
                    <Button
                      onClick={() => onProductSelect(product)}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Enquire
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-center py-20"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                <Package className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">No products found</h3>
              <p className="text-foreground/60 text-lg max-w-md">
                {searchQuery 
                  ? `No results for "${searchQuery}". Try a different search term.`
                  : `No products in ${selectedCategory} category yet.`
                }
              </p>
              {(searchQuery || selectedCategory !== "All") && (
                <Button
                  onClick={() => {
                    onSearchChange("")
                    onCategoryChange("All")
                  }}
                  variant="outline"
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
