import { Badge } from "./ui/badge";
import { Shield, Target, Globe, Heart, Users, TrendingUp } from "lucide-react";
import sdg11Logo from '../assets/logos/sdg/E_WEB_11.png';
import sdg13Logo from '../assets/logos/sdg/E_WEB_13.png';

const sdgGoals = [
  {
    number: "11",
    title: "Sustainable Cities and Communities",
    description:
      "Significantly reduce deaths, affected people, and economic losses from disasters",
    icon: (
      <img className="h-full w-full" src={sdg11Logo} />
    ),
    gradient: "from-orange-500 to-red-500",
    targets: [
      "Reduce disaster-related deaths",
      "Minimize people affected ",
      "Decrease economic losses",
      "Protect vulnerable populations",
    ],
    resqlinkContribution:
      "ResQLink's AI-powered triage and offline-first features directly reduces response times and saves lives during emergencies, contributing to lower casualty rates and faster recovery.",
  },
  {
    number: "13",
    title: "Climate Action",
    description:
      "Strengthen resilience and adaptive capacity to climate-related hazards",
    icon: (
      <img className="h-full w-full" src={sdg13Logo} />
    ),
    gradient: "from-green-500 to-blue-500",
    targets: [
      "Build climate resilience",
      "Strengthen adaptive capacity",
      "Improve disaster preparedness",
      "Enhance early warning systems",
    ],
    resqlinkContribution:
      "Our platform builds community resilience through real-time disaster monitoring, predictive analytics, and coordinated response capabilities that adapt to changing climate risks.",
  },
];

const impactMetrics = [
  {
    icon: <Heart className="h-6 w-6" />,
    value: "Lives Saved",
    description: "Through faster response coordination",
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: <Users className="h-6 w-6" />,
    value: "Communities Protected",
    description: "With resilient communication networks",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    value: "Response Efficiency",
    description: "AI-optimized resource allocation",
    gradient: "from-green-500 to-emerald-500",
  },
];

export function SDGSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-[#161613] via-[#1a1a17] to-[#0a0a08] relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-blue-500/20 to-green-500/20 text-[#e0eaff] border-[#e0eaff]/30 backdrop-blur-sm px-6 py-3">
            <Target className="h-4 w-4 mr-2" />
            UN Sustainable Development Goals
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-[#fefdf5] mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-[#fefdf5] to-[#e0eaff] bg-clip-text text-transparent">
              Building Resilient Communities
            </span>
          </h2>
          <p className="text-xl text-[#e0eaff]/70 max-w-3xl mx-auto leading-relaxed mb-12">
            ResQLink directly contributes to achieving the UN's sustainable
            development goals for disaster resilience and climate adaptation
          </p>
        </div>

        {/* SDG Goals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {sdgGoals.map((goal, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#161613]/80 to-[#0a0a08]/60 backdrop-blur-md border border-[#e0eaff]/20 rounded-3xl p-8 hover:border-[#e0eaff]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`bg-gradient-to-r ${goal.gradient} h-16 w-16 rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{goal.icon}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#fefdf5] mb-1">
                    SDG {goal.number}
                  </div>
                  <div className="text-[#e0eaff]/80 font-medium">
                    {goal.title}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-[#e0eaff]/70 mb-8 leading-relaxed">
                {goal.description}
              </p>

              {/* Targets */}
              <div className="mb-8">
                <h4 className="text-[#fefdf5] font-bold mb-4">Key Targets:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {goal.targets.map((target, targetIndex) => (
                    <div
                      key={targetIndex}
                      className="flex items-center gap-3 text-[#e0eaff]/80"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${goal.gradient} shadow-lg`}
                      ></div>
                      <span className="text-sm font-medium">{target}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ResQLink Contribution */}
              <div
                className={`bg-gradient-to-r ${goal.gradient} bg-opacity-10 backdrop-blur-sm border border-[#e0eaff]/10 rounded-2xl p-6`}
              >
                <h4 className="text-[#fefdf5] font-bold mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  ResQLink's Impact
                </h4>
                <p className="text-white leading-relaxed text-sm ">
                  {goal.resqlinkContribution}
                </p>
              </div>

              {/* Hover effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${goal.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
              ></div>
            </div>
          ))}
        </div>

        {/* Impact Metrics */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-[#fefdf5] mb-8">
            <span className="bg-gradient-to-r from-[#fefdf5] to-[#e0eaff] bg-clip-text text-transparent">
              Measurable Impact
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactMetrics.map((metric, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#e0eaff]/10 to-[#e0eaff]/5 backdrop-blur-sm border border-[#e0eaff]/20 rounded-2xl p-6 hover:border-[#e0eaff]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`bg-gradient-to-r ${metric.gradient} p-3 rounded-xl w-fit mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{metric.icon}</div>
                </div>
                <h4 className="text-xl font-bold text-[#fefdf5] mb-2 group-hover:text-[#e0eaff] transition-colors duration-300">
                  {metric.value}
                </h4>
                <p className="text-[#e0eaff]/70 text-sm">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 backdrop-blur-sm border border-[#e0eaff]/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-[#fefdf5] mb-4">
              Join the Mission for Resilient Communities
            </h3>
            <p className="text-[#e0eaff]/70 mb-6 leading-relaxed">
              Partner with ResQLink to build disaster-resilient communities that
              contribute to global sustainability goals. Together, we can save
              lives and protect vulnerable populations from climate-related
              hazards.
            </p>
            <div className="inline-flex items-center gap-3 text-[#e0eaff]/80">
              <Globe className="h-5 w-5" />
              <span className="font-medium">
                Contributing to a sustainable and resilient future
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
