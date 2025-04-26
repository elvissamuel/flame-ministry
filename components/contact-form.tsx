"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface ContactFormProps {
  type: "prayer" | "counseling" | "inquiry"
}

export function ContactForm({ type }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would handle the form submission here
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  const titles = {
    prayer: "Submit Prayer Request",
    counseling: "Request Counseling",
    inquiry: "General Inquiry",
  }

  const descriptions = {
    prayer: "Share your prayer needs with us, and our team will stand with you in faith.",
    counseling: "Request a counseling session with one of our ministers.",
    inquiry: "Have a question? We're here to help.",
  }

  if (submitted) {
    return (
      <Card>
        <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[300px]">
          <CheckCircle className="h-16 w-16 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Thank You!</h3>
          <p className="text-center text-muted-foreground">
            {type === "prayer"
              ? "Your prayer request has been received. We'll be praying for you."
              : type === "counseling"
                ? "Your counseling request has been received. We'll contact you soon."
                : "Your inquiry has been received. We'll get back to you shortly."}
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{titles[type]}</CardTitle>
        <CardDescription>{descriptions[type]}</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="first-name" className="text-sm font-medium">
                First Name
              </label>
              <Input id="first-name" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="last-name" className="text-sm font-medium">
                Last Name
              </label>
              <Input id="last-name" placeholder="Doe" required />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input id="email" type="email" placeholder="john@example.com" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone (Optional)
            </label>
            <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              {type === "prayer" ? "Prayer Request" : type === "counseling" ? "Reason for Counseling" : "Message"}
            </label>
            <Textarea
              id="message"
              placeholder={
                type === "prayer"
                  ? "Please share your prayer request..."
                  : type === "counseling"
                    ? "Please share why you're seeking counseling..."
                    : "How can we help you?"
              }
              rows={4}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

