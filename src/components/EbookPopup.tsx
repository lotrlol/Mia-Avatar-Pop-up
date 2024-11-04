import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, FileText, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function EbookPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('hasSeenEbookPopup');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenEbookPopup', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('form-name', 'newsletter');
    formData.append('email', email);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setEmail('');
        setTimeout(() => {
          handleClose();
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-dark-purple/95 border border-white/10 rounded-2xl p-8 max-w-lg w-full shadow-2xl"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-pink-500/10 p-3 rounded-xl">
                <FileText className="h-6 w-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Double Your Website Traffic</h2>
            </div>

            <p className="text-white/70 mb-6">
              Learn how to transform your website's traffic using AI-powered content creation. Subscribe to get exclusive tips and updates delivered to your inbox!
            </p>

            {submitSuccess ? (
              <div className="text-center">
                <p className="text-green-400 mb-4">Thanks for subscribing!</p>
                <Link
                  to="/ebook"
                  className="inline-flex items-center justify-center bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors"
                  onClick={handleClose}
                >
                  Read Now
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                method="POST"
                data-netlify="true"
                name="newsletter"
              >
                <input type="hidden" name="form-name" value="newsletter" />
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                    required
                  />
                </div>

                <div className="flex space-x-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Subscribe & Read</span>
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}