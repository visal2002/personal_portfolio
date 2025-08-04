import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download, Code, Database, BarChart3, Brain, Globe, Palette } from 'lucide-react'
import './App.css'

// Import assets
import aiMentalHealthImage from './assets/images/ai-mental-health.webp'
import agriculturalDashboardImage from './assets/images/agricultural-dashboard.png'
import customerChurnImage from './assets/images/customer-churn.png'
import salesAnalysisImage from './assets/images/sales-analysis.webp'
import sentimentAnalysisImage from './assets/images/sentiment-analysis.jpeg'
import smartResumeAnalyzerImage from './assets/images/smart-resume-analyzer.webp'

function App() {
  const skills = {
    'Programming & Analytics': ['Python (Pandas, NumPy, Scikit-learn)', 'SQL', 'MySQL'],
    'Machine Learning': ['Regression', 'NLP', 'Hypothesis Testing', 'Predictive Modeling'],
    'Data Visualization': ['Power BI', 'Excel (PivotTables, VLOOKUP)'],
    'Tools': ['GitHub', 'Firebase', 'AWS', 'OCR (PyMuPDF)'],
    'Web Development': ['HTML', 'CSS', 'JavaScript'],
    'Creative & Design': ['Canva', 'Adobe Lightroom', 'Adobe Rush']
  }

  const softSkills = [
    'Analytical Thinking',
    'Effective Communication',
    'Cross-functional Collaboration',
    'Attention to Detail',
    'Team Player'
  ]

  const projects = [
    {
      title: 'AI Mental Health Assistant',
      organization: 'GovTech Bhutan & Omdena',
      duration: 'May 2025 – June 2025',
      description: 'Led development of an AI-powered mental health assistant using transformer models (MentalBERT, MentalRoBERTa) for emotion detection and mental health condition classification.',
      technologies: ['Python', 'Transformer Models', 'NLP', 'Machine Learning'],
      achievements: ['Fine-tuned state-of-the-art models', 'Real-time AI support system', 'Personalized recommendations'],
      image: aiMentalHealthImage
    },
    {
      title: 'Agricultural & Livestock Data Dashboard',
      organization: 'Personal Project',
      duration: 'May 2025 – June 2025',
      description: 'Developed interactive Power BI dashboard for agriculture and livestock survey data visualization with region-wise analysis capabilities.',
      technologies: ['Power BI', 'Excel', 'SQL', 'Data Visualization'],
      achievements: ['Interactive KPIs and charts', 'Map visualizations', 'Multilingual data labels'],
      image: agriculturalDashboardImage
    },
    {
      title: 'Smart Resume Analyzer',
      organization: 'Final Year College Project',
      duration: 'Jan 2025 – April 2025',
      description: 'Built AI-powered tool with Gemini AI for ATS scoring, improving parsing accuracy by 35% with automated text extraction and quality scoring.',
      technologies: ['Python', 'Gemini AI', 'PyMuPDF', 'OCR', 'Firebase', 'AWS', 'Streamlit'],
      achievements: ['35% improved parsing accuracy', 'Real-time feedback system', 'Cloud storage integration'],
      image: smartResumeAnalyzerImage
    },
    {
      title: 'Customer Churn Prediction Model',
      organization: 'Bharat Intern',
      duration: 'Aug 2024 – Dec 2024',
      description: 'Achieved 80% accuracy using Scikit-learn and reduced churn rate by 12% through Power BI insights and predictive modeling.',
      technologies: ['Python', 'Scikit-learn', 'Power BI', 'Machine Learning'],
      achievements: ['80% model accuracy', '12% churn rate reduction', 'Automated alerts system'],
      image: customerChurnImage
    },
    {
      title: 'Sales Forecasting Dashboard',
      organization: 'Semester Project',
      duration: 'May 2024 – July 2024',
      description: 'Applied ARIMA time-series analysis boosting prediction accuracy by 15% with interactive Power BI dashboards.',
      technologies: ['Power BI', 'ARIMA', 'Time Series Analysis', 'DAX'],
      achievements: ['15% improved accuracy', 'Interactive dashboards', 'Automated reporting'],
      image: salesAnalysisImage
    },
    {
      title: 'Sentiment Analysis',
      organization: 'YBI Foundation',
      duration: 'Oct 2023 – Nov 2023',
      description: 'Scraped and analyzed 1,000+ tweets with 80% sentiment classification accuracy using NLTK and TextBlob.',
      technologies: ['Python', 'NLTK', 'TextBlob', 'Data Scraping'],
      achievements: ['80% classification accuracy', '1,000+ tweets analyzed', 'Keyword frequency analysis'],
      image: sentimentAnalysisImage
    }
  ]

  const experiences = [
    {
      title: 'Data Science Content Writer',
      company: 'Earth5R (Remote)',
      duration: 'May 2024 – Jul 2024',
      description: 'Authored 5+ data-driven articles using Python visualizations, increasing engagement by 15%.'
    },
    {
      title: 'Data Scientist Intern',
      company: 'Bharat Intern (Remote)',
      duration: 'Jan 2024 – May 2024',
      description: 'Developed ML models (80% accuracy) and Tableau dashboards for business analytics.'
    },
    {
      title: 'ML Intern',
      company: 'YBI Foundation (Remote)',
      duration: 'Oct 2023 – Nov 2023',
      description: 'Processed large datasets for predictive modeling and trend analysis.'
    }
  ]

  const certifications = [
    'Google Data Analytics',
    'IBM Python for Data Science',
    'edX Machine Learning (Harvard)',
    'Microsoft Excel (Data Analysis)',
    'Power BI Visualization',
    'Accenture SWE Simulation'
  ]

  const languages = [
    'English (Fluent)',
    'Hindi (Fluent)',
    'Dzongkha (Native)',
    'Nepali (Fluent)',
    'Tshangla (Fluent)'
  ]

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-800">Vishal Chettri</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-600 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-600 hover:text-blue-600 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-600 hover:text-blue-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('experience')} className="text-slate-600 hover:text-blue-600 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-blue-600 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
              VISHAL <span className="text-blue-600">CHETTRI</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8">
              Data Scientist & AI Enthusiast
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
              Results-driven Data Scientist with expertise in Python, SQL, Machine Learning, and Business Intelligence, 
              specializing in transforming complex data into actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => scrollToSection('projects')} size="lg" className="bg-blue-600 hover:bg-blue-700">
                View Projects
              </Button>
              <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full mx-auto mb-8 flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
            <div>
              <p className="text-lg text-slate-600 mb-6">
                Results-driven Data Scientist with expertise in Python, SQL, Machine Learning, and Business Intelligence, 
                specializing in transforming complex data into actionable insights. Proven track record in predictive 
                modeling, ETL pipelines, and data visualization (Power BI) to drive data-informed strategies.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Adept at developing AI-powered solutions to optimize operational efficiency and support decision-making. 
                Combines technical proficiency with strong analytical thinking to deliver scalable, data-driven results.
              </p>
              <div className="flex items-center text-slate-600 mb-4">
                <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                <span>Thimphu, Bhutan</span>
              </div>
              <div className="flex items-center text-slate-600">
                <Phone className="w-5 h-5 mr-2 text-blue-600" />
                <span>17548947</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      {category === 'Programming & Analytics' && <Code className="w-5 h-5 mr-2 text-blue-600" />}
                      {category === 'Machine Learning' && <Brain className="w-5 h-5 mr-2 text-blue-600" />}
                      {category === 'Data Visualization' && <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />}
                      {category === 'Tools' && <Database className="w-5 h-5 mr-2 text-blue-600" />}
                      {category === 'Web Development' && <Globe className="w-5 h-5 mr-2 text-blue-600" />}
                      {category === 'Creative & Design' && <Palette className="w-5 h-5 mr-2 text-blue-600" />}
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {softSkills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-sm py-2 px-4">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>
                    {project.organization} • {project.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {project.image && <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />}
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-slate-800 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-slate-800 mb-2">Key Achievements:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Experience & Education</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{exp.title}</CardTitle>
                    <CardDescription>{exp.company} • {exp.duration}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">Education</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Bachelor of Computer Application (Data Science)</CardTitle>
                  <CardDescription>Maharishi Markandeshwar (Deemed to be University)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">August 2022-May 2025</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>High School</CardTitle>
                  <CardDescription>Drametse Central School</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">February 2020-December2021</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert) => (
                <Card key={cert} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <p className="font-medium text-slate-800">{cert}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">Languages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {languages.map((lang) => (
                <Badge key={lang} variant="outline" className="text-sm py-2 px-4">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-blue-600" />
                    <span className="text-slate-600">chettrivishal677@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-blue-600" />
                    <span className="text-slate-600">17548947</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                    <span className="text-slate-600">Thimphu, Bhutan</span>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="w-5 h-5 mr-3 text-blue-600" />
                    <span className="text-slate-600">LinkedIn Profile</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Let's Connect</h3>
                <p className="text-slate-600 mb-6">
                  I'm always interested in discussing new opportunities, collaborations, or just connecting with fellow data enthusiasts. 
                  Feel free to reach out!
                </p>
                <div className="flex gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Vishal Chettri</h3>
            <p className="text-slate-400 mb-6">Data Analyst & AI Enthusiast</p>
            <div className="flex justify-center space-x-6 mb-8">
              <button className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </button>
              <button className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </button>
              <button className="text-slate-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </button>
            </div>
            <p className="text-slate-400 text-sm">
              © 2025 Vishal Chettri. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

