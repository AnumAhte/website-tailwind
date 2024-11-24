'use client';

import Image from 'next/image';

// Service interface
interface Service {
  name: string;
  icon: string;
}

// Sample service data
const servicesData: Service[] = [
  { name: "Women's Health", icon: '/icons/women.webp' },
  { name: "Blood Glucose Monitoring", icon: '/icons/blood.webp' },
  { name: "Physical Exam", icon: '/icons/physical.webp' },
  { name: "X-Rays", icon: '/icons/xray.png' },
  { name: "Spirometry", icon: '/icons/spiro.webp' },
  { name: "Diabetes", icon: '/icons/diabetes.webp' },
  { name: "High Cholesterol", icon: '/icons/cholestrol.webp' },
  { name: "Covid PCR Test", icon: '/icons/covid.webp' },
  { name: "Weight Loss", icon: '/icons/weight.webp' },
  { name: "Stress Test", icon: '/icons/stress.webp' },
];

// ServiceItem Component
const ServiceItem = ({ service }: { service: Service }) => (
  <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
    <Image
      src={service.icon}
      alt={service.name}
      width={64}
      height={64}
      className="mb-4 transition-transform transform hover:scale-110 duration-200"
    />
    <p className="text-gray-800 font-medium">{service.name}</p>
  </div>
);

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-sky-100 text-gray-900">
      {/* Services Section */}
      <section id="services" className="py-12 px-6 bg-sky-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">Our Services</h2>
          <p className="text-lg text-gray-700 text-center mb-6">
            Explore the wide range of healthcare services offered by our clinic.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {servicesData.map((service, index) => (
              <ServiceItem key={index} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
