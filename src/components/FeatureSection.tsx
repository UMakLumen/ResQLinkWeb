import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Smartphone, 
  MapPin, 
  Zap, 
  Shield, 
  Users, 
  AlertCircle,
  Satellite,
  Activity,
  Radio
} from "lucide-react";

const features = [
  {
    title: "Real-Time Incident Reporting",
    description: "Citizens can instantly report emergencies with location, photos, and AI-powered severity assessment.",
    icon: <Smartphone className="h-8 w-8" />,
    userType: "Citizens",
    color: "bg-blue-500",
  },
  {
    title: "AI-Powered Situation Analysis",
    description: "Advanced algorithms analyze multiple data sources to provide actionable intelligence for rescue operations.",
    icon: <Zap className="h-8 w-8" />,
    userType: "All Users",
    color: "bg-yellow-500",
  },
  {
    title: "Geospatial Mapping & Tracking",
    description: "Real-time maps showing incident locations, evacuation routes, and rescue team positions.",
    icon: <MapPin className="h-8 w-8" />,
    userType: "Rescuers",
    color: "bg-green-500",
  },
  {
    title: "Emergency Communications",
    description: "Secure communication channels for coordination between citizens, rescuers, and government units.",
    icon: <Radio className="h-8 w-8" />,
    userType: "Rescuers",
    color: "bg-purple-500",
  },
  {
    title: "Resource Management",
    description: "Track and allocate rescue resources, medical supplies, and evacuation centers efficiently.",
    icon: <Shield className="h-8 w-8" />,
    userType: "LGUs",
    color: "bg-red-500",
  },
  {
    title: "Multi-Agency Coordination",
    description: "Unified command dashboard for coordinating response efforts across multiple government agencies.",
    icon: <Users className="h-8 w-8" />,
    userType: "LGUs",
    color: "bg-indigo-500",
  },
  {
    title: "Early Warning System",
    description: "Automated alerts and notifications based on weather data and predictive analytics.",
    icon: <AlertCircle className="h-8 w-8" />,
    userType: "All Users",
    color: "bg-orange-500",
  },
  {
    title: "Satellite Integration",
    description: "Integration with satellite imagery and IoT sensors for comprehensive situational awareness.",
    icon: <Satellite className="h-8 w-8" />,
    userType: "LGUs",
    color: "bg-teal-500",
  },
  {
    title: "Real-Time Analytics",
    description: "Live dashboards with key metrics, response times, and operational insights.",
    icon: <Activity className="h-8 w-8" />,
    userType: "All Users",
    color: "bg-pink-500",
  }
];

const getUserTypeColor = (userType: string) => {
  switch (userType) {
    case "Citizens": return "bg-blue-100 text-blue-800";
    case "Rescuers": return "bg-green-100 text-green-800";
    case "LGUs": return "bg-purple-100 text-purple-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export function FeatureSection() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-[#161613] via-[#1a1a17] to-[#1f1f1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#fefdf5] mb-6 tracking-tight">
            Comprehensive Disaster Response Platform
          </h2>
          <p className="text-xl text-[#e0eaff]/80 max-w-3xl mx-auto leading-relaxed">
            ResQLink integrates AI, real-time data, and multi-stakeholder coordination to transform 
            disaster response from reactive to proactive, saving more lives when every second counts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group bg-[#161613]/60 backdrop-blur-sm border border-[#e0eaff]/10 hover:border-[#e0eaff]/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-xl overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${feature.color} p-3 rounded-xl text-white shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                    {feature.icon}
                  </div>
                  <Badge variant="secondary" className="bg-[#e0eaff]/20 text-[#e0eaff] border-[#e0eaff]/30">
                    {feature.userType}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-[#fefdf5] group-hover:text-[#e0eaff] transition-colors duration-300">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#e0eaff]/70 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-12 py-3 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl">
            Explore Full Platform
          </Button>
        </div>
      </div>
    </section>
  );
}