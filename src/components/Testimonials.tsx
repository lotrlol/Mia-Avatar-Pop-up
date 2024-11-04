import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Since using MIA, we've seen a steady increase in website visits and engagement. The results speak for themselves!"
    },
    {
      quote: "MIA has completely automated our content creation process, letting us focus on growing our business instead of content production."
    },
    {
      quote: "In just a few months, we've managed to double our organic traffic thanks to MIA. The system's simplicity and the speed at which content is produced are truly impressive."
    },
    {
      quote: "What stands out the most is how well the AI understands and maintains our brand voice in every article. Our visibility and customer trust are growing steadily."
    },
    {
      quote: "MIA has enabled us to create far more pages without the high costs of a traditional marketing team. A sustainable and scalable solution for our SEO needs."
    }
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-dark-purple/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">MIA's Proven Results</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Businesses using MIA see an average doubling in website traffic within a few months.
          </p>
        </div>

        <div className="relative max-w-[100vw] mx-auto overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a051c] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a051c] to-transparent z-10" />

          <motion.div
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
            className="flex gap-8 w-fit"
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[400px] bg-dark-purple/50 backdrop-blur-sm border border-white/5 p-8 rounded-xl"
              >
                <div className="bg-pink-500/10 w-10 h-10 rounded-full flex items-center justify-center mb-6">
                  <Quote className="h-5 w-5 text-pink-500" />
                </div>
                <p className="text-white/90 text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}