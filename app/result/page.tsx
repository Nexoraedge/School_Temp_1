"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Trophy,
  Medal,
  Award,
  Search,
  TrendingUp,
  Users,
  BookOpen,
  Target,
  Star,
  Calendar,
  Download,
  Phone,
  Mail,
  Clock,
} from "lucide-react"

// Mock data for demonstration
import { toppers , examSchedule , academicStats } from "@/const"

export default function ResultsPage() {
  const [rollNumber, setRollNumber] = useState("")
  const [selectedClass, setSelectedClass] = useState("")
  const [searchResult, setSearchResult] = useState<any>(null)
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = async () => {
    if (!rollNumber || !selectedClass) {
      alert("Please enter both roll number and select class")
      return
    }

    setIsSearching(true)

    // Simulate API call
    setTimeout(() => {
      // Mock result - in real implementation, this would come from backend
      const mockResult = {
        name: "John Doe",
        rollNo: rollNumber,
        class: selectedClass,
        percentage: 85.5,
        grade: "A",
        subjects: {
          Math: 88,
          Science: 85,
          English: 82,
          History: 87,
          Geography: 86,
        },
        rank: 15,
        totalStudents: 120,
        examDate: "2024-01-15",
        resultDate: "2024-02-01",
      }

      setSearchResult(mockResult)
      setIsSearching(false)
    }, 1500)
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Student Results</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check your examination results and view the top performers in each grade.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Statistics */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {academicStats.map((stat, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Result Search */}
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="w-6 h-6 mr-2" />
                  Search Your Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Roll Number</label>
                    <Input
                      placeholder="Enter your roll number"
                      value={rollNumber}
                      onChange={(e) => setRollNumber(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Class</label>
                    <Select value={selectedClass} onValueChange={setSelectedClass}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Grade 10">Grade 10</SelectItem>
                        <SelectItem value="Grade 11">Grade 11</SelectItem>
                        <SelectItem value="Grade 12">Grade 12</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button onClick={handleSearch} className="w-full" disabled={isSearching}>
                  {isSearching ? "Searching..." : "Search Results"}
                </Button>
              </CardContent>
            </Card>

            {/* Search Result */}
            {searchResult && (
              <Card className="animate-slide-up">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                  <CardTitle className="flex items-center justify-between">
                    <span>Result for {searchResult.name}</span>
                    <Badge className="bg-green-100 text-green-800">
                      <Star className="w-3 h-3 mr-1" />
                      Grade {searchResult.grade}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Student Information */}
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-3 text-blue-800">Student Information</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="font-medium">Name:</span>
                            <span>{searchResult.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Roll Number:</span>
                            <span>{searchResult.rollNo}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Class:</span>
                            <span>{searchResult.class}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Rank:</span>
                            <span className="font-bold text-blue-600">
                              #{searchResult.rank} of {searchResult.totalStudents}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-3 text-green-800">Overall Performance</h3>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-green-600 mb-2">{searchResult.percentage}%</div>
                          <Badge className="bg-green-600 text-white text-lg px-4 py-1">
                            Grade {searchResult.grade}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Subject-wise Performance */}
                    <div className="space-y-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-4 text-purple-800">Subject-wise Marks</h3>
                        <div className="space-y-3">
                          {Object.entries(searchResult.subjects).map(([subject, marks]) => (
                            <div key={subject} className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span className="font-medium">{subject}</span>
                                <span className="font-bold">{marks}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                                  style={{ width: `${marks}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Download Result
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Print Result
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Exam Schedule */}
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-6 h-6 mr-2" />
                  Upcoming Examinations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {examSchedule.map((exam, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold">{exam.exam}</h4>
                        <p className="text-sm text-gray-600">{new Date(exam.date).toLocaleDateString()}</p>
                      </div>
                      <Badge variant={exam.status === "Upcoming" ? "default" : "outline"}>{exam.status}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Class Toppers */}
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
                  Class Toppers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {Object.entries(toppers).map(([grade, students]) => (
                    <div key={grade}>
                      <h3 className="font-semibold text-lg mb-3 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg">
                        {grade}
                      </h3>
                      <div className="space-y-3">
                        {students.map((student, index) => (
                          <div
                            key={student.rollNo}
                            className="flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border"
                          >
                            <div className="flex-shrink-0">
                              {index === 0 && <Trophy className="w-6 h-6 text-yellow-500" />}
                              {index === 1 && <Medal className="w-6 h-6 text-gray-400" />}
                              {index === 2 && <Award className="w-6 h-6 text-orange-500" />}
                            </div>
                            <div className="flex-grow">
                              <p className="font-medium text-sm">{student.name}</p>
                              <p className="text-xs text-gray-600">{student.rollNo}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-blue-600">{student.percentage}%</p>
                              <p className="text-xs text-gray-500">Rank #{index + 1}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Important Notice */}
            <Card className="bg-yellow-50 border-yellow-200 animate-slide-up">
              <CardHeader>
                <CardTitle className="text-yellow-800">Important Notice</CardTitle>
              </CardHeader>
              <CardContent className="text-yellow-700">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    Results are provisional and subject to verification
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    Original mark sheets available from school office
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    Re-evaluation applications within 15 days
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    Contact examination department for discrepancies
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Help & Support */}
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white animate-slide-up">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <div>
                    <p className="font-semibold text-sm">Examination Office</p>
                    <p className="text-xs">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <div>
                    <p className="font-semibold text-sm">Email Support</p>
                    <p className="text-xs">results@schoolname.edu</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <div>
                    <p className="font-semibold text-sm">Office Hours</p>
                    <p className="text-xs">Mon-Fri: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start text-sm bg-transparent">
                  Academic Calendar
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm bg-transparent">
                  Exam Guidelines
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm bg-transparent">
                  Grade Scale
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm bg-transparent">
                  Re-evaluation Form
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
