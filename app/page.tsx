import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  ChevronRight,
  Clock,
  Facebook,
  Globe,
  Instagram,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react"
import { BibleVerse } from "@/components/bible-verse"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ProgramCard } from "@/components/program-card"
import { EventCard } from "@/components/event-card"
import { ContactForm } from "@/components/contact-form"
import { DonationSection } from "@/components/donation-section"
import { SmoothScroll } from "@/components/smooth-scroll"
import { BookCard } from "@/components/book-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SmoothScroll />
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/Flame_logo_print.png" alt="FLAME Logo" width={80} height={80} />
              {/* <span className="hidden font-bold sm:inline-block">FLAME</span> */}
            </Link>
          </div>
          <MainNav />
          <div className="flex items-center gap-2">
            <Link href="#donate" className="hidden sm:block">
              <Button variant="outline">Partner With Us</Button>
            </Link>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative h-[85vh] overflow-hidden">
            <Image
              src="/APOSTLE-13bg.jpg"
              alt="FLAME Ministry"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 flex items-center z-20">
              <div className="container px-4 md:px-6">
                <div className="max-w-2xl space-y-4">
                  <Badge className="px-3 py-1 text-sm" variant="secondary">
                    Femi Lazarus Apostolic Ministry Ecumenical
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                    Raising End-Time Armies in all spheres of influence
                  </h1>
                  <p className="text-lg text-white/90 md:text-xl">
                    Founded on the principles of apostolic teaching that seeks to raise, empower and equip believers.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="#programs">
                      <Button size="lg" className="w-full min-[400px]:w-auto bg-primary hover:bg-primary/90">
                        Explore Programs
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="#contact">
                      <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto border-white/20 text-secondary hover:bg-white/10">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bible Verse Section */}
        <section className="border-y bg-muted/50">
          <div className="container py-6">
            <BibleVerse />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About FLAME</h2>
                <div className="mt-4 text-muted-foreground space-y-4">
                  <p>
                    FLAME is Femi Lazarus Apostolic Ministry Ecumenical. Founded by the principles of apostolic teaching
                    that seeks to raise, empower and equips believers.
                  </p>
                  <p>
                    Our mission is to raise End-Time Armies in all spheres of influence, equipping believers to function
                    effectively in their God-ordained destinies and make global impact.
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="#programs">
                    <Button>
                      Our Programs
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/APOSTLE-4bg.jpg"
                  alt="FLAME Ministry"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Reach Section */}
        <section id="reach" className="py-12 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Reach</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Key milestones and values that define our ministry's impact around the world.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 mt-12">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-4xl font-bold">34+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Countries with ISM graduates and transformational testimonials</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-4xl font-bold">3,000+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>People connecting daily to Prophetic Prayer Contact (PPC)</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-4xl font-bold">
                    <Globe className="h-8 w-8" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Global impact through media, training, and apostolic meetings</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Programs</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the various ministries and programs designed to equip and empower believers.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <ProgramCard
                title="International School of Ministry (ISM)"
                description="Equips believers for Ministry and Global Impact, helping them discover and effectively deploy God's unique call upon their life."
                icon={<Globe className="h-10 w-10" />}
                link="#"
                linkText="Learn More & Register"
              />
              <ProgramCard
                title="International Ministers' Conference (IMC)"
                description="A gathering of ministers for equipping and transformation through prayer and God's word, featuring the Honour Night celebration."
                icon={<MessageSquare className="h-10 w-10" />}
                link="#"
                linkText="View Details"
              />
              <ProgramCard
                title="Prophetic Prayer Contact (PPC)"
                description="Daily morning prayers with Apostle Femi Lazarus from 6am-7am WAT, with miracles and testimonies following."
                icon={<Clock className="h-10 w-10" />}
                link="#"
                linkText="Join Prayer"
              />
              <ProgramCard
                title="Training & Mentorship"
                description="Mentorship Academy and Masterclass training sessions focused on all-round development to help believers reach their full potential."
                icon={<Calendar className="h-10 w-10" />}
                link="#"
                linkText="Explore Training"
              />
              <ProgramCard
                title="Ambience TV"
                description="The media arm offering transformational content, including sermons, music, and talk shows aligned with raising God's Endtime Armies."
                icon={<Youtube className="h-10 w-10" />}
                link="#"
                linkText="Watch Now"
              />
              <ProgramCard
                title="Therapy & Rehabilitation"
                description="Helping individuals break free from addiction to achieve restoration, recovery, growth and fulfill their God-ordained destiny."
                icon={<MapPin className="h-10 w-10" />}
                link="#"
                linkText="Get Help"
              />
            </div>
            <div className="mt-12 text-center">
              <Link href="#bookstore">
                <Button variant="outline" size="lg">
                  Visit Our Bookstore
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section id="events" className="py-12 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Events</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us for these transformative gatherings and experiences.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <EventCard
                title="April Holy Ghost Experience"
                date="April 30, 2025"
                location="Main Auditorium"
                imageUrl="/Defender_BANNER.jpg"
                link="#"
              />
              <EventCard
                title="International School of Ministry (ISM)"
                date="April 5, 2025"
                location="ISM Campus"
                imageUrl="/ism_banner_2bg.jpg"
                link="#"
                badge="Registration Open"
              />
              <EventCard
                title="International Ministers' Conference (IMC)"
                date="Coming Soon"
                location="To be announced"
                imageUrl="/ln2.jpg"
                link="#"
              />
            </div>
          </div>
        </section>

        {/* Bookstore Section */}
        <section id="bookstore" className="py-12 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Bookstore</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Life-changing and transformational materials by Apostle Femi Lazarus on various subject matters.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
              <BookCard title="Audacity of Faith" imageUrl="/AOF.png" />
              <BookCard title="Wedlock" imageUrl="/WEdluck.png" />
              <BookCard title="Insights for Living" imageUrl="/Insights_for_Living.png" />
              <BookCard title="A Crowd That Wants Small Things" imageUrl="/Crowd.png" />
              <BookCard
                title="From Dysfunctionality to Functionality"
                imageUrl="/Dysfunctionality.png"
              />
              <BookCard title="Clash of Thrones" imageUrl="/COT.png" />
              <BookCard title="What I Teach My Mentees" imageUrl="/mentees.png" />
              <BookCard title="Seeing Beyond Smoke Screen" imageUrl="/Smoke_Screen.png" />
            </div>
            <div className="mt-12 text-center">
              <Link href="#">
                <Button size="lg">Browse All Books</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Light Nation Church Section */}
        <section id="light-nation" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/ln1.jpg"
                  alt="Light Nation Church"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Light Nation Church</h2>
                <p className="mt-4 text-muted-foreground">
                  Light Nation Church was founded by Apostle Femi Lazarus with a mandate to raise kingdom-minded culture
                  shapers and global leaders.
                </p>
                <div className="mt-8">
                  <Link href="#">
                    <Button>
                      Download Light Nation App
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership/Giving Section */}
        <section id="donate" className="py-12 md:py-24 bg-primary/5">
          <div className="container px-4 md:px-6">
            <DonationSection />
          </div>
        </section>

        {/* Contact/Prayer Request Section */}
        <section id="contact" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="mt-4 text-muted-foreground">
                  We're here to help. Reach out for prayer requests, counseling, or general inquiries.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <span>+123 456 7890</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span>info@flameministry.org</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span>123 Ministry Lane, City, Country</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <Link href="#" className="hover:text-primary">
                      <Facebook className="h-6 w-6" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="hover:text-primary">
                      <Instagram className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="#" className="hover:text-primary">
                      <Twitter className="h-6 w-6" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="#" className="hover:text-primary">
                      <Youtube className="h-6 w-6" />
                      <span className="sr-only">YouTube</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <Tabs defaultValue="prayer" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="prayer">Prayer</TabsTrigger>
                    <TabsTrigger value="counseling">Counseling</TabsTrigger>
                    <TabsTrigger value="inquiry">Inquiry</TabsTrigger>
                  </TabsList>
                  <TabsContent value="prayer">
                    <ContactForm type="prayer" />
                  </TabsContent>
                  <TabsContent value="counseling">
                    <ContactForm type="counseling" />
                  </TabsContent>
                  <TabsContent value="inquiry">
                    <ContactForm type="inquiry" />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Stay Connected</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to our newsletter to receive updates on events, teachings, and testimonies.
                </p>
              </div>
              <div className="mx-auto w-full max-w-md space-y-2">
                <form className="flex flex-col sm:flex-row gap-2">
                  <Input type="email" placeholder="Enter your email" className="flex-1" />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-10">
        <div className="container flex flex-col gap-6 md:flex-row md:gap-8 px-4 md:px-6">
          <div className="flex flex-col gap-3 md:gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/Flame_logo_print.png" alt="FLAME Logo" width={100} height={100} />
            </Link>
            <p className="text-sm text-muted-foreground">Femi Lazarus Apostolic Ministry Ecumenical</p>
          </div>
          <div className="md:ml-auto grid grid-cols-2 sm:grid-cols-4 gap-10">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Ministry</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#programs" className="hover:underline">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="hover:underline">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#bookstore" className="hover:underline">
                    Bookstore
                  </Link>
                </li>
                <li>
                  <Link href="#light-nation" className="hover:underline">
                    Light Nation Church
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Articles
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Press Releases
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Bookstore
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Prayer Request
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Counseling
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mt-6 border-t pt-6 px-4 md:px-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} FLAME Ministry. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

