import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Calendar, CheckCircle, AlertCircle, Users, BookOpen, Award } from "lucide-react"
import {eligibilityCriteria , admissionProcess , feeStructure} from "@/const"

export default function AdmissionsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Admissions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join the SchoolName family and embark on an exceptional educational journey. We welcome students who are
              eager to learn, grow, and make a positive impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Apply Now
              </Button>
              <Button size="lg" variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Admission Process</h2>
            <p className="text-xl text-gray-600">Follow these simple steps to secure your place at SchoolName.</p>
          </div>

          <div className="space-y-8">
            {admissionProcess.map((step, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start space-x-4 flex-grow">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-600 mb-2">{step.description}</p>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-500">Deadline: {step.deadline}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Badge
                        className={
                          step.status === "Open"
                            ? "bg-green-100 text-green-800"
                            : step.status === "Upcoming"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                        }
                      >
                        {step.status === "Open" && <CheckCircle className="w-3 h-3 mr-1" />}
                        {step.status === "Upcoming" && <AlertCircle className="w-3 h-3 mr-1" />}
                        {step.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
            <p className="text-xl text-gray-600">Admission requirements for different grade levels.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {eligibilityCriteria.map((criteria, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
                    {criteria.grade}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Age Requirement</h4>
                    <p className="text-gray-600">{criteria.ageRequirement}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Required Documents</h4>
                    <ul className="space-y-1">
                      {criteria.documents.map((doc, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Additional Information</h4>
                    <p className="text-sm text-gray-600">{criteria.additionalInfo}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fee Structure</h2>
            <p className="text-xl text-gray-600">
              Transparent and competitive fee structure for academic year 2024-25.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden animate-slide-up">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Grade Level</th>
                  <th className="px-6 py-4 text-left">Admission Fee</th>
                  <th className="px-6 py-4 text-left">Annual Tuition</th>
                  <th className="px-6 py-4 text-left">Facilities Fee</th>
                  <th className="px-6 py-4 text-left">Total (First Year)</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">{fee.grade}</td>
                    <td className="px-6 py-4">{fee.admissionFee}</td>
                    <td className="px-6 py-4">{fee.annualTuition}</td>
                    <td className="px-6 py-4">{fee.facilities}</td>
                    <td className="px-6 py-4 font-bold text-blue-600">{fee.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg animate-slide-up">
            <h3 className="font-semibold text-yellow-800 mb-2">Important Notes:</h3>
            <ul className="space-y-1 text-sm text-yellow-700">
              <li>• Fees are subject to annual review and may be revised</li>
              <li>• Payment plans and financial aid options are available</li>
              <li>• Additional charges may apply for optional activities and trips</li>
              <li>• Sibling discounts available for multiple enrollments</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Why Choose SchoolName?</h2>
            <p className="text-xl">Discover what makes us the preferred choice for quality education.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12" />,
                title: "Academic Excellence",
                description:
                  "98% university acceptance rate with students excelling in national and international competitions.",
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Experienced Faculty",
                description: "Highly qualified teachers with advanced degrees and years of teaching experience.",
              },
              {
                icon: <BookOpen className="w-12 h-12" />,
                title: "Holistic Development",
                description: "Comprehensive programs focusing on academics, sports, arts, and character building.",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Apply?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Take the first step towards an exceptional educational journey. Our admissions team is here to guide you
            through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Your Application
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Campus Visit
            </Button>
          </div>
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">Need Help?</h3>
            <p className="text-gray-600 mb-2">Our admissions team is available to answer your questions.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <span>📞 +1 (555) 123-4567</span>
              <span>✉️ admissions@schoolname.edu</span>
              <span>🕒 Mon-Fri: 9:00 AM - 5:00 PM</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
