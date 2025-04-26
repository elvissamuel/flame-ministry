"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const verses = [
  {
    text: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.",
    reference: "Matthew 28:19",
  },
  {
    text: "But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth.",
    reference: "Acts 1:8",
  },
  {
    text: "For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes.",
    reference: "Romans 1:16",
  },
  {
    text: "And he gave the apostles, the prophets, the evangelists, the shepherds and teachers, to equip the saints for the work of ministry, for building up the body of Christ.",
    reference: "Ephesians 4:11-12",
  },
  {
    text: "For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them.",
    reference: "Ephesians 2:10",
  },
]

export function BibleVerse() {
  const [currentVerse, setCurrentVerse] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerse((prev) => (prev + 1) % verses.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="border-none bg-transparent">
      <CardContent className="flex items-center justify-center p-4 text-center">
        <div className="max-w-3xl flex flex-col items-center space-y-2">
          <Quote className="h-6 w-6 text-primary/60" />
          <p className="text-lg md:text-xl italic">{verses[currentVerse].text}</p>
          <p className="text-sm font-medium text-muted-foreground">{verses[currentVerse].reference}</p>
        </div>
      </CardContent>
    </Card>
  )
}

