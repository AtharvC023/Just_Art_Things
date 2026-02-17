"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Users, Award, Sparkles, Heart, Shield, Leaf, Quote } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 dark:from-slate-900 dark:via-cyan-950/30 dark:to-slate-800">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Welcome to Just Artist Things
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 dark:from-teal-400 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-6">
              Discover Amazing
              <br />
              <span className="text-primary">Art & Design</span>
            </h1>
            
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mb-8">
              Explore our curated collection of premium art pieces, furniture, and design elements 
              that transform spaces into extraordinary experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link href="/home">
              <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2 border-teal-500 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-950/20">
              Learn More
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-primary mr-2" />
                <span className="text-3xl font-bold text-slate-900 dark:text-slate-100">100+</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400">Happy Customers</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-6 w-6 text-primary mr-2" />
                <span className="text-3xl font-bold text-slate-900 dark:text-slate-100">30+</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400">Premium Products</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-6 w-6 text-primary mr-2" />
                <span className="text-3xl font-bold text-slate-900 dark:text-slate-100">4.9</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400">Customer Rating</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About the Artist Section */}
      <section className="py-20 px-6 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                About the Artist
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                Every piece at Just Artist Things is crafted with passion and precision. Our journey began with a simple belief: that art should be personal, meaningful, and made to last.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                With years of experience in handcrafted art and design, we pour our heart into every creation, ensuring each piece tells its own unique story.
              </p>
              <div className="flex items-center gap-4">
                <Heart className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-slate-100">Made with Love</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Every detail matters</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-600 opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="h-32 w-32 text-teal-600 dark:text-teal-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              What Our Customers Say
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
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
                name: "Sarah M.",
                text: "The quality is exceptional! Each piece feels personal and made with care. Absolutely love my custom frame.",
                rating: 5
              },
              {
                name: "James K.",
                text: "Beautiful craftsmanship and attention to detail. The resin art pieces are stunning and unique.",
                rating: 5
              },
              {
                name: "Emily R.",
                text: "Fast shipping and gorgeous products. The personalized keychain was perfect for my gift!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg relative"
              >
                <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  {testimonial.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Handmade Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Why Handmade Matters
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Every handcrafted piece carries the soul of its creator
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
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
                icon: <Heart className="h-12 w-12 text-primary" />,
                title: "Made with Care",
                description: "Each piece is individually crafted with attention to every detail, ensuring uniqueness and quality."
              },
              {
                icon: <Shield className="h-12 w-12 text-primary" />,
                title: "Premium Materials",
                description: "We use only the finest materials - from sustainable wood to high-quality resin and metals."
              },
              {
                icon: <Leaf className="h-12 w-12 text-primary" />,
                title: "Eco-Friendly",
                description: "Sustainable practices and eco-conscious materials for a better tomorrow."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
                }}
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Care Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center">
              Materials & Care
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-slate-600 dark:text-slate-300">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Materials Used:</h4>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Premium quality resin</li>
                  <li>Sustainable wood</li>
                  <li>Hypoallergenic metals</li>
                  <li>Eco-friendly finishes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Care Instructions:</h4>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Clean with soft, dry cloth</li>
                  <li>Avoid direct sunlight</li>
                  <li>Keep away from moisture</li>
                  <li>Handle with care</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Why Choose Just Artist Things?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              We bring you the finest selection of art and design pieces from around the world
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.1
                }
              }
            }}
          >
            {[
              {
                title: "Curated Collection",
                description: "Hand-picked pieces by our expert design team",
                icon: "🎨"
              },
              {
                title: "Premium Quality",
                description: "Only the finest materials and craftsmanship",
                icon: "⭐"
              },
              {
                title: "Fast Delivery",
                description: "Quick and secure shipping worldwide",
                icon: "🚚"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  }
                }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-teal-200 dark:hover:border-teal-800"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-cyan-100/50 via-teal-100/50 to-blue-100/50 dark:from-cyan-950/20 dark:via-teal-950/20 dark:to-blue-950/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/home">
              <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                Browse Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2 border-teal-500 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-950/20">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  )
}