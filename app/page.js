import Image from "next/image";
import Navbar from "./components/Navbar";
import About from "./components/(pages)/About";
import Services from "./components/(pages)/Services";
import Contact from "./components/(pages)/Contact";

const IMG_URL =
  "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <Image src={IMG_URL} alt="Background" fill className="object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <Navbar />

          {/* Main Content */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold text-center bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text z-50">
              &lt;Durgesh/&gt;
            </h1>
            <p className="mt-4 text-xl text-white text-center max-w-2xl">
              Welcome to my personal website! Explore my projects, blog posts,
              and more. Let's connect and create something amazing together!
            </p>

            <button className="px-6 cursor-pointer py-2 bg-white text-gray-800 rounded-full mt-6 hover:bg-yellow-200 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <About />

      <Services />

      <Contact />
    </>
  );
}
