import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About SchoolName</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over three decades, we have been committed to providing exceptional education that nurtures young
              minds and builds tomorrow's leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 1990 by visionary educators Dr. Sarah Johnson and Prof. Michael Chen, SchoolName began as a
                  small institution with a big dream: to create an educational environment where every student could
                  thrive and reach their full potential.
                </p>
                <p>
                  What started with just 50 students has now grown into a prestigious institution serving over 1,200
                  students from kindergarten through grade 12. Our journey has been marked by continuous innovation,
                  academic excellence, and an unwavering commitment to holistic education.
                </p>
                <p>
                  Today, SchoolName stands as a beacon of educational excellence, recognized nationally for our
                  innovative teaching methods, outstanding academic results, and the remarkable achievements of our
                  alumni who have gone on to make significant contributions in various fields worldwide.
                </p>
              </div>
            </div>
            <div className="animate-slide-up">
              <Image
                src="/placeholder.svg?height=500&width=600&text=School+History"
                alt="School history"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <Target className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide exceptional education that empowers students to become confident, creative, and
                  compassionate global citizens who make positive contributions to society.
                </p>
              </CardContent>
            </Card>

            <Card
              className="text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <Eye className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading educational institution that inspires lifelong learning, fosters innovation, and
                  develops future leaders who will shape a better world.
                </p>
              </CardContent>
            </Card>

            <Card
              className="text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <Heart className="w-12 h-12 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <p className="text-gray-600">
                  Excellence, Integrity, Innovation, Respect, Collaboration, and Community - these core values guide
                  everything we do and shape the character of our students.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the dedicated professionals who guide our institution towards excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                position: "Founder & Principal",
                image: "/placeholder.svg?height=300&width=300&text=Dr.+Sarah+Johnson",
                bio: "With over 30 years in education, Dr. Johnson leads our institution with vision and dedication to academic excellence.",
              },
              {
                name: "Prof. Michael Chen",
                position: "Co-Founder & Academic Director",
                image: "/placeholder.svg?height=300&width=300&text=Prof.+Michael+Chen",
                bio: "Prof. Chen brings innovative teaching methodologies and ensures our curriculum meets global standards.",
              },
              {
                name: "Ms. Emily Rodriguez",
                position: "Vice Principal",
                image: "/placeholder.svg?height=300&width=300&text=Ms.+Emily+Rodriguez",
                bio: "Ms. Rodriguez oversees student affairs and maintains our supportive learning environment.",
              },
              {
                name: "Dr. James Wilson",
                position: "Head of Sciences",
                image: "/placeholder.svg?height=300&width=300&text=Dr.+James+Wilson",
                bio: "Dr. Wilson leads our science department with cutting-edge research and hands-on learning approaches.",
              },
              {
                name: "Ms. Lisa Thompson",
                position: "Head of Arts & Humanities",
                image: "/placeholder.svg?height=300&width=300&text=Ms.+Lisa+Thompson",
                bio: "Ms. Thompson nurtures creativity and critical thinking through our comprehensive arts program.",
              },
              {
                name: "Mr. David Kumar",
                position: "Sports Director",
                image: "/placeholder.svg?height=300&width=300&text=Mr.+David+Kumar",
                bio: "Mr. Kumar develops our championship sports programs and promotes physical wellness for all students.",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl">Recognition and awards that reflect our commitment to excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "30+", label: "Years of Excellence" },
              { number: "1200+", label: "Current Students" },
              { number: "95%", label: "University Acceptance Rate" },
              { number: "50+", label: "National Awards" },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
