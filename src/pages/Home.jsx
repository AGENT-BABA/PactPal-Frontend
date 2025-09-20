// File: src/pages/Home.jsx
import React, { useState } from "react";
import { DocumentUploader } from "../components/DocumentUploader";
import { ClauseExplanation } from "../components/ClauseExplanation";
import { SummaryDisplay } from "../components/SummaryDisplay";
import { 
  FileText, 
  Zap, 
  Shield, 
  Clock, 
  Brain, 
  CheckCircle, 
  Star,
  TrendingUp,
  Lightbulb,
  Quote,
  Building,
  Scale,
  Briefcase,
  Home as HomeIcon,
  Zap as ZapIcon,
  Twitter,
  Linkedin,
  Youtube,
  ArrowUp,

} from "lucide-react";

export const Home = ({ user, onLogin }) => {
  const [uploadedDocument, setUploadedDocument] = useState(null);
  const [selectedClause, setSelectedClause] = useState(null);
  const [documentSummary, setDocumentSummary] = useState(null);
  const [extractedClauses, setExtractedClauses] = useState(null);
  const [isLoadingClauses, setIsLoadingClauses] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleDocumentUpload = (content) => {
    setUploadedDocument(content);
    setDocumentSummary(content);
    if (content) {
      setIsLoadingClauses(true);
    }
  };

  const handleClausesExtracted = (clauses) => {
    setExtractedClauses(clauses);
    setIsLoadingClauses(false);
  };

  const handleClauseSelect = (clause) => {
    setSelectedClause(clause);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Scroll to top functionality
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If no user logged in → show landing page
  if (!user) {
    return (
      <div className="min-h-screen bg-slate-900 relative overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-full h-full">
            <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-blue-500/30 via-cyan-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-600/20 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative z-10 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="text-white">Decode</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
                  Legal Complexity
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                Transform impenetrable legal documents into clear, actionable
                insights with our advanced AI-powered analysis platform.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative z-10 py-20 bg-slate-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-white">Why Choose Our </span>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  AI Platform?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've revolutionized how professionals interact with legal documents, 
                making complex contracts accessible to everyone.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-4 group-hover:animate-pulse">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">AI-Powered Analysis</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our advanced AI models understand legal language patterns and convert 
                    complex jargon into clear, understandable explanations instantly.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:animate-pulse">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Plain Language Translation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Transform legal jargon into everyday language that anyone can understand, 
                    making contracts accessible to all stakeholders.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-xl flex items-center justify-center mb-4 group-hover:animate-pulse">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">30% Time Savings</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Dramatically reduce document review time with instant summaries 
                    and key clause explanations that highlight what matters most.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="group bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mb-4 group-hover:animate-pulse">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Clause-by-Clause Breakdown</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Get detailed explanations for each contract section, with risk 
                    assessments and practical implications clearly outlined.
                  </p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="group bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-400 rounded-xl flex items-center justify-center mb-4 group-hover:animate-pulse">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Risk Assessment</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Identify potential risks and red flags in contracts with intelligent 
                    highlighting and severity ratings for informed decision-making.
                  </p>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="group bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-400 rounded-xl flex items-center justify-center mb-4 group-hover:animate-pulse">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Instant Processing</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Upload any legal document and receive comprehensive analysis 
                    within seconds, not hours of manual review.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-white">Perfect For </span>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Every Professional
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From small businesses to large enterprises, our platform serves diverse needs across industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all duration-300">
                <Scale className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Law Firms</h3>
                <p className="text-gray-300">Accelerate contract review and client consultations with instant document analysis</p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
                <Building className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Corporations</h3>
                <p className="text-gray-300">Streamline vendor agreements, employment contracts, and compliance documentation</p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 text-center hover:border-green-500/50 transition-all duration-300">
                <Briefcase className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Small Business</h3>
                <p className="text-gray-300">Understand complex contracts without expensive legal consultation fees</p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300">
                <HomeIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Individuals</h3>
                <p className="text-gray-300">Navigate lease agreements, insurance policies, and personal contracts with confidence</p>
              </div>
            </div>
          </div>
        </div>

        

        {/* How It Works Section */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-white">How It </span>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Works
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our streamlined process makes legal document analysis effortless
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Upload Document</h3>
                <p className="text-gray-300">
                  Simply drag and drop your legal document or select from your device. 
                  We support PDF, Word, and text formats.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Analysis</h3>
                <p className="text-gray-300">
                  Our advanced AI processes your document, identifying key clauses, 
                  risks, and important provisions in seconds.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Get Insights</h3>
                <p className="text-gray-300">
                  Review plain-language summaries, clause explanations, and risk 
                  assessments to make informed decisions quickly.
                </p>
              </div>
            </div>
          </div>
        </div>      

        {/* Benefits Section */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                  <span className="text-white">Transform Your </span>
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Legal Workflow
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of professionals who have revolutionized their approach 
                  to legal document analysis with our AI-powered platform.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Reduce Review Time</h4>
                      <p className="text-gray-300">Cut document analysis time by 30% with instant AI-powered insights</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Improve Understanding</h4>
                      <p className="text-gray-300">Make complex legal language accessible to all team members</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Identify Risks</h4>
                      <p className="text-gray-300">Spot potential issues and red flags before they become problems</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Boost Productivity</h4>
                      <p className="text-gray-300">Focus on strategic decisions while AI handles document analysis</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 text-center">
                  <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">95%</div>
                  <div className="text-gray-300">Accuracy Rate</div>
                </div>

                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 text-center">
                  <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">30%</div>
                  <div className="text-gray-300">Time Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="relative z-10 py-20 bg-slate-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-white">What Our </span>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Clients Say
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real feedback from professionals who've transformed their legal workflow
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-blue-400 mr-3" />
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "This platform has revolutionized how we handle contract reviews. What used to take hours now takes minutes, and our clients love the plain-language explanations."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">U</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">User 1</div>
                    <div className="text-gray-300 text-sm">Post</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-green-400 mr-3" />
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "As a small business owner, I was always intimidated by complex contracts. This AI tool gives me confidence and helps me spot potential issues before signing."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">U</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">User 2</div>
                    <div className="text-gray-300 text-sm">Post</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-indigo-400 mr-3" />
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "The accuracy and speed of analysis is remarkable. Our legal team can now focus on strategy rather than getting bogged down in document review."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">U</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">User 3</div>
                    <div className="text-gray-300 text-sm">Post</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="relative z-10 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              <span className="text-white">Ready to </span>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Get Started?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of professionals who trust our AI to decode legal complexity. 
              Start your free trial today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={onLogin}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-12 py-5 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 text-xl"
              >
                Signup Now
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <h3 className="text-2xl font-bold text-white mb-4">PactPal</h3>
                <p className="text-gray-400 mb-6 max-w-md">
                  Transform complex legal documents into clear, actionable insights with our advanced AI-powered analysis platform.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors">
                    <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors">
                    <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors">
                    <Youtube className="w-5 h-5 text-gray-400 hover:text-white" />
                  </a>
                </div>
              </div>

              <div>
  <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
  <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status</a></li>
  </ul>
</div>

            </div>

            <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 PactPal . All rights reserved.
              </p>
              <div className="flex gap-6 mt-4 sm:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}
      </div>
    );
  }

  // If user is logged in → show document upload UI
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ${
        !uploadedDocument ? "flex items-center justify-center" : ""
      }`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Welcome back, </span>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {user.name}!
              </span>
              <span className="ml-2">✨</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to decode another complex legal document? Upload it below
              and let our AI do the heavy lifting.
            </p>
          </div>

          <div
            className={`${
              uploadedDocument ? "grid lg:grid-cols-2" : "flex justify-center"
            } gap-8`}
          >
            <div className="space-y-6">
              <DocumentUploader
                onDocumentUpload={handleDocumentUpload}
                onClausesExtracted={handleClausesExtracted}
              />

              {documentSummary && <SummaryDisplay summary={documentSummary} />}
            </div>

            {uploadedDocument && (
              <ClauseExplanation
                clauses={extractedClauses}
                selectedClause={selectedClause}
                onClauseSelect={handleClauseSelect}
                isLoading={isLoadingClauses}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};