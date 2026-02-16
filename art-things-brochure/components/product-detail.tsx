"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, Instagram, X } from "lucide-react"
import { useEffect } from "react"

const WHATSAPP_NUMBER = "918830968893"
const INSTAGRAM_USERNAME = "justartistthings"

export default function ProductDetail({ product, onClose, allProducts, onProductSelect }) {
  if (!product) return null

  const relatedProducts = allProducts
    ?.filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3) || []

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(`Hi! I'm interested in: ${product.name}\n\nCould you provide more details?`)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
  }

  const handleInstagramInquiry = () => {
    window.open(`https://ig.me/m/${INSTAGRAM_USERNAME}`, '_blank')
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-6xl w-full h-[90vh] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/90 dark:bg-slate-800/90 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors z-10 shadow-lg"
          >
            <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>

          <div className="grid md:grid-cols-2 h-full">
            {/* Image Section */}
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center p-8">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col p-6 md:p-8 h-full">
              {/* Product Info */}
              <div className="flex-shrink-0 mb-4">
                <span className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
                  {product.category}
                </span>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                  {product.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex-shrink-0 space-y-2 mb-4">
                <Button 
                  onClick={handleWhatsAppInquiry}
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white h-12 text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all" 
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Inquire on WhatsApp
                </Button>
                <Button
                  onClick={handleInstagramInquiry}
                  className="w-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90 text-white h-12 text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  Inquire on Instagram
                </Button>
              </div>

              {/* Related Products */}
              {relatedProducts.length > 0 && (
                <div className="flex-1 border-t dark:border-slate-700 pt-4 min-h-0">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">You Might Also Like</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {relatedProducts.map((relatedProduct) => (
                      <Card 
                        key={relatedProduct.id}
                        className="cursor-pointer hover:shadow-lg transition-all overflow-hidden group border-2 border-transparent hover:border-teal-300 dark:hover:border-teal-700"
                        onClick={() => onProductSelect(relatedProduct)}
                      >
                        <div className="aspect-square relative bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-slate-700 dark:to-slate-600">
                          <img
                            src={relatedProduct.image}
                            alt={relatedProduct.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-1.5">
                          <p className="text-[10px] font-medium text-gray-900 dark:text-white truncate">{relatedProduct.name}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
