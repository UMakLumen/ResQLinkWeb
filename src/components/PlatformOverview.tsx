import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Smartphone,
  Shield,
  Building2,
  ArrowRight,
  Users,
  AlertTriangle,
  Activity,
  MapPin,
  Radio,
  Truck,
} from "lucide-react";

const platforms = [
  {
    title: "Citizen Portal",
    description:
      "Empower communities with instant reporting and real-time alerts",
    icon: <Smartphone className="h-12 w-12" />,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/20 to-cyan-500/10",
    features: [
      {
        icon: <AlertTriangle className="h-5 w-5" />,
        text: "One-tap emergency reporting",
      },
      {
        icon: <MapPin className="h-5 w-5" />,
        text: "Automatic location sharing",
      },
      {
        icon: <Activity className="h-5 w-5" />,
        text: "Real-time status updates",
      },
    ],
  },
  {
    title: "Rescuer Dashboard",
    description: "Advanced tools for first responders and rescue teams",
    icon: <Shield className="h-12 w-12" />,
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/20 to-emerald-500/10",
    features: [
      {
        icon: <Radio className="h-5 w-5" />,
        text: "Secure team communications",
      },
      { icon: <MapPin className="h-5 w-5" />, text: "Live incident mapping" },
      { icon: <Users className="h-5 w-5" />, text: "Multi-team coordination" },
    ],
  },
  {
    title: "LGU Command Center",
    description: "Comprehensive oversight for government coordination",
    icon: <Building2 className="h-12 w-12" />,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/20 to-pink-500/10",
    features: [
      { icon: <Truck className="h-5 w-5" />, text: "Resource allocation" },
      { icon: <Activity className="h-5 w-5" />, text: "Analytics & reporting" },
      {
        icon: <Users className="h-5 w-5" />,
        text: "Multi-agency coordination",
      },
    ],
  },
];

export function PlatformOverview() {
  return (
    <section className="py-32 bg-gradient-to-br from-[#161613] via-[#1a1a17] to-[#0a0a08] relative">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-[#e0eaff] border-[#e0eaff]/30 backdrop-blur-sm px-6 py-3">
            Three Specialized Platforms
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-[#fefdf5] mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-[#fefdf5] to-[#e0eaff] bg-clip-text text-transparent">
              One Application, Multiple Stakeholders
            </span>
          </h2>
          <p className="text-xl text-[#e0eaff]/70 max-w-3xl mx-auto leading-relaxed">
            Tailored interfaces and tools designed for citizens, rescue teams,
            and government agencies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={`relative group bg-gradient-to-br ${platform.bgGradient} backdrop-blur-sm border border-[#e0eaff]/20 rounded-3xl p-8 hover:border-[#e0eaff]/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden`}
            >
              {/* Background gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${platform.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`bg-gradient-to-r ${platform.gradient} p-4 rounded-2xl w-fit mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{platform.icon}</div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#fefdf5] mb-4 group-hover:text-white transition-colors duration-300">
                  {platform.title}
                </h3>
                <p className="text-[#e0eaff]/70 mb-8 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {platform.description}
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {platform.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-3 text-[#e0eaff]/80 group-hover:text-white/90 transition-colors duration-300"
                    >
                      <div className="text-[#e0eaff]/60 group-hover:text-white/70 transition-colors duration-300">
                        {feature.icon}
                      </div>
                      <span className="text-sm font-medium">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl group-hover:bg-white/20">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-red-500/80 to-red-700/60 backdrop-blur-md border border-[#e0eaff]/20 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-4xl font-bold mb-6 text-[#fefdf5]">
              Ready to Transform Disaster Response?
            </h3>
            <p className="text-[#fefdf5]/90 mb-8 max-w-2xl mx-auto leading-relaxed text-lg">
              Join communities, responders, and agencies building resilient
              disaster response capabilities
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-[#fefdf5] text-red-600 hover:bg-[#fefdf5]/90 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl px-10 py-4"
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
