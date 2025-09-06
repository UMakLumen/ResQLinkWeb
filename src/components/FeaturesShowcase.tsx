import {
  Smartphone,
  Brain,
  MapPin,
  Radio,
  Shield,
  Users,
  Wifi,
  AlertTriangle,
  Activity,
  Zap,
  Target,
  Network,
} from "lucide-react";

const features = [
  {
    icon: <AlertTriangle className="h-8 w-8" />,
    title: "Instant SOS Reporting",
    description:
      "One-tap emergency reporting with automatic GPS location, photo capture, and initial AI severity assessment for immediate response coordination.",
    gradient: "from-red-500 to-orange-500",
    details: [
      "GPS auto-location",
      "Photo documentation",
      "AI severity scoring",
    ],
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI-Powered Triage System",
    description:
      "Intelligent 3-step process: report submission → AI summarization → smart priority ranking based on severity, location, and available resources.",
    gradient: "from-purple-500 to-pink-500",
    details: [
      "Smart report analysis",
      "Automated summarization",
      "Priority ranking algorithm",
    ],
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Grab-Style SOS Matching",
    description:
      "Citizens broadcast their emergency location while nearby rescuers can self-assign to incidents, creating efficient response coordination.",
    gradient: "from-blue-500 to-cyan-500",
    details: [
      "Location broadcasting",
      "Self-assignment system",
      "Real-time matching",
    ],
  },
  {
    icon: <Network className="h-8 w-8" />,
    title: "BLE Mesh Resilience",
    description:
      "Device-to-device Bluetooth mesh networking ensures communication continuity even when cellular towers are down during disasters.",
    gradient: "from-green-500 to-emerald-500",
    details: [
      "Offline mesh networking",
      "Device-to-device relay",
      "Infrastructure-independent",
    ],
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Smart Resource Allocation",
    description:
      "AI-driven assignment of rescue teams, medical supplies, and evacuation resources based on real-time demand and availability analysis.",
    gradient: "from-indigo-500 to-purple-500",
    details: [
      "Dynamic resource tracking",
      "Optimal allocation algorithms",
      "Real-time availability",
    ],
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Multi-Agency Coordination",
    description:
      "Unified command dashboard enabling seamless collaboration between fire departments, police, medical teams, and local government units.",
    gradient: "from-teal-500 to-blue-500",
    details: [
      "Cross-agency communication",
      "Unified command center",
      "Role-based access control",
    ],
  },
];

export function FeaturesShowcase() {
  return (
    <section
      id="features"
      className="py-32 bg-gradient-to-br from-[#0a0a08] via-[#161613] to-[#1a1a17] relative"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-[#fefdf5] mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-[#fefdf5] to-[#e0eaff] bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-[#e0eaff]/70 max-w-3xl mx-auto leading-relaxed">
            Every feature designed to save lives and coordinate effective
            disaster response
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="cursor-pointer group relative bg-gradient-to-br from-[#161613]/60 to-[#0a0a08]/40 backdrop-blur-sm border border-[#e0eaff]/10 rounded-3xl p-8 hover:border-[#e0eaff]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#e0eaff]/5 overflow-hidden"
            >
              {/* Icon */}
              <div
                className={`bg-gradient-to-r ${feature.gradient} p-4 rounded-2xl w-fit mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}
              >
                <div className="text-white">{feature.icon}</div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-[#fefdf5] mb-4 group-hover:text-[#e0eaff] transition-colors duration-300 relative z-10">
                {feature.title}
              </h3>
              <p className="text-[#e0eaff]/70 leading-relaxed mb-6 relative z-10">
                {feature.description}
              </p>

              {/* Feature Details */}
              <div className="space-y-2 relative z-10">
                {feature.details.map((detail, detailIndex) => (
                  <div
                    key={detailIndex}
                    className="flex items-center gap-3 text-[#e0eaff]/60 group-hover:text-[#e0eaff]/80 transition-colors duration-300"
                  >
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} shadow-lg`}
                    ></div>
                    <span className="text-sm font-medium">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Hover effect overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
              ></div>

              {/* Animated gradient border on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500 -z-10`}
              ></div>
            </div>
          ))}
        </div>

        {/* Technology Showcase */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#fefdf5] mb-4">
              <span className="bg-gradient-to-r from-[#fefdf5] to-[#e0eaff] bg-clip-text text-transparent">
                Ground-Breaking Technology
              </span>
            </h3>
            <p className="text-[#e0eaff]/70 max-w-2xl mx-auto">
              Built for resilience with cutting-edge mesh networking and
              AI-powered decision making
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 text-center group hover:border-green-500/40 transition-all duration-300">
              <Wifi className="h-8 w-8 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-[#fefdf5] font-bold mb-2">
                BLE Mesh Network
              </h4>
              <p className="text-[#e0eaff]/70 text-sm">
                Device-to-device communication without infrastructure
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center group hover:border-purple-500/40 transition-all duration-300">
              <Brain className="h-8 w-8 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-[#fefdf5] font-bold mb-2">
                AI Triage Engine
              </h4>
              <p className="text-[#e0eaff]/70 text-sm">
                Machine learning for intelligent priority ranking
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 text-center group hover:border-blue-500/40 transition-all duration-300">
              <Target className="h-8 w-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-[#fefdf5] font-bold mb-2">Smart Matching</h4>
              <p className="text-[#e0eaff]/70 text-sm">
                Efficient rescuer-to-incident assignment system
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
