import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Mail, 
  CheckCircle, 
  ArrowRight,
  Users,
  Shield,
  Zap,
  Globe
} from "lucide-react";

const benefits = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Early Access",
    description: "Be among the first to experience ResQLink's innovative features"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Beta Testing",
    description: "Help shape the platform with your feedback and insights"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Priority Support",
    description: "Dedicated onboarding and training for early adopters"
  }
];

export function WaitlistSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-32 bg-gradient-to-br from-[#0a0a08] via-[#161613] to-[#1a1a17] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl opacity-50"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-[#161613]/80 to-[#0a0a08]/60 backdrop-blur-md border border-green-500/30 rounded-3xl p-12 shadow-2xl">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-full w-20 h-20 mx-auto mb-8 shadow-xl">
              <CheckCircle className="h-12 w-12 text-white mx-auto" />
            </div>
            <h2 className="text-4xl font-bold text-[#fefdf5] mb-6">
              Welcome to the ResQLink Community!
            </h2>
            <p className="text-xl text-[#e0eaff]/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Thank you for joining our mission to build resilient disaster response capabilities. 
              We'll keep you updated on our progress and notify you when early access becomes available.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-[#e0eaff]/10 to-[#e0eaff]/5 backdrop-blur-sm border border-[#e0eaff]/20 rounded-2xl p-6">
                  <div className="text-green-400 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-[#fefdf5] font-bold mb-2">{benefit.title}</h3>
                  <p className="text-[#e0eaff]/70 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-32 bg-gradient-to-br from-[#0a0a08] via-[#161613] to-[#1a1a17] relative">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-[#e0eaff] border-[#e0eaff]/30 backdrop-blur-sm px-6 py-3">
            <Mail className="h-4 w-4 mr-2" />
            Join the Waitlist
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-[#fefdf5] mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-[#fefdf5] to-[#e0eaff] bg-clip-text text-transparent">
              Be First to Experience ResQLink
            </span>
          </h2>
          <p className="text-xl text-[#e0eaff]/70 max-w-3xl mx-auto leading-relaxed">
            Join thousands of community leaders, first responders, and citizens waiting to access the future of disaster response
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero CTA */}
          <div className="text-center lg:text-left">
            <div className="relative group">
              {/* Animated background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Main button */}
              <Button 
                onClick={handleSubmit}
                disabled={isLoading}
                className="relative w-full bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 hover:from-red-600 hover:via-blue-600 hover:to-purple-600 text-white border-0 shadow-2xl hover:shadow-red-500/25 transition-all duration-500 px-12 py-8 text-2xl rounded-3xl group-hover:scale-105 transform font-bold tracking-wide overflow-hidden"
              >
                {/* Animated shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                {/* Button content */}
                <div className="relative z-10 flex items-center justify-center gap-4">
                  {isLoading ? (
                    <>
                      <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Joining Waitlist...</span>
                    </>
                  ) : (
                    <>
                      <Mail className="h-8 w-8 group-hover:rotate-12 transition-transform duration-300" />
                      <span>Join the Waitlist</span>
                      <ArrowRight className="h-8 w-8 group-hover:translate-x-2 transition-transform duration-300" />
                    </>
                  )}
                </div>
              </Button>
            </div>
            
            {/* Supporting text */}
            <p className="text-[#e0eaff]/80 mt-8 text-lg leading-relaxed">
              Get early access to ResQLink and help shape the future of disaster response technology. 
              No forms, no hassle – just one click to join our community of innovators.
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 text-[#e0eaff]/60">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-400" />
                <span>Instant Access</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-purple-400" />
                <span>Global Impact</span>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-[#fefdf5] mb-6">
                <span className="bg-gradient-to-r from-[#fefdf5] to-[#e0eaff] bg-clip-text text-transparent">
                  Early Access Benefits
                </span>
              </h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-gradient-to-br from-[#e0eaff]/10 to-[#e0eaff]/5 backdrop-blur-sm border border-[#e0eaff]/20 rounded-2xl hover:border-[#e0eaff]/40 transition-all duration-300">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl shadow-lg flex-shrink-0">
                      <div className="text-white">
                        {benefit.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#fefdf5] mb-2">{benefit.title}</h4>
                      <p className="text-[#e0eaff]/70 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-br from-[#161613]/60 to-[#0a0a08]/40 backdrop-blur-sm border border-[#e0eaff]/20 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-[#fefdf5] mb-4 text-center">Join the Community</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400 mb-1">1,247</div>
                  <div className="text-[#e0eaff]/70 text-sm">Citizens</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">342</div>
                  <div className="text-[#e0eaff]/70 text-sm">Rescuers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400 mb-1">89</div>
                  <div className="text-[#e0eaff]/70 text-sm">LGUs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}