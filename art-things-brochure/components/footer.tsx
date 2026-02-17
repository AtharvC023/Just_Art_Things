"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 dark:from-slate-950 dark:via-teal-950 dark:to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Just Artist Things
            </h3>
            <p className="text-slate-300 dark:text-slate-400 mb-4">
              Your premier destination for handcrafted art supplies and custom creations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/home" className="text-slate-300 dark:text-slate-400 hover:text-primary transition-colors">Shop</Link></li>
              <li><Link href="/landing" className="text-slate-300 dark:text-slate-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-slate-300 dark:text-slate-400 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-slate-300 dark:text-slate-400 hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-300 dark:text-slate-400">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@justartistthings.com</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300 dark:text-slate-400">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300 dark:text-slate-400">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Art Street, Creative City</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-slate-300 dark:text-slate-400 mb-4 text-sm">
              Subscribe for exclusive offers and updates
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-slate-800 dark:bg-slate-900 border-slate-700 dark:border-slate-800 text-white placeholder:text-slate-400"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-slate-700 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 dark:text-slate-500 text-sm">
            © 2024 Just Artist Things. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="bg-slate-800 dark:bg-slate-900 p-2 rounded-full hover:bg-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="bg-slate-800 dark:bg-slate-900 p-2 rounded-full hover:bg-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="bg-slate-800 dark:bg-slate-900 p-2 rounded-full hover:bg-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
