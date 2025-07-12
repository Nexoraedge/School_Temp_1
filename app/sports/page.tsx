import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Calendar, MapPin, Users } from "lucide-react"
import { upcoming_Events , achievements ,sportsPrograms } from "@/const"

export default function SportsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Sports & Athletics</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Excellence in sports with world-class facilities, professional coaching, and a commitment to developing
              champions both on and off the field.
            </p>
          </div>
        </div>
      </section>

      {/* Sports Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Sports Programs</h2>
            <p className="text-xl text-gray-600">
              Comprehensive sports programs designed to nurture talent and promote physical fitness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sportsPrograms.map((sport, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <Image
                    src={sport.image || "/placeholder.svg"}
                    alt={sport.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600">{sport.name}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{sport.name}</h3>
                  <p className="text-gray-600 mb-4">{sport.description}</p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800 mb-1">Coach</h4>
                      <p className="text-sm text-gray-600">{sport.coach}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-gray-800 mb-1">Facilities</h4>
                      <p className="text-sm text-gray-600">{sport.facilities}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-gray-800 mb-2">Recent Achievements</h4>
                      <div className="space-y-1">
                        {sport.achievements.slice(0, 2).map((achievement, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs mr-1 mb-1">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">
              Celebrating excellence and recognizing outstanding performances in sports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="flex-shrink-0">{achievement.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8 animate-slide-up">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Sports Events</h2>
                <p className="text-xl text-gray-600">Don't miss these exciting sporting events and competitions.</p>
              </div>

              <div className="space-y-6">
                {upcoming_Events.map((event, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex-grow">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-xl font-bold">{event.event}</h3>
                            <Badge>{event.type}</Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-gray-600">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(event.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {event.venue}
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0 md:text-right">
                          <p className="text-lg font-semibold text-blue-600">{event.time}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Sports Statistics */}
              <Card className="animate-slide-up">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-6 h-6 mr-2" />
                    Sports Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Active Athletes</span>
                      <span className="font-bold">450+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sports Programs</span>
                      <span className="font-bold">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Professional Coaches</span>
                      <span className="font-bold">18</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Championships Won</span>
                      <span className="font-bold">25+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Sports Department */}
              <Card
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                <CardHeader>
                  <CardTitle>Join Our Teams</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm">
                    Interested in joining our sports programs? Contact our sports department for tryouts and training
                    schedules.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-semibold">Sports Director:</span> Mr. David Kumar
                    </p>
                    <p>
                      <span className="font-semibold">Phone:</span> +1 (555) 123-4567
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span> sports@schoolname.edu
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
