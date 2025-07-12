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

export const heroImages = [
  "/placeholder.svg?height=600&width=1200&text=Students+in+Classroom",
  "/placeholder.svg?height=600&width=1200&text=School+Campus",
  "/placeholder.svg?height=600&width=1200&text=Sports+Activities",
  "/placeholder.svg?height=600&width=1200&text=Science+Laboratory",
]
 export const admissionProcess = [
   {
     step: 1,
     title: "Application Submission",
     description: "Complete and submit the online application form with required documents.",
     deadline: "March 31, 2024",
     status: "Open",
   },
   {
     step: 2,
     title: "Entrance Examination",
     description: "Appear for the entrance examination covering core subjects.",
     deadline: "April 15, 2024",
     status: "Upcoming",
   },
   {
     step: 3,
     title: "Interview Process",
     description: "Personal interview with student and parents/guardians.",
     deadline: "April 30, 2024",
     status: "Upcoming",
   },
   {
     step: 4,
     title: "Result Declaration",
     description: "Admission results will be announced and communicated.",
     deadline: "May 15, 2024",
     status: "Pending",
   },
   {
     step: 5,
     title: "Fee Payment & Enrollment",
     description: "Complete fee payment and enrollment formalities.",
     deadline: "May 31, 2024",
     status: "Pending",
   },
 ]
 
 export const eligibilityCriteria = [
   {
     grade: "Kindergarten",
     ageRequirement: "3-4 years",
     documents: ["Birth Certificate", "Medical Certificate", "Passport Photos"],
     additionalInfo: "Basic interaction and communication skills assessment",
   },
   {
     grade: "Grade 1-5",
     ageRequirement: "5-10 years",
     documents: ["Previous School Records", "Birth Certificate", "Medical Certificate", "Transfer Certificate"],
     additionalInfo: "Age-appropriate assessment in basic subjects",
   },
   {
     grade: "Grade 6-8",
     ageRequirement: "11-13 years",
     documents: ["Previous School Records", "Birth Certificate", "Medical Certificate", "Transfer Certificate"],
     additionalInfo: "Entrance test in Math, Science, and English",
   },
   {
     grade: "Grade 9-10",
     ageRequirement: "14-15 years",
     documents: ["Previous School Records", "Birth Certificate", "Medical Certificate", "Transfer Certificate"],
     additionalInfo: "Comprehensive entrance examination and interview",
   },
   {
     grade: "Grade 11-12",
     ageRequirement: "16-17 years",
     documents: ["Grade 10 Certificate", "Birth Certificate", "Medical Certificate", "Transfer Certificate"],
     additionalInfo: "Subject-specific entrance test and counseling session",
   },
 ]
 
export  const feeStructure = [
   {
     grade: "Kindergarten",
     admissionFee: "$500",
     annualTuition: "$8,000",
     facilities: "$1,200",
     total: "$9,700",
   },
   {
     grade: "Grade 1-5",
     admissionFee: "$750",
     annualTuition: "$10,000",
     facilities: "$1,500",
     total: "$12,250",
   },
   {
     grade: "Grade 6-8",
     admissionFee: "$1,000",
     annualTuition: "$12,000",
     facilities: "$1,800",
     total: "$14,800",
   },
   {
     grade: "Grade 9-10",
     admissionFee: "$1,250",
     annualTuition: "$14,000",
     facilities: "$2,000",
     total: "$17,250",
   },
   {
     grade: "Grade 11-12",
     admissionFee: "$1,500",
     annualTuition: "$16,000",
     facilities: "$2,200",
     total: "$19,700",
   },
 ]
