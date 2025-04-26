import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"

interface BookCardProps {
  title: string
  imageUrl: string
  link?: string
}

export function BookCard({ title, imageUrl, link = "#" }: BookCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg">
      <div className="relative h-[300px] w-full bg-muted/30">
        <Image 
          src={imageUrl || "/placeholder.svg"} 
          alt={title} 
          fill 
          className="object-contain p-4" 
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-center line-clamp-2 h-12">{title}</h3>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={link} className="w-full">
          <Button variant="outline" className="w-full">
            <ShoppingCart className="mr-2 h-4 w-4" />
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

