import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-black">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <Link className="flex items-center mb-4" href="#">
              <PlaneIcon className="h-8 w-8 mr-2 text-accent" />
              <span className="text-xl font-heading font-semibold text-black">Cherry Hill Aviation</span>
            </Link>
            <p className="text-black text-sm">
              Experience the thrill of flight with our expert instructors and state-of-the-art aircraft.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-black">Quick Links</h4>
            <nav className="grid gap-2">
              <Link className="text-black hover:text-accent transition-colors" href="#">
                About
              </Link>
              <Link className="text-black hover:text-accent transition-colors" href="#">
                Fleet 
              </Link>
              <Link className="text-black hover:text-accent transition-colors" href="#">
                Instructors
              </Link>
              <Link className="text-black hover:text-accent transition-colors" href="#">
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-black">Contact</h4>
            <div className="text-black text-sm">
              <p>123 Aviation Way</p>
              <p>Skyville, CA 90210</p>
              <p>Phone: (555) 555-5555</p>
              <p>Email: info@flightschool.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-accent mt-8 pt-4 text-center text-sm text-black">
          © 2024 Flight School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function PlaneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}