export  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/gallery", label: "Gallery" },
    { href: "/news", label: "News" },
    { href: "/result", label: "Results" },
    { href: "/sports", label: "Sports" },
    { href: "/admission", label: "Admissions" },
    { href: "/contact", label: "Contact" },
  ]

  export  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Parent",
      message:
        "SchoolName has exceeded our expectations. The teachers are dedicated and the facilities are outstanding.",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Alumni",
      message: "The education I received here prepared me perfectly for university and my career in engineering.",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      role: "Current Parent",
      message: "My daughter loves coming to school every day. The community here is truly special.",
      rating: 5,
    },
  ]

  export const galleryImages = [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=600&text=Students+in+Library",
      alt: "Students studying in library",
      category: "Campus Life",
      title: "Modern Library Facilities",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=600&text=Basketball+Team",
      alt: "Basketball team in action",
      category: "Sports",
      title: "Championship Basketball Team",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=600&text=Science+Fair",
      alt: "Annual science fair",
      category: "Events",
      title: "Annual Science Fair",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=600&text=Chemistry+Lab",
      alt: "Chemistry laboratory",
      category: "Academics",
      title: "State-of-the-art Chemistry Lab",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=600&text=School+Building",
      alt: "Main school building",
      category: "Infrastructure",
      title: "Main Academic Building",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=600&text=Art+Class",
      alt: "Students in art class",
      category: "Campus Life",
      title: "Creative Arts Program",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=400&width=600&text=Swimming+Pool",
      alt: "Swimming competition",
      category: "Sports",
      title: "Olympic-size Swimming Pool",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=400&width=600&text=Graduation+Ceremony",
      alt: "Graduation ceremony",
      category: "Events",
      title: "Graduation Ceremony 2024",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=400&width=600&text=Computer+Lab",
      alt: "Computer laboratory",
      category: "Academics",
      title: "Advanced Computer Laboratory",
    },
    {
      id: 10,
      src: "/placeholder.svg?height=400&width=600&text=Auditorium",
      alt: "School auditorium",
      category: "Infrastructure",
      title: "Grand Auditorium",
    },
    {
      id: 11,
      src: "/placeholder.svg?height=400&width=600&text=Music+Class",
      alt: "Music class session",
      category: "Campus Life",
      title: "Music and Performing Arts",
    },
    {
      id: 12,
      src: "/placeholder.svg?height=400&width=600&text=Football+Field",
      alt: "Football field",
      category: "Sports",
      title: "Professional Football Field",
    },
  ]

 export const galleryCategories = ["All", "Campus Life", "Sports", "Events", "Academics", "Infrastructure"]

export const newsArticles = [
  {
    id: 1,
    title: "SchoolName Students Win National Science Competition",
    excerpt:
      "Our brilliant students secured first place in the National Science Olympiad, showcasing exceptional talent in physics and chemistry.",
    image: "/placeholder.svg?height=300&width=500&text=Science+Competition+Winners",
    date: "2024-01-15",
    author: "Dr. James Wilson",
    category: "Achievement",
    featured: true,
  },
  {
    id: 2,
    title: "New State-of-the-Art STEM Laboratory Inaugurated",
    excerpt:
      "We are proud to announce the opening of our new STEM laboratory equipped with cutting-edge technology and research facilities.",
    image: "/placeholder.svg?height=300&width=500&text=New+STEM+Lab",
    date: "2024-01-10",
    author: "Principal Sarah Johnson",
    category: "Infrastructure",
  },
  {
    id: 3,
    title: "Annual Sports Day 2024 - A Grand Success",
    excerpt:
      "Our annual sports day witnessed incredible performances from students across all grades, promoting fitness and team spirit.",
    image: "/placeholder.svg?height=300&width=500&text=Sports+Day+2024",
    date: "2024-01-08",
    author: "Mr. David Kumar",
    category: "Events",
  },
  {
    id: 4,
    title: "International Exchange Program with European Schools",
    excerpt:
      "SchoolName partners with leading European institutions to provide students with global exposure and cultural exchange opportunities.",
    image: "/placeholder.svg?height=300&width=500&text=Exchange+Program",
    date: "2024-01-05",
    author: "Ms. Emily Rodriguez",
    category: "Programs",
  },
  {
    id: 5,
    title: "Outstanding Results in Board Examinations 2023",
    excerpt:
      "Our students achieved remarkable success with 98% pass rate and multiple students scoring above 95% in their board examinations.",
    image: "/placeholder.svg?height=300&width=500&text=Board+Results+2023",
    date: "2024-01-03",
    author: "Academic Department",
    category: "Achievement",
  },
  {
    id: 6,
    title: "Green Initiative: Solar Panel Installation Complete",
    excerpt:
      "SchoolName takes a major step towards sustainability with the installation of solar panels, reducing our carbon footprint significantly.",
    image: "/placeholder.svg?height=300&width=500&text=Solar+Panels",
    date: "2024-01-01",
    author: "Facilities Team",
    category: "Environment",
  },
]

