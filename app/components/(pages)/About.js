"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="container mx-auto my-20 px-4 pt-16" id="about">
      <div className="flex flex-col gap-10 items-center  p-8 rounded-xl shadow-xl">
        <h2 className="text-6xl font-bold text-center bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text">
          &lt;About Me/&gt;
        </h2>
        <div className="">
          <Image
            src="/vdr.png"
            alt="Developer Profile"
            width={600}
            height={800}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <p className="text-white">
            Hello! I'm Durgesh, a passionate software developer and educator
            with a strong foundation in web and app development. I created
            CodeWithVdr to share my knowledge and help others learn programming
            in a simple, engaging way.
          </p>
          <p className="text-white">
            With expertise in various programming languages and frameworks, I
            strive to create content that bridges the gap between theory and
            practical application. My mission is to make coding accessible to
            everyone, regardless of their background or experience level.
          </p>

          {/* Education Section */}
          <div className="pt-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text mb-4 flex items-center">
              <span className="material-symbols-outlined mr-2">school</span>
              Education
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <span className="material-symbols-outlined mr-2">school</span>
                  <h4 className="font-bold text-yellow-700">
                    B.Tech in Computer Science
                  </h4>
                </div>
                <p>NIST University</p>
                <p className="text-gray-600">Berhampur, Odisha, India</p>
                <p className="text-gray-600">2023 - 2027</p>
                <p className="mt-2">
                  Graduated with honors, specializing in Computer Science
                  Engineering. Participated in various coding competitions and
                  hackathons.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <span className="material-symbols-outlined mr-2">
                    menu_book
                  </span>
                  <h4 className="font-bold text-yellow-700">Intermediate</h4>
                </div>
                <p>Guru Nanak Public School</p>
                <p className="text-gray-600">Sec 21, Rourkela, Odisha, India</p>
                <p className="text-gray-600">2021 - 2023</p>
                <p className="mt-2">
                  Completed higher secondary education with focus on science and
                  mathematics.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <span className="material-symbols-outlined mr-2">
                    history_edu
                  </span>
                  <h4 className="font-bold text-yellow-700">Matriculation</h4>
                </div>
                <p>Guru Nanak Public School</p>
                <p className="text-gray-600">Sec 21, Rourkela, Odisha, India</p>
                <p className="text-gray-600">2021</p>
                <p className="mt-2">
                  Completed secondary education with excellent academic
                  performance.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="pt-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text mb-4 flex items-center">
              <span className="material-symbols-outlined mr-2">work</span>
              Experience
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <span className="material-symbols-outlined mr-2">work</span>
                  <h4 className="font-bold text-yellow-700">
                    Backend Developer
                  </h4>
                </div>
                <p>
                  KanProKagno Innovation Private Limited | Aug 2024 - Present
                </p>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Developed a fully functional PWA Ecommerce app
                    (propthecrop.com)
                  </li>
                  <li>
                    Implemented solutions using ReactJs, NodeJs, AWS, MongoDB,
                    ExpressJs
                  </li>
                  <li>
                    Built a mobile application using React Native technology
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <span className="material-symbols-outlined mr-2">
                    laptop_mac
                  </span>
                  <h4 className="font-bold text-yellow-700">Web Developer</h4>
                </div>
                <p>Protionix Technology | May 2024 - July 2024</p>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Developed a website for their product using ReactJS and
                    NodeJs with hosting (cap10.fun)
                  </li>
                  <li>
                    Helped the company increase their sales and expand globally
                  </li>
                  <li>Contributed to increasing sales from 50% to 80%</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="pt-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text mb-4 flex items-center">
              <span className="material-symbols-outlined mr-2">code</span>
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <span className="material-symbols-outlined mr-2">code</span>
                  <h4 className="font-bold text-yellow-700">
                    Programming Languages
                  </h4>
                </div>
                <p>Python, JavaScript, Java, TypeScript, HTML/CSS</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <span className="material-symbols-outlined mr-2">web</span>
                  <h4 className="font-bold text-yellow-700">Frontend</h4>
                </div>
                <p>React, Next.js, Tailwind CSS, Material UI, Redux</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <span className="material-symbols-outlined mr-2">dns</span>
                  <h4 className="font-bold text-yellow-700">Backend</h4>
                </div>
                <p>Node.js, Express, Django, Flask, Spring Boot</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <span className="material-symbols-outlined mr-2">
                    database
                  </span>
                  <h4 className="font-bold text-yellow-700">Database</h4>
                </div>
                <p>MongoDB, MySQL, PostgreSQL, Firebase, Redis</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <span className="material-symbols-outlined mr-2">cloud</span>
                  <h4 className="font-bold text-yellow-700">Cloud & DevOps</h4>
                </div>
                <p>AWS, Docker, Kubernetes, GitHub Actions, Jenkins</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <span className="material-symbols-outlined mr-2">
                    data_object
                  </span>
                  <h4 className="font-bold text-yellow-700">Tools & Others</h4>
                </div>
                <p>Git, VS Code, Figma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
