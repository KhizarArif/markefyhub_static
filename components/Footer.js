import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Column 1: Company Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">MarkeyfyHub</h4>
          <p className="mb-2 text-gray-400">
            <i className="fas fa-map-marker-alt mr-2 text-white" />
            1942 Broadway St. STE 314C Boulder, CO, 80302, USA
          </p>
          <p className="mb-2 text-gray-400">
            <i className="fas fa-map-marker-alt mr-2 text-white" />
            2nd floor house no 550 steet 11 sector C bahria town phase 8
            Rawalpindi
          </p>
          <p className="mb-2 text-gray-400">
            Mon-Sat: 07:00pm - 4:00am | Sun: Closed
          </p>
          <p className="mb-2 text-gray-400">Phone: +1 720 604 9031</p>
          <p className="mb-2 text-gray-400">WhatsApp: 03709022870</p>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className="text-xl font-semibold mb-4">
            <Link href="/services">Service</Link>
          </h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/services/content">Digital Marketing</Link>
            </li>
            <li>
              <Link href="/services/frontend">Web Development</Link>
            </li>
            <li>
              <Link href="/services/ui-ux">UI/UX Design</Link>
            </li>
            <li>
              <Link href="/services/animation">Brand Strategy</Link>
            </li>
            <li>
              <Link href="/services/content">Content Creation</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/about">About Agency</Link>
            </li>
            <li>
              <Link href="/services">Our Services</Link>
            </li>
            <li>
              <Link href="/results">Case Studies</Link>
            </li>
            <li>Our Clients</li>
            <li>
              <Link href="/blog"> Blog & Insights </Link>
            </li>
            <li>Join Our Team</li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Classes */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Classes</h4>
          <ul className="space-y-2 text-gray-400">
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>WordPress</li>
          </ul>
        </div>

        {/* Column 5: Newsletter + Socials */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Join Newsletter</h4>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-1 p-3 rounded-md border text-white border-gray-300 outline-none bg-[#4F5A68]"
          />
          <button className="bg-white text-black mt-4 px-6 py-2 rounded-lg">
            Send
          </button>

          <h4 className="text-lg font-semibold mb-2 mt-9">Follow Us</h4>
          <div className="flex gap-4 mt-3">
            <a
              href="https://www.facebook.com/share/1CT2WNGrdZ/?mibextid=qi2Omg"
              className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-[#2C35A5] hover:text-white transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/markefyhub?igsh=OXE5N29hOWY2NjV4"
              className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-[#2C35A5] hover:text-white transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/markefyhub/"
              className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-[#2C35A5] hover:text-white transition"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 text-sm">
        © {new Date().getFullYear()} MarkeyfyHub. All rights reserved.
      </div>
    </footer>
  );
}
