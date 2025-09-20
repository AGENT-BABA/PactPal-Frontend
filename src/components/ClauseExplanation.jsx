import React from 'react';
import { MessageSquare, AlertTriangle, Info, CheckCircle, Loader2, Shield, Eye } from 'lucide-react';

export const ClauseExplanation = ({ clauses, selectedClause, onClauseSelect, isLoading }) => {

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'low': return 'text-green-300 bg-green-500/20 border-green-400/30';
      case 'medium': return 'text-yellow-300 bg-yellow-500/20 border-yellow-400/30';
      case 'high': return 'text-red-300 bg-red-500/20 border-red-400/30';
      default: return 'text-gray-300 bg-gray-500/20 border-gray-400/30';
    }
  };

  const getRiskIcon = (risk) => {
    switch (risk) {
      case 'low': return <CheckCircle className="h-4 w-4" />;
      case 'medium': return <Info className="h-4 w-4" />;
      case 'high': return <AlertTriangle className="h-4 w-4" />;
      default: return <Info className="h-4 w-4" />;
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
        <div className="flex items-center mb-6">
          <div className="h-12 w-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center mr-4">
            <MessageSquare className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Key Clauses Analysis</h2>
            <p className="text-gray-400">Breaking down complex legal language</p>
          </div>
        </div>
        <div className="flex items-center justify-center py-16">
          <div className="flex items-center space-x-4">
            <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
            <div>
              <p className="text-blue-300 font-semibold text-lg">Analyzing clauses...</p>
              <p className="text-blue-400/80">Our AI is identifying key legal terms and risks</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!clauses || clauses.length === 0) {
    return (
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
        <div className="flex items-center mb-6">
          <div className="h-12 w-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center mr-4">
            <MessageSquare className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Key Clauses Analysis</h2>
            <p className="text-gray-400">Breaking down complex legal language</p>
          </div>
        </div>
        <div className="text-center py-12">
          <div className="h-16 w-16 bg-gradient-to-r from-gray-600 to-gray-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Eye className="h-8 w-8 text-white" />
          </div>
          <p className="text-gray-400 text-lg">No specific clauses identified in this document.</p>
          <p className="text-gray-500 text-sm mt-2">The document may be too short or contain non-standard legal language.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
      <div className="flex items-center mb-6">
        <div className="h-12 w-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center mr-4">
          <MessageSquare className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Key Clauses Analysis</h2>
          <p className="text-gray-400">Click any clause below for detailed explanation</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {clauses.map((keyPoint, index) => (
          <div
            key={index}
            className={`border rounded-2xl p-6 cursor-pointer transition-all duration-300 group ${
              selectedClause === keyPoint.explanation
                ? 'border-blue-400/50 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 shadow-lg shadow-blue-500/10'
                : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
            }`}
            onClick={() => onClauseSelect(keyPoint.explanation)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {keyPoint.section}
                </span>
              </div>
              <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold border ${getRiskColor(keyPoint.risk)}`}>
                {getRiskIcon(keyPoint.risk)}
                <span className="capitalize">{keyPoint.risk} Risk</span>
              </div>
            </div>
            
            <p className="text-white font-semibold mb-3 leading-relaxed text-lg group-hover:text-blue-200 transition-colors">
              {keyPoint.explanation}
            </p>
            
            {selectedClause === keyPoint.explanation && (
              <div className="mt-6 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                <h4 className="font-bold text-white mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-blue-400" />
                  Detailed Analysis
                </h4>
                {keyPoint.keyClauses && keyPoint.keyClauses.length > 0 && (
                  <div className="mb-4">
                    <p className="text-gray-300 font-medium mb-3">Key clauses in this section:</p>
                    <ul className="text-gray-200 leading-relaxed space-y-2">
                      {keyPoint.keyClauses.map((clause, clauseIndex) => (
                        <li key={clauseIndex} className="flex items-start space-x-3">
                          <div className="h-1.5 w-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{clause}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-400/10 border border-blue-400/20 p-4 rounded-xl">
                  <p className="text-blue-200">
                    <span className="font-semibold text-blue-300">💡 Expert Tip:</span> {keyPoint.tip}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-indigo-500/10 to-purple-400/10 border border-indigo-400/20 rounded-xl">
        <div className="flex items-start space-x-4">
          <div className="h-8 w-8 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
            <Info className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="text-lg font-semibold text-indigo-300 mb-2">How to Use This Analysis</p>
            <p className="text-indigo-200/90 leading-relaxed">
              Each clause is analyzed for potential risks and implications. Click on any item to see detailed explanations 
              and practical tips. Use the risk indicators to prioritize which sections may need legal review.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};