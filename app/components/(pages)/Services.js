"use client";
import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div className="container mx-auto my-20 px-4 pt-16" id="services">
      <div className="flex flex-col gap-10 items-center p-8 rounded-xl shadow-xl">
        <h2 className="text-6xl font-bold text-center bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text">
          &lt;Services/&gt;
        </h2>

        <p className="text-white text-center max-w-3xl">
          I offer comprehensive solutions tailored to your business needs,
          leveraging cutting-edge technologies to create scalable, efficient,
          and user-friendly applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Web Development */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-yellow-500/30 hover:border-yellow-500 transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="material-symbols-outlined text-yellow-500 text-4xl mr-3">
                web
              </span>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text">
                Web Development
              </h3>
            </div>
            <p className="text-white mb-4">
              Custom web solutions built with modern frameworks and responsive
              design principles to ensure your website looks great on all
              devices.
            </p>
            <div className="bg-gray-700/50 p-3 rounded-md">
              <h4 className="text-yellow-400 font-semibold mb-2">
                Technologies:
              </h4>
              <p className="text-white">
                React, Next.js, Node.js, Express, MongoDB, PostgreSQL, Tailwind
                CSS
              </p>
            </div>
          </div>

          {/* DevOps */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-yellow-500/30 hover:border-yellow-500 transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="material-symbols-outlined text-yellow-500 text-4xl mr-3">
                settings_suggest
              </span>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text">
                DevOps Services
              </h3>
            </div>
            <p className="text-white mb-4">
              Streamline your development workflow with CI/CD pipelines,
              infrastructure as code, and automated testing to improve
              productivity and code quality.
            </p>
            <div className="bg-gray-700/50 p-3 rounded-md">
              <h4 className="text-yellow-400 font-semibold mb-2">
                Technologies:
              </h4>
              <p className="text-white">
                Docker, Kubernetes, GitHub Actions, Jenkins, Terraform, GitLab
                CI/CD
              </p>
            </div>
          </div>

          {/* Cloud Services */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-yellow-500/30 hover:border-yellow-500 transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="material-symbols-outlined text-yellow-500 text-4xl mr-3">
                cloud
              </span>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text">
                Cloud Solutions
              </h3>
            </div>
            <p className="text-white mb-4">
              Leverage the power of cloud computing for scalable, reliable, and
              cost-effective solutions that grow with your business needs.
            </p>
            <div className="bg-gray-700/50 p-3 rounded-md">
              <h4 className="text-yellow-400 font-semibold mb-2">
                Technologies:
              </h4>
              <p className="text-white">
                AWS (EC2, S3, Lambda), Google Cloud Platform, Azure, Serverless
                Architecture
              </p>
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-yellow-500/30 hover:border-yellow-500 transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="material-symbols-outlined text-yellow-500 text-4xl mr-3">
                smartphone
              </span>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text">
                Mobile App Development
              </h3>
            </div>
            <p className="text-white mb-4">
              Create engaging, high-performance mobile applications for iOS and
              Android platforms that provide an exceptional user experience.
            </p>
            <div className="bg-gray-700/50 p-3 rounded-md">
              <h4 className="text-yellow-400 font-semibold mb-2">
                Technologies:
              </h4>
              <p className="text-white">
                React Native, Flutter, Swift, Kotlin, Firebase, App Store
                Optimization
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-gray-800 p-6 rounded-lg shadow-lg border border-yellow-500/30 w-full">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text mb-4">
            My Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="material-symbols-outlined text-yellow-500 text-2xl">
                  lightbulb
                </span>
              </div>
              <h4 className="text-white font-bold mb-2">Discovery</h4>
              <p className="text-gray-300 text-sm">
                Understanding your requirements and business goals
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="material-symbols-outlined text-yellow-500 text-2xl">
                  edit_document
                </span>
              </div>
              <h4 className="text-white font-bold mb-2">Planning</h4>
              <p className="text-gray-300 text-sm">
                Creating a detailed roadmap and technical specification
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="material-symbols-outlined text-yellow-500 text-2xl">
                  code
                </span>
              </div>
              <h4 className="text-white font-bold mb-2">Development</h4>
              <p className="text-gray-300 text-sm">
                Building your solution with regular updates and feedback
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="material-symbols-outlined text-yellow-500 text-2xl">
                  rocket_launch
                </span>
              </div>
              <h4 className="text-white font-bold mb-2">Delivery</h4>
              <p className="text-gray-300 text-sm">
                Launching your project with ongoing support and maintenance
              </p>
            </div>
          </div>
        </div>

        <div className="w-full text-center mt-10">
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 py-3 px-8 rounded-lg text-black font-bold hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
