"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Package, Truck, Shield } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Handcrafted Art & Decor
              <br />
              <span className="text-teal-600 dark:text-teal-400">Made Just for You</span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
              Custom frames, resin art, and personalized accessories crafted with care in India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/home">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              About Us
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
              We create handmade art pieces, custom frames, and personalized accessories. Each item is carefully crafted to add a personal touch to your space.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Based in Boisar, Palghar, Maharashtra, we take pride in delivering quality handcrafted products across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            {[
              {
                title: "Handcrafted",
                description: "Every piece is made by hand with attention to detail",
                icon: <Package className="h-8 w-8 text-teal-600" />
              },
              {
                title: "Custom Orders",
                description: "Personalize your items with names, dates, or designs",
                icon: <Shield className="h-8 w-8 text-teal-600" />
              },
              {
                title: "India Delivery",
                description: "Fast shipping across India from Maharashtra",
                icon: <Truck className="h-8 w-8 text-teal-600" />
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-white dark:bg-slate-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to Order?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Browse our collection and contact us for custom orders via WhatsApp or Instagram.
          </p>
          <Link href="/home">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8">
              View Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
      <Footer />
    </div>
  )
}