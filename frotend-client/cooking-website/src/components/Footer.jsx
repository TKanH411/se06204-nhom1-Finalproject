import React from 'react'
import { Facebook, Instagram, Twitter } from "lucide-react";

/*const Footer = () => {
 return (
    <div>Footer</div>
  )
}*/

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-lg font-semibold">Cooking Guide</h2>
        <p className="text-gray-400 text-sm">© 2025 Cooking Guide. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-6 h-6 hover:text-blue-500" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 hover:text-pink-500" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6 hover:text-blue-400" />
          </a>
        </div>
        <div className="mt-4">
          <a href="/about" className="text-gray-400 hover:text-white mx-2">About Us</a>
          <a href="/privacy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
          <a href="/contact" className="text-gray-400 hover:text-white mx-2">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer
