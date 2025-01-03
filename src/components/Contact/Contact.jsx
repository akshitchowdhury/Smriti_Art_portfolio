import { FacebookIcon, Instagram, LucidePaintbrush, Paintbrush2Icon, Twitter } from 'lucide-react';
import contactBG from "../../assets/artDump/Sketch/s4.jpg";

export default function Contact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Left Image Section */}
      <div className="w-full h-64 md:h-[100vh]">
        <img
          src={contactBG}
          alt="Contact"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Form Section */}
      <div className="bg-red-500 flex h-auto md:h-[100vh] items-center justify-center p-6 md:p-24">
        <div className="max-w-xl w-full space-y-12">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-center md:text-left">
            Let's Connect
          </h1>

          {/* Form */}
          <form className="space-y-6">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border-b border-black bg-transparent pb-2 placeholder:text-black/70 focus:outline-none"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full border-b border-black bg-transparent pb-2 placeholder:text-black/70 focus:outline-none"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full border-b border-black bg-transparent pb-2 placeholder:text-black/70 focus:outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-black/90 transition-colors w-full md:w-auto"
            >
              Contact Us
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 text-center md:text-left">
            <div>
              <h2 className="font-medium">Contact</h2>
              <p className="text-black/70">hi@fashion.com</p>
            </div>
            <div>
              <h2 className="font-medium">Based in</h2>
              <p className="text-black/70">
                San Francisco, <br />
                California
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 pt-4">
              <a
                href="#"
                className="text-black hover:text-black/70 transition-colors"
              >
                <FacebookIcon className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-black hover:text-black/70 transition-colors"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-black hover:text-black/70 transition-colors"
              >
                <LucidePaintbrush className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
