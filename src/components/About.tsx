import React, { useEffect, useRef } from "react";
import { Award, Users, Zap } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "200+" },
  { label: "Team Members", value: "1" },
  { label: "Success Rate", value: "98%" },
];

export default function About() {
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observers = [];

    const createObserver = (ref) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("opacity-100", "translate-y-0");
              entry.target.classList.remove("opacity-0", "translate-y-8");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
        observers.push(observer);
      }
    };

    createObserver(textRef);
    createObserver(featuresRef);
    createObserver(statsRef);

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <section id="about" className="bg-[#0A0A0A] py-24 relative overflow-hidden">
      <style>{`
        /* Keyframes for moving nodes */
        @keyframes move-node {
          0% { transform: translate(0px, 0px); }
          50% { transform: translate(20px, -30px); }
          100% { transform: translate(0px, 0px); }
        }
        @keyframes move-node-alt {
          0% { transform: translate(0px, 0px); }
          50% { transform: translate(-20px, 30px); }
          100% { transform: translate(0px, 0px); }
        }
        .node {
          position: absolute;
          width: 8px;
          height: 8px;
          background-color: rgba(0, 240, 255, 0.8);
          border-radius: 50%;
          animation: move-node 6s ease-in-out infinite;
        }
        .node-alt {
          animation: move-node-alt 8s ease-in-out infinite;
        }
      `}</style>

      {/* Background Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="node"
          style={{ top: "10%", left: "20%" }}
        ></div>
        <div
          className="node node-alt"
          style={{ top: "30%", left: "40%" }}
        ></div>
        <div
          className="node"
          style={{ top: "50%", left: "60%" }}
        ></div>
        <div
          className="node node-alt"
          style={{ top: "70%", left: "30%" }}
        ></div>
        <div
          className="node"
          style={{ top: "90%", left: "50%" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <div
            ref={textRef}
            className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Pioneering the Future of
              <span className="block text-[#00F0FF]">Artificial Intelligence</span>
            </h2>
            <p className="text-gray-400 mb-8">
              We're a team of AI experts, data scientists, and engineers
              passionate about pushing the boundaries of what's possible with
              artificial intelligence.
            </p>
            <div
              ref={featuresRef}
              className="space-y-4 opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-300"
            >
              {[
                {
                  icon: Zap,
                  text: "Cutting-edge AI solutions tailored to your needs",
                },
                {
                  icon: Users,
                  text: "Expert team with decades of combined experience",
                },
                { icon: Award, text: "Award-winning AI implementations" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 transform transition-all duration-300 hover:translate-x-2"
                >
                  <div
                    className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center
                    transform transition-all duration-300 hover:scale-110 hover:bg-[#00F0FF]/20"
                  >
                    <item.icon className="w-4 h-4 text-[#00F0FF]" />
                  </div>
                  <span className="text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 gap-8 opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-500"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm
                  transform transition-all duration-500 hover:scale-105 hover:bg-white/10
                  hover:border-[#00F0FF]/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]
                  ${index === stats.length - 1 ? "col-span-2" : ""}`}
              >
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
