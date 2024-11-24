// app/page.tsx
import Image from 'next/image';
import doctorImage from '../public/dr.jpg';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-between container mx-auto py-24">
        <div className="text-left md:w-1/2">
          <p className="text-lg text-teal-600 mb-4">Welcome to Wellness Clinic</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            The Clinic that cares for life and humanity. Discover more about our healthcare services.
          </h1>
          <a href="#about" className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600">
            Discover more
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Image
            src={doctorImage}
            alt="Doctor in the Wellness Clinic"
            width={300}
            height={300}
            className="h-64 w-64 object-cover rounded-full border-4 border-teal-500"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Wellness Clinic is a comprehensive medical clinic located in Forest Park, Georgia. Led by Kris Uboat, MD, a
            board-certified family medicine practitioner with over 15 years of experience, the practice proudly serves
            patients in the greater Atlanta metro area.
          </p>
        </div>
      </section>
    </>
  );
}
