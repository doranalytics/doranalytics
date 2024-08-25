'use client';

import React from 'react';
import Link from 'next/link';
import { FaChartLine, FaChartBar, FaGlobe, FaRocket, FaFileAlt, FaChartPie, FaLaptopCode, FaBrain, FaRobot, FaReact, FaBolt, FaVideo } from 'react-icons/fa';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon }) => (
  <div className="mb-6 p-6 bg-slate-800 bg-opacity-50 rounded-lg shadow-lg transition-all duration-300 hover:bg-opacity-70 hover:shadow-xl">
    <div className="flex items-center mb-4">
      <div className="text-3xl mr-4 text-blue-400">{icon}</div>
      <h3 className="text-2xl font-semibold">{title}</h3>
    </div>
    <p className="text-slate-300">{description}</p>
  </div>
);

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function Consulting() {
  const services: Service[] = [
    { title: "Analytics & SQL", description: "Expert in data analysis and SQL queries to derive meaningful insights from your data.", icon: <FaChartLine /> },
    { title: "Data Visualization", description: "Creating impactful visual representations of data to communicate complex information effectively.", icon: <FaChartBar /> },
    { title: "Global Corporate Strategy", description: "Developing comprehensive strategies for corporations operating on a global scale.", icon: <FaGlobe /> },
    { title: "Startup Strategy", description: "Tailored strategic planning for startups to navigate early-stage challenges and growth.", icon: <FaRocket /> },
    { title: "Financial Pro Formas", description: "Crafting detailed financial projections and pro forma statements for businesses.", icon: <FaFileAlt /> },
    { title: "Forecasting", description: "Utilizing advanced techniques to predict future trends and outcomes for informed decision-making.", icon: <FaChartPie /> },
    { title: "Web Development", description: "Building modern, responsive websites using the latest web technologies.", icon: <FaLaptopCode /> },
    { title: "Prompt Engineering", description: "Optimizing AI interactions through effective prompt design and implementation.", icon: <FaBrain /> },
    { title: "AI Integration", description: "Implementing AI solutions across various business processes to enhance efficiency and innovation.", icon: <FaRobot /> },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-6 py-16">
        <header className="mb-8 text-center">
        <div className="fixed top-0 left-0 p-4">
  <Link href="/" className="text-lg italic tracking-wide font-semibold mb-4 inline-block">
    doran<sup className="text-xs">alytics</sup>
  </Link>
</div>

          <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Your Chief Solutions Officer</h1>
          <p className="text-2xl text-slate-300">Empowering businesses with data-driven insights and innovative strategies</p>
        </header>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Specializations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-2 text-center">I built this entire site in 2 hours..</h2>
          <p className="text-sm text-center mb-8 text-slate-300">
(Imagine what we can do for you)          </p>
          <div className="bg-slate-800 bg-opacity-50 p-8 rounded-lg shadow-lg">
            <p className="mb-6 text-slate-300">
              If anyone wants to learn to code with AI, I can show you how to use:
            </p>
            <ul className="list-none mb-6 grid grid-cols-2 gap-4">
              <li className="flex items-center"><FaReact className="text-blue-400 mr-2" /> React for frontend development</li>
              <li className="flex items-center"><FaBolt className="text-yellow-400 mr-2" /> Vercel for seamless deployment</li>
              <li className="flex items-center"><FaVideo className="text-green-400 mr-2" /> RunwayML for video generation</li>
              <li className="flex items-center"><FaRobot className="text-purple-400 mr-2" /> Claude AI for code assistance</li>
            </ul>
       
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold mb-8">Hire Us For Anything</h2>
          <p className="text-2xl mb-8 text-slate-300">
            Ready to transform your business with cutting-edge analytics and strategy?
          </p>
          <Link 
            href="mailto:doranalytics247@gmail.com" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Get in touch today!
          </Link>
        </section>
      </div>
    </main>
  );
}