export const upcomingEvents = [
  {
    title: "Parent-Teacher Conference",
    date: "2024-02-15",
    time: "9:00 AM - 5:00 PM",
  },
  {
    title: "Annual Cultural Festival",
    date: "2024-02-20",
    time: "6:00 PM - 9:00 PM",
  },
  {
    title: "Science Exhibition",
    date: "2024-02-25",
    time: "10:00 AM - 4:00 PM",
  },
  {
    title: "Inter-School Debate Competition",
    date: "2024-03-01",
    time: "2:00 PM - 6:00 PM",
  },
]

export const toppers = {
  "Grade 10": [
    {
      name: "Sarah Johnson",
      rollNo: "G10001",
      percentage: 98.5,
      subjects: { Math: 99, Science: 98, English: 98, History: 99, Geography: 97 },
    },
    {
      name: "Michael Chen",
      rollNo: "G10002",
      percentage: 97.8,
      subjects: { Math: 98, Science: 97, English: 98, History: 98, Geography: 97 },
    },
    {
      name: "Emily Davis",
      rollNo: "G10003",
      percentage: 97.2,
      subjects: { Math: 97, Science: 98, English: 96, History: 97, Geography: 98 },
    },
  ],
  "Grade 11": [
    {
      name: "David Wilson",
      rollNo: "G11001",
      percentage: 96.8,
      subjects: { Math: 97, Physics: 98, Chemistry: 96, English: 97, Biology: 95 },
    },
    {
      name: "Lisa Rodriguez",
      rollNo: "G11002",
      percentage: 96.2,
      subjects: { Math: 96, Physics: 97, Chemistry: 95, English: 98, Biology: 96 },
    },
    {
      name: "James Kumar",
      rollNo: "G11003",
      percentage: 95.9,
      subjects: { Math: 95, Physics: 96, Chemistry: 97, English: 95, Biology: 96 },
    },
  ],
  "Grade 12": [
    {
      name: "Anna Thompson",
      rollNo: "G12001",
      percentage: 99.2,
      subjects: { Math: 100, Physics: 99, Chemistry: 99, English: 98, Computer: 100 },
    },
    {
      name: "Robert Lee",
      rollNo: "G12002",
      percentage: 98.7,
      subjects: { Math: 99, Physics: 98, Chemistry: 99, English: 99, Computer: 98 },
    },
    {
      name: "Maria Garcia",
      rollNo: "G12003",
      percentage: 98.1,
      subjects: { Math: 98, Physics: 99, Chemistry: 97, English: 98, Computer: 99 },
    },
  ],
}

export const examSchedule = [
  { exam: "Mid-Term Examinations", date: "2024-03-15", status: "Upcoming" },
  { exam: "Final Examinations", date: "2024-05-20", status: "Scheduled" },
  { exam: "Supplementary Exams", date: "2024-06-15", status: "Scheduled" },
]

export const academicStats = [
  { label: "Overall Pass Rate", value: "98.5%", icon: <TrendingUp className="w-6 h-6 text-green-600" /> },
  { label: "Students Appeared", value: "1,200+", icon: <Users className="w-6 h-6 text-blue-600" /> },
  { label: "Subjects Offered", value: "25+", icon: <BookOpen className="w-6 h-6 text-purple-600" /> },
  { label: "Average Score", value: "87.3%", icon: <Target className="w-6 h-6 text-orange-600" /> },
]

