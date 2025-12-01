import HeroSection from '@/components/HeroSection';
import BloodInventory from '@/components/BloodInventory';
import Link from 'next/link';
import { Users, ShieldCheck, Clock, Activity } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <HeroSection />

      {/* Live Inventory Section */}
      <section className="container mx-auto px-4 -mt-16 relative z-20">
        <BloodInventory />
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">How LifeShare Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've simplified the process of connecting donors with recipients. Technology meets humanity to save lives efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
            <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-red-600">
              <Users size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Register as Donor</h3>
            <p className="text-gray-600 leading-relaxed">
              Sign up in minutes. We'll notify you when there's a matching request nearby. Your privacy is our priority.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
            <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-red-600">
              <Activity size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Request Blood</h3>
            <p className="text-gray-600 leading-relaxed">
              In emergencies, broadcast a request to verified donors in your vicinity. Get real-time responses.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
            <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-red-600">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Get Matched</h3>
            <p className="text-gray-600 leading-relaxed">
              Our smart algorithm connects the right donor to the right patient based on blood type, location, and availability.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to become a hero?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
            Join thousands of others who have pledged to save lives. It only takes 15 minutes to donate, but the impact lasts a lifetime.
          </p>
          <Link
            href="/donate"
            className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition shadow-lg hover:shadow-red-900/50 inline-flex items-center"
          >
            Start Donating
          </Link>
        </div>
      </section>
    </div>
  );
}
