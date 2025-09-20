import React from 'react';
import { FileText, AlertTriangle, CheckCircle, Sparkles } from 'lucide-react';

export const SummaryDisplay = ({ summary }) => {
  const parseSummaryToPoints = (summaryText) => {
    if (!summaryText) return [];
    
    let points = summaryText
      .split(/\n\s*\n/)
      .map(point => point.trim())
      .filter(point => point.length > 20);
    
    if (points.length <= 1) {
      points = summaryText
        .split(/\n/)
        .map(point => point.trim())
        .filter(point => point.length > 30);
    }
    
    if (points.length <= 1) {
      const sentences = summaryText
        .split(/[.!?]+/)
        .map(sentence => sentence.trim())
        .filter(sentence => sentence.length > 20);
      
      points = [];
      for (let i = 0; i < sentences.length; i += 2) {
        const point = sentences.slice(i, i + 2).join('. ').trim();
        if (point.length > 30) {
          points.push(point + (point.endsWith('.') ? '' : '.'));
        }
      }
    }
    
    if (points.length <= 1) {
      points = summaryText
        .split(/[•\-\*]+/)
        .map(point => point.trim())
        .filter(point => point.length > 40)
        .slice(0, 6);
    }
    
    if (points.length <= 1 && summaryText.length > 200) {
      const chunkSize = Math.ceil(summaryText.length / 4);
      points = [];
      for (let i = 0; i < summaryText.length; i += chunkSize) {
        const chunk = summaryText.slice(i, i + chunkSize).trim();
        if (chunk.length > 50) {
          points.push(chunk);
        }
      }
    }
    
    return points.length > 0 ? points : [summaryText];
  };

  const summaryPoints = parseSummaryToPoints(summary);

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
      <div className="flex items-center mb-6">
        <div className="h-12 w-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mr-4">
          <FileText className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Document Summary</h2>
          <p className="text-gray-400">AI-powered analysis of your legal document</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {summaryPoints.length > 0 ? (
          summaryPoints.map((point, index) => (
            <div key={index} className="group">
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 border border-blue-400/20 rounded-xl hover:from-blue-500/15 hover:to-cyan-400/15 transition-all duration-300">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-200 leading-relaxed text-lg">
                    {point}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-6 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 border border-blue-400/20 rounded-xl">
            <p className="text-gray-200 leading-relaxed text-lg">
              {summary}
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-yellow-500/10 to-orange-400/10 border border-yellow-400/20 rounded-xl">
        <div className="flex items-start space-x-4">
          <div className="h-8 w-8 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="text-lg font-semibold text-yellow-300 mb-2">AI-Generated Insights</p>
            <p className="text-yellow-200/90 leading-relaxed">
              This summary was created by our advanced AI to help you quickly understand your document's key points. 
              While highly accurate, we recommend consulting with a legal professional for critical decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};