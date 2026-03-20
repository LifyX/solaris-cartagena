import { motion } from "motion/react";
import { Heart, Award, Star, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AboutUsProps {
  t: any;
}

export function AboutUs({ t }: AboutUsProps) {
  const features = [
    {
      icon: Heart,
      title: t.aboutOurStory,
      description: t.aboutStoryText,
    },
    {
      icon: Award,
      title: t.aboutOurCommitment,
      description: t.aboutCommitmentText,
    },
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Guests" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: Award, value: "100%", label: "Satisfaction" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
            {t.aboutUsTitle}
          </h2>
          <p className="text-xl text-[#CFA349] mb-6">
            {t.aboutUsSubtitle}
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.aboutUsDescription}
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1669043962012-a5b8496cd664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGhvc3BpdGFsaXR5fGVufDF8fHx8MTc2MjkwMTI5OHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Luxury Hospitality"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1C3A]/60 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1582712697276-94f0c40ba58c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0YWdlbmElMjBjb2xvbWJpYSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjI5MDEyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Cartagena Architecture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1C3A]/60 to-transparent" />
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#0E1C3A] to-[#0E1C3A]/90 p-8 rounded-lg text-white"
            >
              <feature.icon className="h-12 w-12 text-[#CFA349] mb-4" />
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                {feature.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 border-2 border-[#CFA349] rounded-lg"
            >
              <stat.icon className="h-10 w-10 text-[#CFA349] mx-auto mb-4" />
              <div className="text-4xl text-[#0E1C3A] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
