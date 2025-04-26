"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Heart, Landmark, Wallet } from "lucide-react"

export function DonationSection() {
  const [amount, setAmount] = useState("")
  const [donationType, setDonationType] = useState("one-time")

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
      <div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Partner With Us</h2>
        <p className="mt-4 text-muted-foreground">
          Your generous support enables us to continue our mission of raising End-Time Armies in all spheres of
          influence.
        </p>
        <div className="mt-8 space-y-6">
          <div className="flex items-start gap-4">
            <Heart className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold">Support Our Vision</h3>
              <p className="text-sm text-muted-foreground">
                Help us expand our reach and impact more lives through our various programs and initiatives.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Wallet className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold">Fund Special Projects</h3>
              <p className="text-sm text-muted-foreground">
                Contribute to specific ministry projects like outreach programs, media expansion, and facility
                development.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Landmark className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold">Tithe and Offerings</h3>
              <p className="text-sm text-muted-foreground">
                Give your tithes and offerings to support the ongoing work of the ministry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Make a Donation</CardTitle>
            <CardDescription>Your generosity makes a difference</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="donate" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="donate">Donate</TabsTrigger>
                <TabsTrigger value="bank">Bank Transfer</TabsTrigger>
              </TabsList>
              <TabsContent value="donate" className="space-y-4">
                <div className="space-y-2">
                  <Label>Donation Type</Label>
                  <RadioGroup
                    defaultValue="one-time"
                    className="flex"
                    onValueChange={(value) => setDonationType(value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="one-time" id="one-time" />
                      <Label htmlFor="one-time">One-time</Label>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <RadioGroupItem value="monthly" id="monthly" />
                      <Label htmlFor="monthly">Monthly</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label>Select Amount</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {["$10", "$25", "$50", "$100", "$250", "$500"].map((value) => (
                      <Button
                        key={value}
                        type="button"
                        variant={amount === value ? "default" : "outline"}
                        onClick={() => setAmount(value)}
                      >
                        {value}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="custom-amount">Custom Amount</Label>
                  <Input
                    id="custom-amount"
                    placeholder="Enter amount"
                    value={amount.startsWith("$") ? "" : amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <Button className="w-full">
                  {donationType === "one-time" ? "Donate Now" : "Start Monthly Giving"}
                </Button>
              </TabsContent>
              <TabsContent value="bank" className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Bank Transfer Details</h3>
                  <div className="rounded-md bg-muted p-4 space-y-2">
                    <div className="grid grid-cols-3">
                      <span className="text-sm font-medium">Bank Name:</span>
                      <span className="text-sm col-span-2">First National Bank</span>
                    </div>
                    <div className="grid grid-cols-3">
                      <span className="text-sm font-medium">Account Name:</span>
                      <span className="text-sm col-span-2">FLAME Ministry</span>
                    </div>
                    <div className="grid grid-cols-3">
                      <span className="text-sm font-medium">Account Number:</span>
                      <span className="text-sm col-span-2">1234567890</span>
                    </div>
                    <div className="grid grid-cols-3">
                      <span className="text-sm font-medium">Sort Code:</span>
                      <span className="text-sm col-span-2">12-34-56</span>
                    </div>
                    <div className="grid grid-cols-3">
                      <span className="text-sm font-medium">Reference:</span>
                      <span className="text-sm col-span-2">Your Name + Purpose</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Please notify us of your transfer by sending an email to donations@flameministry.org with your
                  transfer details.
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col items-start">
            <p className="text-xs text-muted-foreground">
              Your donation is tax-deductible where applicable. A receipt will be emailed to you.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

