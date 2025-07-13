"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Award, Users, BookOpen, Trophy, Star, ArrowRight, Badge } from "lucide-react"
import { Features, heroImages, some, values } from "@/const"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <div className="">
      {/* Hero Section with Image Slider */}
      <section className="relative h-[100vh] overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image src={image || "/placeholder.svg"} alt={`School life ${index + 1}`} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6">
              Welcome to <span className="gradient-text">SchoolName</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">Where Excellence Meets Innovation in Education</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                <Link href="/admissions">Apply Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3 bg-transparent"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SchoolName?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide world-class education with a focus on holistic development, preparing students for success in
              the 21st century.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Our Core Values</h2>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start max-lg:text-center  max-lg:w-full space-x-4">
                    <div className="flex-shrink-0 max-lg:absolute max-lg:hidden">
                      <Star className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div className="w-full max-lg:text-center">
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-up flex max-lg:w-full max-lg:justify-center">
              <Image
                src="/asset/image_discuss.png"
                alt="Students learning together"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Academics & Curriculum Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Academics & Curriculum</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive curriculum is designed to challenge, inspire, and prepare students for success in higher
              education and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 justify-center  lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-slide-up">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 max-lg:text-center">Our Educational Approach</h3>
              <div className="space-y-6 max-lg:px-20 max-md:px-10 max-sm:px-1">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Inquiry-Based Learning</h4>
                    <p className="text-gray-600">
                      Students develop critical thinking skills through hands-on exploration and research-driven
                      projects that connect learning to real-world applications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Collaborative Environment</h4>
                    <p className="text-gray-600">
                      Small class sizes foster meaningful discussions and peer-to-peer learning, building communication
                      and teamwork skills.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Personalized Learning</h4>
                    <p className="text-gray-600">
                      Individual learning plans ensure each student receives the support and challenges they need to
                      reach their full potential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-up flex max-lg:justify-center">
              <Image
                src="/asset/image_5.png"
                alt="Students engaged in learning"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Academic Programs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {some.map(({title, icon, description, highlights}, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center ">
                  <div className="text-4xl mb-4">{icon}</div>
                  <h3 className="text-xl font-bold mb-3">{title}</h3>
                  <p className="text-gray-600 mb-4">{description}</p>
                  <div className="space-y-1">
                    {highlights.map((e, idx) => (
                      <div className="text-xs mr-1 mb-1 flex sm:gap-5 max-sm:justify-between "  key={idx}>
                      <Badge className=" fill-yellow-500 text-orange-200" />
                        
                      <span className="text-base" >{e}</span>  
                      
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Academic Statistics */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-slide-up">
            <h3 className="text-2xl font-bold text-center mb-8">Academic Achievement</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "98%", label: "University Acceptance" },
                { number: "25+", label: "AP Courses Offered" },
                { number: "15:1", label: "Student-Teacher Ratio" },
                { number: "95%", label: "AP Pass Rate" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8">
            Take the first step towards an exceptional educational journey. Apply now and become part of the SchoolName
            family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              <Link href="/admissions" className="flex items-center">
                Start Application <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 bg-transparent"
            >
              <Link href="/contact">Schedule Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
