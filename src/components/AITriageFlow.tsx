import { Brain, FileText, BarChart3, ArrowRight, Clock, MapPin, Camera, Zap } from "lucide-react";
import { Badge } from "./ui/badge";

const triageSteps = [
  {
    step: "01",
    title: "Report Submission",
    description: "Citizens submit emergency reports with location, photos, and description",
    icon: <FileText className="h-8 w-8" />,
    gradient: "from-blue-500 to-cyan-500",
    features: [
      { icon: <MapPin className="h-4 w-4" />, text: "Auto GPS location" },
      { icon: <Camera className="h-4 w-4" />, text: "Photo documentation" },
      { icon: <Clock className="h-4 w-4" />, text: "Timestamp capture" }
    ],
    details: "One-tap reporting captures critical incident data including precise location coordinates, visual evidence, and initial severity indicators for immediate processing."
  },
  {
    step: "02", 
    title: "AI Summarization",
    description: "Machine learning processes and summarizes incident data for quick understanding",
    icon: <Brain className="h-8 w-8" />,
    gradient: "from-purple-500 to-pink-500",
    features: [
      { icon: <Zap className="h-4 w-4" />, text: "Instant analysis" },
      { icon: <FileText className="h-4 w-4" />, text: "Key facts extraction" },
      { icon: <BarChart3 className="h-4 w-4" />, text: "Risk assessment" }
    ],
    details: "Advanced AI algorithms analyze text descriptions, interpret images, and cross-reference historical data to generate comprehensive incident summaries and risk profiles."
  },
  {
    step: "03",
    title: "Smart Reranking", 
    description: "Dynamic priority assignment based on severity, resources, and real-time conditions",
    icon: <BarChart3 className="h-8 w-8" />,
    gradient: "from-green-500 to-emerald-500",
    features: [
      { icon: <BarChart3 className="h-4 w-4" />, text: "Priority scoring" },
      { icon: <MapPin className="h-4 w-4" />, text: "Resource proximity" },
      { icon: <Clock className="h-4 w-4" />, text: "Time-sensitive factors" }
    ],
    details: "Intelligent ranking considers multiple factors including injury severity, resource availability, weather conditions, and rescue team locations to optimize response efficiency."
  }
];

export function AITriageFlow() {
  return (
    <section className="py-32 bg-gradient-to-br from-[#161613] via-[#1a1a17] to-[#0a0a08] relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-[#e0eaff] border-[#e0eaff]/30 backdrop-blur-sm px-6 py-3">
            <Brain className="h-4 w-4 mr-2" />
            AI-Powered Intelligence
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-[#fefdf5] mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-[#fefdf5] to-[#e0eaff] bg-clip-text text-transparent">
              Actionable Intelligence
            </span>
          </h2>
          <p className="text-xl text-[#e0eaff]/70 max-w-3xl mx-auto leading-relaxed">
            Three-step AI process that transforms emergency reports into actionable intelligence for optimal response coordination
          </p>
        </div>

        <div className="space-y-12">
          {triageSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < triageSteps.length - 1 && (
                <div className="absolute left-1/2 top-full w-0.5 h-12 bg-gradient-to-b from-[#e0eaff]/30 to-transparent transform -translate-x-1/2 z-0"></div>
              )}
              
              <div className={`group bg-gradient-to-br from-[#161613]/80 to-[#0a0a08]/60 backdrop-blur-md border border-[#e0eaff]/20 rounded-3xl overflow-hidden hover:border-[#e0eaff]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#e0eaff]/10 ${index % 2 === 0 ? 'lg:ml-0' : 'lg:ml-auto lg:mr-0'} lg:max-w-5xl`}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content Side */}
                  <div className={`p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`bg-gradient-to-r ${step.gradient} text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-xl`}>
                        {step.step}
                      </div>
                      <div className={`bg-gradient-to-r ${step.gradient} p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {step.icon}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-[#fefdf5] mb-4 group-hover:text-[#e0eaff] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-lg text-[#e0eaff]/70 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 text-[#e0eaff]/80">
                          <div className={`text-white bg-gradient-to-r ${step.gradient} p-1 rounded-lg`}>
                            {feature.icon}
                          </div>
                          <span className="font-medium">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                    
                    <p className="text-[#e0eaff]/60 leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                  
                  {/* Visual Side */}
                  <div className={`bg-gradient-to-br ${step.gradient} p-12 flex items-center justify-center relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
                    
                    {/* Main Visual */}
                    <div className="relative z-10 text-white text-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 mb-6 shadow-2xl">
                        <div className="text-6xl mb-4">
                          {step.icon}
                        </div>
                        <div className="text-2xl font-bold mb-2">Step {step.step}</div>
                        <div className="text-white/80">{step.title}</div>
                      </div>
                      
                      {index < triageSteps.length - 1 && (
                        <div className="flex justify-center">
                          <ArrowRight className="h-8 w-8 text-white/60 animate-pulse" />
                        </div>
                      )}
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-[#e0eaff]/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <Brain className="h-12 w-12 text-purple-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-[#fefdf5] mb-4">
              Continuous Learning & Optimization
            </h3>
            <p className="text-[#e0eaff]/70 leading-relaxed">
              Our AI system continuously learns from response outcomes to improve triage accuracy, 
              reduce response times, and optimize resource allocation for future emergencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}