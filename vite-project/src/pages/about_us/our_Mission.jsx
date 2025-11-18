import { motion } from "framer-motion";
import ImageWithFallback from "../../components/ImageWithFallback";
import { Target, Heart, Users, Award } from "lucide-react";

const our_Mission = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Company Overview  */}
      <section className="relative py-20 px-4 max-w-6xl mx-auto">
        <div className="relative grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl flex items-center"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800"
              alt="Sustainable recycling and environment"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* RIGHT SIDE TEXT with watermark behind text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-xl p-10 shadow-xl border border-white/50 overflow-hidden bg-white/30 backdrop-blur-lg"
          >
            {/* Watermark inside card, behind text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
            >
              <div className="w-[300px] h-[300px] rounded-full bg-green-300 opacity-20"></div>
            </motion.div>

            {/* Text content layered above watermark */}
            <h2 className="relative z-10 text-4xl font-extrabold mb-6 text-gray-900 tracking-wide">
              Our Mission
            </h2>

            <p className="relative z-10 text-lg text-gray-700 mb-4 leading-relaxed">
              Our mission is to become a leader in the dumpster booking
              industry. By offering the highest service quality and specialized
              solutions, we strive to fulfill our customers' waste removal needs
              across the State of Michigan.
            </p>

            <p className="relative z-10 text-lg text-gray-700 mb-4 leading-relaxed">
              Through a strong commitment to this mission, Blue Sky Disposal
              continues to be recognized as one of the most trusted names in the
              local waste management industry. Whether it's customized service
              packages, cost-effective strategies, or prompt support—our focus
              is always on maximizing value.
            </p>

            <p className="relative z-10 text-lg text-gray-700 leading-relaxed">
              And don't forget—when you rent a dumpster from a 100%
              Michigan-owned company, every dollar goes right back into
              supporting our local communities and economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-gray-900"
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Reliability",
                description: "Dependable service you can count on, every time",
                color: "blue",
              },
              {
                icon: Heart,
                title: "Care",
                description: "We care about our community and environment",
                color: "green",
              },
              {
                icon: Users,
                title: "Service",
                description: "Customer-first approach in everything we do",
                color: "purple",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Striving for the highest standards",
                color: "orange",
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div
                    className={`w-16 h-16 bg-${value.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className={`w-8 h-8 text-${value.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default our_Mission;
