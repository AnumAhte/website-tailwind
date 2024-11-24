'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Doctor interface
interface Doctor {
  name: string;
  specialty: string;
  experience: string;
  image: string;
  description: string;
}

// Sample doctor data
const doctorsData: Doctor[] = [
  {
    name: "Charlotte Smith",
    specialty: "General Physician",
    experience: "19 years experience",
    image: "/char.png", // Ensure this file exists in your /public folder
    description: "Dr. Charlotte Smith has extensive experience in all aspects of adult cardiology, in particular the prevention and treatment of heart attack.",
  },
  {
    name: "Adam Smith",
    specialty: "Cardiologist",
    experience: "18 years experience",
    image: "/adam.png", // Ensure this file exists in your /public folder
    description: "Dr. Adam Smith has extensive experience in all aspects of adult cardiology, in particular the prevention and treatment of heart attack.",
  },
  {
    name: "Anna Smith",
    specialty: "ENT Specialist",
    experience: "15 years experience",
    image: "/anna.png", // Ensure this file exists in your /public folder
    description: "Dr. Anna Smith has extensive experience in all aspects of adult cardiology, in particular the prevention and treatment of heart attack.",
  },
];

// DoctorItem Component
const DoctorItem = ({ doctor }: { doctor: Doctor }) => (
  <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <Image
      src={doctor.image}
      alt={doctor.name}
      width={150}
      height={150}
      className="rounded-full mb-4 transition-transform transform hover:scale-105 duration-300"
    />
    <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
    <p className="text-teal-600">{doctor.specialty}</p>
    <p className="text-gray-500 text-sm">{doctor.experience}</p>
    <p className="text-gray-700 mt-2">{doctor.description}</p>
  </div>
);

export default function DoctorsPage() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-sky-100 text-gray-900">
      {/* Doctors Section */}
      <section id="doctors" className="py-12 px-6 bg-sky-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-2">Our Doctors</h2>
          <p className="text-lg text-gray-700 mb-8">
            Effective and best healthcare services provided by our expert doctors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctorsData.map((doctor, index) => (
              <DoctorItem key={index} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* Scroll-to-Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-teal-500 text-white p-3 rounded-full shadow-lg hover:bg-teal-600 transition"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}
