import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import type { SVGProps } from "react";

export function Header() {
  return (
    <header className="flex h-20 w-full items-center justify-between px-6 py-4 bg-primary shadow-md">
      <Link className="flex items-center" href="/">
        <div className="relative h-16 w-40">
          <Image
            src="/Cherryhill LOGO.png"
            alt="Cherry Hill Aviation"
            fill
            className="object-contain"
          />
        </div>
        <span className="sr-only">Cherry Hill Aviation</span>
      </Link>
      <nav className="hidden lg:flex lg:items-center lg:gap-8">
        <Link className="text-lg font-semibold text-black hover:text-accent transition-colors" href="/">
          Home
        </Link>
        <Link className="text-lg font-semibold text-black hover:text-accent transition-colors" href="/fleet">
          Fleet
        </Link>
        <Link className="text-lg font-semibold text-black hover:text-accent transition-colors" href="/instructors">
          Instructors
        </Link>
        <Link className="text-lg font-semibold text-black hover:text-accent transition-colors" href="/contact">
          Contact
        </Link>
        <Link 
          className="ml-4 inline-flex items-center justify-center rounded-md bg-accent px-6 py-2 text-sm font-medium text-primary shadow-sm hover:bg-accent-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          href="/contact"
        >
          Book Discovery Flight
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden p-2 text-black bg-transparent border-none rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-accent">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-primary text-black">
          <div className="grid gap-4 py-6">
            <Link className="flex w-full items-center py-2 text-lg font-semibold text-black hover:text-accent transition-colors" href="/">
              Home
            </Link>  
            <Link className="flex w-full items-center py-2 text-lg font-semibold text-black hover:text-accent transition-colors" href="/fleet">
              Fleet
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold text-black hover:text-accent transition-colors" href="/instructors">
              Instructors
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold text-black hover:text-accent transition-colors" href="/contact">
              Contact
            </Link>
            <Link 
              className="w-full mt-4 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-primary shadow-sm hover:bg-accent-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              href="/contact"
            >
              Book Discovery Flight
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}

function MenuIcon(props: SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
