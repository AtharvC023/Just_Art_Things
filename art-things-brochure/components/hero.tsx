"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-[600px] md:min-h-screen flex items-center justify-center px-6 py-20 bg-background">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight mb-6 text-foreground">
              Discover Premium Quality
            </h1>
            <p className="text-lg text-foreground/70 max-w-md">
              Explore our curated collection of handpicked products, selected for their exceptional quality and timeless
              design.
            </p>
          </div>
          <div className="flex gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Explore Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/20 text-foreground hover:bg-foreground/5 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative aspect-[5/4] w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl"></div>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            className="absolute inset-6 bg-card rounded-2xl shadow-lg flex items-center justify-center overflow-hidden border border-border"
          >
            <img src="/custom-portrait-frame.jpeg" alt="Product showcase" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
