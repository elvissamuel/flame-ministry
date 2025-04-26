import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"

interface EventCardProps {
  title: string
  date: string
  location: string
  imageUrl: string
  link: string
  badge?: string
}

export function EventCard({ title, date, location, imageUrl, link, badge }: EventCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        {badge && (
          <div className="absolute top-2 right-2">
            <Badge variant="secondary">{badge}</Badge>
          </div>
        )}
      </div>
      <CardHeader>
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={link} className="w-full">
          <Button variant="outline" className="w-full">
            Learn More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

