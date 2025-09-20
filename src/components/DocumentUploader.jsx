import React, { useState } from 'react';
import { Upload, File, X, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { API_ENDPOINTS } from '../config/api';

export const DocumentUploader = ({ onDocumentUpload, onClausesExtracted }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = (file) => {
    if (file.size > 2 * 1024 * 1024) {
      setError("File size too large. Please upload a file smaller than 2MB.");
      return;
    }

    setUploadedFile(file);
    setIsProcessing(true);
    setError(null);

    const reader = new FileReader();

    reader.onload = async (e) => {
      const documentContent = e.target.result;
      try {
        console.log('🔄 Starting document summary processing...');
        const summaryResponse = await fetch(API_ENDPOINTS.SIMPLIFY_TEXT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ documentContent }),
        });

        if (!summaryResponse.ok) {
          throw new Error('Summary processing failed');
        }

        const summaryData = await summaryResponse.json();
        onDocumentUpload(summaryData.summary);
        console.log('✅ Summary processing complete');

        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log('🔄 Starting clause extraction...');
        const clausesResponse = await fetch(API_ENDPOINTS.EXTRACT_CLAUSES, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ documentContent }),
        });

        if (!clausesResponse.ok) {
          throw new Error('Clause extraction failed');
        }

        const clausesData = await clausesResponse.json();
        onClausesExtracted(clausesData.clauses);
        console.log('✅ Clause extraction complete');
      } catch (err) {
        console.error("API call failed:", err);
        setError("Failed to process document. Please try again.");
      } finally {
        setIsProcessing(false);
      }
    };

    reader.onerror = () => {
      setError("Failed to read file.");
      setIsProcessing(false);
    };

    reader.readAsText(file);
  };

  const removeFile = () => {
    setUploadedFile(null);
    setIsProcessing(false);
    setError(null);
    onDocumentUpload(null);
    onClausesExtracted(null);
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6">
      <div className="text-center">
        <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4">
          <Upload className="h-6 w-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Upload Your Document</h2>
        <p className="text-gray-300">
          Drop your legal document here or click to upload and let our AI decode it for you.
        </p>
      </div>

      {!uploadedFile ? (
        <label
          htmlFor="file-upload"
          className={`flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-300 ${
            isDragOver
              ? 'border-blue-400 bg-blue-500/10 scale-105'
              : 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="text-center">
            <div className={`h-16 w-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 ${
              isDragOver 
                ? 'bg-gradient-to-r from-blue-500 to-cyan-400 scale-110' 
                : 'bg-gradient-to-r from-gray-600 to-gray-500'
            }`}>
              <Upload className="h-8 w-8 text-white" />
            </div>
            <p className="text-lg font-semibold text-white mb-2">
              Drag and drop or <span className="text-blue-400">browse files</span>
            </p>
            <p className="text-sm text-gray-400">
              PDF, DOCX, or TXT up to 2MB
            </p>
          </div>
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            className="sr-only"
            accept=".pdf,.docx,.txt"
            onChange={(e) => handleFileUpload(e.target.files[0])}
          />
        </label>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                <File className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-white">{uploadedFile.name}</p>
                <p className="text-sm text-gray-400">
                  {(uploadedFile.size / 1024 / 1024).toFixed(1)} MB
                </p>
              </div>
            </div>
            {!isProcessing && (
              <button
                onClick={removeFile}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {isProcessing ? (
            <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 border border-blue-400/20 rounded-xl">
              <Loader2 className="h-6 w-6 animate-spin text-blue-400" />
              <div>
                <p className="text-blue-300 font-semibold">Processing your document...</p>
                <p className="text-blue-400/80 text-sm">Our AI is analyzing the content. This usually takes a few seconds.</p>
              </div>
            </div>
          ) : error ? (
            <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-red-500/10 to-pink-400/10 border border-red-400/20 rounded-xl">
              <AlertCircle className="h-6 w-6 text-red-400" />
              <div>
                <p className="text-red-300 font-semibold">Processing failed</p>
                <p className="text-red-400/80 text-sm">{error}</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-500/10 to-emerald-400/10 border border-green-400/20 rounded-xl">
              <CheckCircle className="h-6 w-6 text-green-400" />
              <div>
                <p className="text-green-300 font-semibold">Document processed successfully!</p>
                <p className="text-green-400/80 text-sm">Your summary and clause analysis are ready below.</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};