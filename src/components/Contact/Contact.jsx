import { Facebook, FacebookIcon, Instagram, Twitter } from 'lucide-react'
import contactBG from "../../assets/artDump/Sketch/s11.jpg"
export default function Contact() {
  return (
    <div className="min-h-screen bg-red-400 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="w-full h-full">
          <img
            src={contactBG}
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="space-y-8 p-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Let's Connect
          </h1>

          <form className="space-y-6">
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border-b border-black bg-transparent pb-2 placeholder:text-black/70 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full border-b border-black bg-transparent pb-2 placeholder:text-black/70 focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full border-b border-black bg-transparent pb-2 placeholder:text-black/70 focus:outline-none resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-black/90 transition-colors"
            >
              Contact Us
            </button>
          </form>

          <div className="space-y-4">
            <div>
              <h2 className="font-medium">Contact</h2>
              <p className="text-black/70">hi@fashion.com</p>
            </div>

            <div>
              <h2 className="font-medium">Based in</h2>
              <p className="text-black/70">
                San Francisco,
                <br />
                California
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="text-black hover:text-black/70 transition-colors"
              >
                <FacebookIcon className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-black hover:text-black/70 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-black hover:text-black/70 transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

