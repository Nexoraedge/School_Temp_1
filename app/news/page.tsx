import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import { newsArticles ,upcomingEvents  } from "@/const"



export default function NewsPage() {
  const featuredArticle = newsArticles.find((article) => article.featured)
  const regularArticles = newsArticles.filter((article) => !article.featured)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">News & Events</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest happenings, achievements, and upcoming events at SchoolName.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Article */}
            {featuredArticle && (
              <Card className="mb-8 overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-slide-up">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={featuredArticle.image || "/placeholder.svg"}
                      alt={featuredArticle.title}
                      width={800}
                      height={400}
                      className="w-full h-64 object-contain rounded"
                    />
                    <Badge className="absolute top-4 left-4 bg-red-600">Featured</Badge>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredArticle.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {featuredArticle.author}
                      </div>
                      <Badge variant="outline">{featuredArticle.category}</Badge>
                    </div>
                    <h2 className="text-2xl font-bold mb-3">{featuredArticle.title}</h2>
                    <p className="text-gray-600 mb-4">{featuredArticle.excerpt}</p>
                    <Link
                      href={`/news/${featuredArticle.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Regular Articles */}
            <div className="space-y-6 h-[calc(100vh-15rem)] overflow-y-auto px-1 py-2 border-[1px] border-gray-400 shadow-sm  shadow-gray-400 rounded">
              {regularArticles.map((article, index) => (
                <Card
                  key={article.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          width={300}
                          height={200}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(article.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {article.author}
                          </div>
                          <Badge variant="outline">{article.category}</Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                        <p className="text-gray-600 mb-4">{article.excerpt}</p>
                        <Link
                          href={`/news/${article.id}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                        >
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <Card className="animate-slide-up">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="border-l-4 border-blue-600 pl-4">
                      <h4 className="font-semibold">{event.title}</h4>
                      <p className="text-sm text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
                      <p className="text-sm text-gray-500">{event.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link href="/admissions" className="block text-blue-600 hover:text-blue-800">
                    Admission Process
                  </Link>
                  <Link href="/results" className="block text-blue-600 hover:text-blue-800">
                    Student Results
                  </Link>
                  <Link href="/gallery" className="block text-blue-600 hover:text-blue-800">
                    Photo Gallery
                  </Link>
                  <Link href="/sports" className="block text-blue-600 hover:text-blue-800">
                    Sports Activities
                  </Link>
                  <Link href="/contact" className="block text-blue-600 hover:text-blue-800">
                    Contact Us
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                <p className="mb-4 text-sm">Subscribe to our newsletter to receive the latest news and updates.</p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded text-gray-900"
                  />
                  <button className="w-full bg-white cursor-pointer text-blue-600 py-2 rounded font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
