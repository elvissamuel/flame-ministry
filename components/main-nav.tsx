import Link from "next/link"

export function MainNav() {
  return (
    <nav className="hidden md:flex gap-6">
      <Link href="#about" className="text-sm font-medium hover:text-primary">
        About
      </Link>
      <Link href="#programs" className="text-sm font-medium hover:text-primary">
        Programs
      </Link>
      <Link href="#events" className="text-sm font-medium hover:text-primary">
        Events
      </Link>
      <Link href="#bookstore" className="text-sm font-medium hover:text-primary">
        Bookstore
      </Link>
      <Link href="#light-nation" className="text-sm font-medium hover:text-primary">
        Light Nation
      </Link>
      <Link href="#contact" className="text-sm font-medium hover:text-primary">
        Contact
      </Link>
    </nav>
  )
}

