"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Users, HelpCircle } from "lucide-react"
import { testimonials } from "@/const"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! We will get back to you soon.")
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setIsSubmitting(false)
    }, 2000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

 

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help and answer any questions you might have. We look forward to hearing from you.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up">
            <CardContent className="p-6">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-2">Main Office</p>
              <p className="font-semibold text-blue-600">+1 (555) 123-4567</p>
            </CardContent>
          </Card>
          <Card
            className="text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <CardContent className="p-6">
              <Mail className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-2">General Inquiries</p>
              <p className="font-semibold text-green-600">info@schoolname.edu</p>
            </CardContent>
          </Card>
          <Card
            className="text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <CardContent className="p-6">
              <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm mb-2">School Campus</p>
              <p className="font-semibold text-purple-600">123 Education Street</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="space-y-6">
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="w-6 h-6 mr-2" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admissions">Admissions Inquiry</SelectItem>
                          <SelectItem value="academics">Academic Information</SelectItem>
                          <SelectItem value="sports">Sports Programs</SelectItem>
                          <SelectItem value="facilities">Facilities Tour</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      required
                      placeholder="Please describe your inquiry in detail..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Section */}
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle>Find Us on the Map</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-b-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-700 font-semibold">Interactive Map</p>
                    <p className="text-sm text-gray-600 mb-4">123 Education Street, Learning City, LC 12345</p>
                    <Button variant="outline" className="bg-white">
                      Open in Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">School Address</h4>
                    <p className="text-gray-600 text-sm">
                      123 Education Street
                      <br />
                      Learning City, LC 12345
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <Phone className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Phone Numbers</h4>
                    <p className="text-gray-600 text-sm">
                      Main Office: +1 (555) 123-4567
                      <br />
                      Admissions: +1 (555) 123-4568
                      <br />
                      Emergency: +1 (555) 911-HELP
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                  <Mail className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Email Addresses</h4>
                    <p className="text-gray-600 text-sm">
                      General: info@schoolname.edu
                      <br />
                      Admissions: admissions@schoolname.edu
                      <br />
                      Principal: principal@schoolname.edu
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
                  <Clock className="w-5 h-5 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Office Hours</h4>
                    <p className="text-gray-600 text-sm">
                      Monday - Friday: 8:00 AM - 5:00 PM
                      <br />
                      Saturday: 9:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Department Contacts */}
            <Card className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Department Contacts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  {
                    dept: "Admissions Office",
                    contact: "Ms. Emily Rodriguez",
                    email: "admissions@schoolname.edu",
                    color: "blue",
                  },
                  {
                    dept: "Academic Affairs",
                    contact: "Prof. Michael Chen",
                    email: "academics@schoolname.edu",
                    color: "green",
                  },
                  {
                    dept: "Sports Department",
                    contact: "Mr. David Kumar",
                    email: "sports@schoolname.edu",
                    color: "orange",
                  },
                  {
                    dept: "Student Affairs",
                    contact: "Ms. Lisa Thompson",
                    email: "students@schoolname.edu",
                    color: "purple",
                  },
                ].map((dept, index) => (
                  <div
                    key={index}
                    className={`border-l-4 border-${dept.color}-600 pl-3 py-2 bg-${dept.color}-50 rounded-r-lg`}
                  >
                    <h4 className="font-semibold text-sm">{dept.dept}</h4>
                    <p className="text-xs text-gray-600">{dept.contact}</p>
                    <p className="text-xs text-blue-600">{dept.email}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  Quick Answers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      q: "What are your admission requirements?",
                      a: "Requirements vary by grade level. Visit our Admissions page for details.",
                    },
                    {
                      q: "Do you offer financial aid?",
                      a: "Yes, we offer scholarships and payment plans. Contact admissions for more info.",
                    },
                    { q: "Can I schedule a campus tour?", a: "Contact us to schedule a personalized tour." },
                  ].map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-2">
                      <h4 className="font-semibold text-sm mb-1">{faq.q}</h4>
                      <p className="text-xs text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-12">
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <MessageCircle className="w-6 h-6 mr-2" />
                What Our Community Says
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ⭐
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm mb-3 italic">"{testimonial.message}"</p>
                    <div>
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Schedule Visit CTA */}
        <div className="mt-8">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white animate-slide-up">
            <CardContent className="p-8 text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Schedule a Campus Visit</h3>
              <p className="mb-6">Experience SchoolName firsthand with a personalized campus tour.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-gray-100">Book a Tour</Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  Virtual Tour
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
