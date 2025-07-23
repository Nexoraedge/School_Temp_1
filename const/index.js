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
  "/asset/image_1.png",
  "/asset/image_2.png",
  "/asset/image_3.png",
  "/asset/image_4.png",
]
export const Our_Leadership=[
  { number: "30+", label: "Years of Excellence" },
  { number: "1200+", label: "Current Students" },
  { number: "95%", label: "University Acceptance Rate" },
  { number: "50+", label: "National Awards" },
]
export const Our_School = [
  
    "Founded in 1990 by visionary educators Dr. Sarah Johnson and Prof. Michael Chen, SchoolName began as a small institution with a big dream: to create an educational environment where every student could thrive and reach their full potential.",

    "What started with just 50 students has now grown into a prestigious institution serving over 1,200 students from kindergarten through grade 12. Our journey has been marked by continuous innovation, academic excellence, and an unwavering commitment to holistic education.",
    
    "Today, SchoolName stands as a beacon of educational excellence, recognized nationally for our innovative teaching methods, outstanding academic results, and the remarkable achievements of our alumni who have gone on to make significant contributions in various fields worldwide." 
]
export const Teachers = [
  {
    name: "Dr. Rahul",
    position: "Founder & Principal",
    image: "/asset/sir_4.png",
    bio: "With over 30 years in education, Dr. Rahul leads our institution with vision and dedication to academic excellence.",
  },
  {
    name: "Prof. Ajay",
    position: "Co-Founder & Academic Director",
    image: "/asset/sir_1.png",
    bio: "Prof. Ajay brings innovative teaching methodologies and ensures our curriculum meets global standards.",
  },
  {
    name: "Ms. Priya",
    position: "Vice Principal",
    image: "/asset/mam_1.png",
    bio: "Ms. Priya oversees student affairs and maintains our supportive learning environment.",
  },
  {
    name: "Dr. Anupam",
    position: "Head of Sciences",
    image: "/asset/sir_4.png",
    bio: "Dr. Anupam leads our science department with cutting-edge research and hands-on learning approaches.",
  },
  {
    name: "Ms. Suma",
    position: "Head of Arts & Humanities",
    image: "/asset/mam_1.png",
    bio: "Ms. Suma nurtures creativity and critical thinking through our comprehensive arts program.",
  },
  {
    name: "Mr. Vihan",
    position: "Sports Director",
    image: "/asset/sir_4.png",
    bio: "Mr. Vihan develops our championship sports programs and promotes physical wellness for all students.",
  },
]
export const Features = [
  {
    icon: <Award className="w-12 h-12 text-blue-600" />,
    title: "Academic Excellence",
    description:
      "Top-tier curriculum with experienced faculty ensuring the highest standards of education.",
  },
  {
    icon: <Users className="w-12 h-12 text-green-600" />,
    title: "Small Class Sizes",
    description: "Personalized attention with optimal student-teacher ratios for better learning outcomes.",
  },
  {
    icon: <BookOpen className="w-12 h-12 text-purple-600" />,
    title: "Modern Facilities",
    description: "State-of-the-art laboratories, library, and technology-enabled classrooms.",
  },
  {
    icon: <Trophy className="w-12 h-12 text-orange-600" />,
    title: "Sports & Activities",
    description: "Comprehensive sports programs and extracurricular activities for all-round development.",
  },
]
export const some = [
  {
    title: "STEM Excellence",
    icon: "🔬",
    description:
      "Advanced Science, Technology, Engineering, and Mathematics programs with state-of-the-art laboratories.",
    highlights: ["Robotics Club", "Science Olympiad", "Coding Bootcamps", "Engineering Design"],
  },
  {
    title: "Liberal Arts",
    icon: "📚",
    description:
      "Comprehensive humanities program fostering critical thinking, creativity, and cultural awareness.",
    highlights: ["Creative Writing", "Philosophy", "World Languages", "Art History"],
  },
  {
    title: "Fine Arts",
    icon: "🎨",
    description:
      "Vibrant arts program including visual arts, music, theater, and digital media production.",
    highlights: ["Orchestra & Band", "Drama Productions", "Digital Art Studio", "Photography"],
  },
  {
    title: "Advanced Placement",
    icon: "🎓",
    description: "Extensive AP course offerings preparing students for college-level academic challenges.",
    highlights: ["25+ AP Courses", "College Credit", "University Partnerships", "Academic Excellence"],
  },
  {
    title: "Global Studies",
    icon: "🌍",
    description:
      "International perspective through language immersion, cultural exchange, and global citizenship programs.",
    highlights: ["Study Abroad", "Model UN", "Cultural Exchange", "Language Immersion"],
  },
  {
    title: "Life Skills",
    icon: "💡",
    description:
      "Practical skills for real-world success including financial literacy, leadership, and career preparation.",
    highlights: ["Leadership Training", "Financial Literacy", "Career Counseling", "Internship Programs"],
  },
]
export const values = [
  {
    title: "Excellence",
    description:
      "We strive for the highest standards in everything we do, from academics to character development.",
  },
  {
    title: "Innovation",
    description: "We embrace new teaching methods and technologies to enhance the learning experience.",
  },
  {
    title: "Integrity",
    description: "We build character and instill strong moral values in our students.",
  },
  {
    title: "Community",
    description: "We foster a supportive environment where everyone feels valued and included.",
  },
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

export const feeStructure = [
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
export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
  { href: "/result", label: "Results" },
  { href: "/sports", label: "Sports" },
  { href: "/admission", label: "Admissions" },
  { href: "/contact", label: "Contact" },
]

export const testimonials = [
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
    src: "/asset/image_1.png",
    alt: "Students studying in library",
    category: "Campus Life",
    title: "Modern Library Facilities",
  },
  {
    id: 2,
    src: "/asset/basket_ball.png",
    alt: "Basketball team in action",
    category: "Sports",
    title: "Championship Basketball Team",
  },
  {
    id: 3,
    src: "/asset/fair.png",
    alt: "Annual science fair",
    category: "Events",
    title: "Annual Science Fair",
  },
  {
    id: 4,
    src: "/asset/image_4.png",
    alt: "Biology laboratory",
    category: "Academics",
    title: "State-of-the-art Biology Lab",
  },
  {
    id: 5,
    src: "/asset/school.png",
    alt: "Main school building",
    category: "Infrastructure",
    title: "Main Academic Building",
  },
  {
    id: 6,
    src: "/asset/art.png",
    alt: "Students in art class",
    category: "Campus Life",
    title: "Creative Arts Program",
  },
  {
    id: 7,
    src: "/asset/swim.png",
    alt: "Swimming competition",
    category: "Sports",
    title: "Olympic-size Swimming Pool",
  },
  {
    id: 8,
    src: "/asset/grad.png",
    alt: "Graduation ceremony",
    category: "Events",
    title: "Graduation Ceremony 2024",
  },
  {
    id: 9,
    src: "/asset/computer.png",
    alt: "Computer laboratory",
    category: "Academics",
    title: "Advanced Computer Laboratory",
  },
  {
    id: 10,
    src: "/asset/aud.png",
    alt: "School auditorium",
    category: "Infrastructure", 
    title: "Grand Auditorium",
  },
  {
    id: 11,
    src: "/asset/music.png",
    alt: "Music class session",
    category: "Campus Life",
    title: "Music and Performing Arts",
  },
  {
    id: 12,
    src: "/asset/football.png",
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
    image: "/asset/science.png",
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
    image: "/asset/science.png",
    date: "2024-01-10",
    author: "Principal Sarah Johnson",
    category: "Infrastructure",
  },
  {
    id: 3,
    title: "Annual Sports Day 2024 - A Grand Success",
    excerpt:
      "Our annual sports day witnessed incredible performances from students across all grades, promoting fitness and team spirit.",
    image: "/asset/swim.png",
    date: "2024-01-08",
    author: "Mr. David Kumar",
    category: "Events",
  },
  {
    id: 4,
    title: "International Exchange Program with Western Schools",
    excerpt:
      "SchoolName partners with leading European institutions to provide students with global exposure and cultural exchange opportunities.",
    image: "/asset/image_5.png",
    date: "2024-01-05",
    author: "Ms. Emily Rodriguez",
    category: "Programs",
  },
  {
    id: 5,
    title: "Outstanding Results in Board Examinations 2023",
    excerpt:
      "Our students achieved remarkable success with 98% pass rate and multiple students scoring above 95% in their board examinations.",
    image: "/asset/image_6.png",
    date: "2024-01-03",
    author: "Academic Department",
    category: "Achievement",
  },
  {
    id: 6,
    title: "Green Initiative: Solar Panel Installation Complete",
    excerpt:
      "SchoolName takes a major step towards sustainability with the installation of solar panels, reducing our carbon footprint significantly.",
    image: "/asset/image_2.png",
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
