"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="flex flex-col gap-4 mt-8">
          <Link href="#about" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="#programs" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Programs
          </Link>
          <Link href="#events" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Events
          </Link>
          <Link href="#bookstore" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Bookstore
          </Link>
          <Link href="#light-nation" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Light Nation
          </Link>
          <Link href="#contact" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link href="#donate" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Partner With Us
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