export const sportsPrograms = [
  {
    name: "Basketball",
    image: "/placeholder.svg?height=300&width=400&text=Basketball+Team",
    description: "Our championship basketball team has won 5 consecutive state titles.",
    achievements: ["State Champions 2023", "Regional Champions 2022", "District Champions 2021"],
    coach: "Coach Michael Johnson",
    facilities: "Indoor court with professional lighting and seating for 500 spectators",
  },
  {
    name: "Swimming",
    image: "/placeholder.svg?height=300&width=400&text=Swimming+Pool",
    description: "Olympic-size swimming pool with professional training programs.",
    achievements: ["National Swimming Meet 2023", "State Records in 3 categories", "Inter-school Champions"],
    coach: "Coach Sarah Williams",
    facilities: "50-meter Olympic pool with 8 lanes and diving boards",
  },
  {
    name: "Football",
    image: "/placeholder.svg?height=300&width=400&text=Football+Team",
    description: "Professional-grade football field with comprehensive training programs.",
    achievements: ["Regional Champions 2023", "Best Defense Award 2022", "Fair Play Award 2021"],
    coach: "Coach David Martinez",
    facilities: "Full-size football field with synthetic turf and floodlights",
  },
  {
    name: "Tennis",
    image: "/placeholder.svg?height=300&width=400&text=Tennis+Courts",
    description: "Multiple tennis courts with professional coaching and equipment.",
    achievements: ["State Doubles Champions", "Individual Singles Winner", "Team Tournament Winners"],
    coach: "Coach Lisa Chen",
    facilities: "4 professional tennis courts with all-weather surfaces",
  },
  {
    name: "Track & Field",
    image: "/placeholder.svg?height=300&width=400&text=Track+Field",
    description: "Comprehensive track and field program with modern facilities.",
    achievements: ["Multiple State Records", "Regional Track Meet Winners", "Individual Gold Medals"],
    coach: "Coach Robert Taylor",
    facilities: "400-meter track with field event areas and timing systems",
  },
  {
    name: "Volleyball",
    image: "/placeholder.svg?height=300&width=400&text=Volleyball+Team",
    description: "Indoor and beach volleyball programs for all skill levels.",
    achievements: ["District Champions 2023", "Best Team Spirit Award", "Volleyball Excellence Award"],
    coach: "Coach Amanda Davis",
    facilities: "Indoor gymnasium with 2 professional volleyball courts",
  },
]

export const upcoming_Events = [
  {
    event: "Inter-School Basketball Tournament",
    date: "2024-02-15",
    time: "9:00 AM",
    venue: "SchoolName Gymnasium",
    type: "Tournament",
  },
  {
    event: "Annual Swimming Gala",
    date: "2024-02-20",
    time: "10:00 AM",
    venue: "School Swimming Pool",
    type: "Competition",
  },
  {
    event: "Football Championship Final",
    date: "2024-02-25",
    time: "4:00 PM",
    venue: "Main Football Field",
    type: "Championship",
  },
  {
    event: "Tennis Open Tournament",
    date: "2024-03-01",
    time: "8:00 AM",
    venue: "Tennis Courts",
    type: "Open Tournament",
  },
]

export const achievements = [
  {
    title: "State Basketball Champions 2023",
    description: "Our basketball team secured the state championship for the fifth consecutive year.",
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: "National Swimming Records",
    description: "Three students set new national records in their respective categories.",
    icon: <Medal className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Best Sports School Award",
    description: "Recognized as the best sports school in the region for overall excellence.",
    icon: <Trophy className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Olympic Qualifier",
    description: "Two of our alumni qualified for the national Olympic team.",
    icon: <Medal className="w-8 h-8 text-red-500" />,
  },
]
