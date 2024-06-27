import React from 'react';
import { FaApple, FaAndroid, FaInstagram, FaWhatsapp, FaFacebookF, FaTelegramPlane, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import ik from "../../assets/ik.jpg"
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 w-full">
      <div className="container mx-auto px-4">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <img src={ik} alt="Ibrahim-kassim" className="h-10" />
          </div>
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <a href="#" className="flex items-center gap-1"><span className="w-4 h-4 inline-block bg-blue-500 rounded-full"></span> من نحن؟</a>
            <a href="#" className="flex items-center gap-1"><span className="w-4 h-4 inline-block bg-blue-500 rounded-full"></span> روابط مفيدة</a>
            <a href="#" className="flex items-center gap-1"><span className="w-4 h-4 inline-block bg-blue-500 rounded-full"></span> السيرة الذاتية</a>
            <a href="#" className="flex items-center gap-1"><span className="w-4 h-4 inline-block bg-blue-500 rounded-full"></span> اتصل بنا</a>
          </nav>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 my-6" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* App links */}
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 mb-2 text-center md:text-right">متـــــوفر علـــى أجهزة آبل وأندرويد</p>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-white py-2 px-4 rounded-md shadow">
                <FaApple className="text-gray-800" />
                <span>App Store</span>
              </button>
              <button className="flex items-center gap-2 bg-white py-2 px-4 rounded-md shadow">
                <FaAndroid className="text-gray-800" />
                <span>Google Play</span>
              </button>
            </div>
          </div>

          {/* Social links and copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-600 mb-2">تابع بدقّة كل ما يتعلّق بالمستجدّات التربويّة حول التعليم في لبنان.</p>
            <div className="flex justify-center md:justify-end gap-4 mb-2">
              <FaInstagram className="text-2xl text-pink-500" />
              <FaWhatsapp className="text-2xl text-green-500" />
              <FaXTwitter className="text-2xl text-gray-800" />
              <FaFacebookF className="text-2xl text-blue-600" />
              <FaTelegramPlane className="text-2xl text-blue-400" />
              <FaTiktok className="text-2xl text-gray-800" />
            </div>
            <p className="text-sm text-gray-500">© 2024 Ibrahim-Kassim Developer. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;