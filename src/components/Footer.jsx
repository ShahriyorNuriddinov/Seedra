import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="  bg-white border-t container border-gray-200 ">
      <div className="hidden md:flex items-center justify-between gap-19 mb-6">
        <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#" className="text-green-700 hover:text-green-900">
            ALL PRODUCTS
          </a>
          <span className="w-px h-5 bg-gray-300"></span>
          <a href="#" className="hover:text-gray-900">
            ABOUT SEEDRA
          </a>
          <span className="w-px h-5 bg-gray-300"></span>
          <a href="#" className="hover:text-gray-900">
            OUR BLOG
          </a>
        </div>

        <div className="font-bold text-2xl text-green-700 tracking-wide">
          SEEDRA
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-gray-900">
            Terms&Conditions
          </a>
          <span className="w-px h-5 bg-gray-300"></span>
          <a href="#" className="hover:text-gray-900">
            Privacy Policy
          </a>
        </div>
      </div>

      <div className="md:hidden flex flex-col items-center gap-6 mb-6">
        <div className="font-bold text-2xl text-green-700 tracking-wide">
          SEEDRA
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-3 w-full">
          <div className="space-y-2">
            <a
              href="#"
              className="block text-sm font-medium text-green-700 hover:text-green-900"
            >
              ALL PRODUCTS
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              ABOUT SEEDRA
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              OUR BLOG
            </a>
          </div>

          <div className="space-y-2 text-right">
            <a
              href="#"
              className="block text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Terms&Conditions
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between w-full text-green-700">
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="hover:opacity-80">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:opacity-80">
              <FaFacebook size={20} />
            </a>
          </div>

          <p className="text-xs text-gray-500">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
