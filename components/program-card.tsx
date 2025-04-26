import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface ProgramCardProps {
  title: string
  description: string
  icon: React.ReactNode
  link: string
  linkText: string
}

export function ProgramCard({ title, description, icon, link, linkText }: ProgramCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="mb-2 text-primary">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link href={link} className="w-full">
          <Button variant="outline" className="w-full justify-between">
            {linkText}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

