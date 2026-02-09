"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, Instagram, X } from "lucide-react"

const WHATSAPP_NUMBER = "918830968893"
const INSTAGRAM_USERNAME = "justartistthings"

export default function ProductDetail({ product, onClose }) {
  if (!product) return null

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
          className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden grid md:grid-cols-2"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image Section */}
          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain max-h-[80vh]"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col p-8 md:p-12">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>

            <div className="flex-1 flex flex-col justify-center space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                  {product.category}
                </span>
                <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {product.name}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="space-y-3 pt-6">
                <Button 
                  onClick={handleWhatsAppInquiry}
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white h-14 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all" 
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  Inquire on WhatsApp
                </Button>
                <Button
                  onClick={handleInstagramInquiry}
                  className="w-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90 text-white h-14 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <Instagram className="mr-3 h-5 w-5" />
                  Inquire on Instagram
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
