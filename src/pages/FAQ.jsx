import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Mail, Phone, Clock } from 'lucide-react';

export const FAQ = () => {
  const [openItems, setOpenItems] = useState([0]);

  const faqItems = [
    {
      question: "How does this AI-powered analysis actually work?",
      answer: "Our advanced AI system has been trained on thousands of legal documents and uses natural language processing to identify complex clauses, extract key terms, and translate legal jargon into plain English. It's like having a legal expert available 24/7 to explain documents in terms anyone can understand.",
      category: "Technology"
    },
    {
      question: "What types of legal documents can I analyze?",
      answer: "We support virtually all types of legal documents including contracts, leases, employment agreements, terms of service, NDAs, purchase agreements, partnership agreements, and more. We accept PDF, Word documents, and plain text files up to 10MB.",
      category: "Documents"
    },
    {
      question: "How secure and private is my data?",
      answer: "Security is our top priority. We use bank-level encryption, process documents in real-time without permanent storage, and follow strict SOC 2 compliance standards. Your documents are never stored on our servers and are automatically purged after processing.",
      category: "Security"
    },
    {
      question: "How accurate and reliable are the AI explanations?",
      answer: "Our AI achieves 99%+ accuracy on standard legal clauses and terms. However, we always recommend consulting with a qualified attorney for critical legal decisions. Think of us as your first line of defense against confusing legal language, not a replacement for professional legal counsel.",
      category: "Accuracy"
    },
    {
      question: "Can this tool help me negotiate better contracts?",
      answer: "While we don't provide legal advice, understanding your contracts puts you in a stronger position. Our analysis highlights potentially problematic clauses, explains industry-standard terms, and helps you identify areas where you might want to seek professional guidance or negotiation.",
      category: "Business"
    },
    {
      question: "Are there any limitations on file size or document length?",
      answer: "We support files up to 10MB, which covers 99% of legal documents. For longer documents, we recommend breaking them into logical sections. Our AI can process documents of virtually any length within this size constraint.",
      category: "Technical"
    },
    {
      question: "Why do I need to create an account to use the service?",
      answer: "Creating a free account allows us to provide a better, personalized experience. You'll have access to your analysis history, can save important documents for future reference, and receive updates about new features. Plus, it helps us prevent abuse of our AI resources.",
      category: "Account"
    },
    {
      question: "What should I do if I find an error in the analysis?",
      answer: "We're constantly improving our AI and value your feedback. If you spot an error or have suggestions, please reach out through our support channels. Your input helps us enhance the accuracy and usefulness of our platform for everyone.",
      category: "Support"
    }
  ];

  const toggleItem = (index) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const categoryColors = {
    Technology: 'from-blue-500 to-cyan-400',
    Documents: 'from-green-500 to-emerald-400', 
    Security: 'from-red-500 to-pink-400',
    Accuracy: 'from-purple-500 to-indigo-400',
    Business: 'from-orange-500 to-yellow-400',
    Technical: 'from-teal-500 to-blue-400',
    Account: 'from-indigo-500 to-purple-400',
    Support: 'from-pink-500 to-rose-400'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-500/10 via-cyan-400/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-600/10 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-1/4 h-1/4 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-16">
        {/* Header Section */}
        <div className="text-center mb-16 w-full">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="h-16 w-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center">
                <HelpCircle className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 h-6 w-6 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full flex items-center justify-center">
                <MessageCircle className="h-3 w-3 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Frequently Asked</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about our AI-powered legal document analysis platform. 
            Can't find what you're looking for? We're here to help.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between group"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${categoryColors[item.category]} opacity-80`}></div>
                  <div>
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1 block">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {item.question}
                    </h3>
                  </div>
                </div>
                <div className="ml-4">
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <div className="pl-7 border-l-2 border-gradient-to-b from-blue-500 to-transparent">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="bg-gradient-to-r from-slate-800/50 via-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-3xl p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still need assistance?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our expert support team is standing by to help you get the most out of our platform. 
              Reach out through any of these channels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group">
              <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-gray-400 text-sm mb-4">Get instant help from our support team</p>
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Start Chat
              </button>
            </div> */}

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group md:col-start-1">
              <div className="h-12 w-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
              <p className="text-gray-400 text-sm mb-4">Detailed help via email within 2 hours</p>
              <a 
                href="mailto:thakrantanush@gmail.com?subject=LegalHelper Support Request&body=Hi there,%0D%0A%0D%0AI need help with:%0D%0A%0D%0A[Please describe your issue here]%0D%0A%0D%0AThank you!"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Send Email
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group md:col-start-3">
              <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
              <p className="text-gray-400 text-sm mb-4">Call us at: +1 (555) 123-4567</p>
              <a 
                href="tel:+15551234567"
                className="inline-block bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Call Now
              </a>
            </div>

            {/* <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group">
              <div className="h-12 w-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
              <p className="text-gray-400 text-sm mb-4">Direct line to our technical experts</p>
              <button className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Call Now
              </button>
            </div> */}
          </div>

          <div className="mt-8 flex items-center justify-center space-x-2 text-gray-400">
            <Clock className="h-4 w-4" />
            <span className="text-sm">Email support available 24/7 • Average response time: 2 hours</span>
          </div>
        </div>
      </div>
    </div>
  );
};