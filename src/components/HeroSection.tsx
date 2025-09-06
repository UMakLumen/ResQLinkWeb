import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Zap, Shield, Globe } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-[#161613] via-[#1a1a17] to-[#0a0a08] overflow-hidden"
    >
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-screen mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Badge */}
          <Badge className="mb-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-[#e0eaff] border-[#e0eaff]/30 backdrop-blur-sm px-4 py-2">
            <Zap className="h-4 w-4 mr-2" />
            Powered by AI & Real-time Data
          </Badge>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-[#fefdf5] mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-[#fefdf5] via-[#e0eaff] to-[#fefdf5] bg-clip-text text-transparent">
              Actionable Intelligence
            </span>
            <br />
            <span className="text-[#e0eaff]/80">when lives depend on it</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[#e0eaff]/70 max-w-4xl mx-auto mb-12 leading-relaxed">
            ResQLink transforms disaster response with AI-powered coordination,
            real-time intelligence, and seamless multi-agency collaboration.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("waitlist")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-2xl hover:shadow-red-500/25 transition-all duration-300 px-8 py-4 text-lg rounded-2xl"
            >
              Join Waitlist
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-white border-[#e0eaff]/30 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg rounded-2xl backdrop-blur-sm"
            >
              See How It Works
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#e0eaff]/10 to-[#e0eaff]/5 backdrop-blur-sm border border-[#e0eaff]/20 rounded-2xl p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl">
                  <Globe className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-[#fefdf5] mb-2">24/7</div>
              <div className="text-[#e0eaff]/70">Real-time Monitoring</div>
            </div>

            <div className="bg-gradient-to-br from-[#e0eaff]/10 to-[#e0eaff]/5 backdrop-blur-sm border border-[#e0eaff]/20 rounded-2xl p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-xl">
                  <Shield className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-[#fefdf5] mb-2">
                {"<2min"}
              </div>
              <div className="text-[#e0eaff]/70">Response Time</div>
            </div>

            <div className="bg-gradient-to-br from-[#e0eaff]/10 to-[#e0eaff]/5 backdrop-blur-sm border border-[#e0eaff]/20 rounded-2xl p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-xl">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-[#fefdf5] mb-2">
                AI-Powered
              </div>
              <div className="text-[#e0eaff]/70">Smart Analytics</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
