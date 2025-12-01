'use client';
import { useState, useEffect } from 'react';
import { User, Calendar, Clock, MapPin, Droplet } from 'lucide-react';

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('overview');
    const [stats, setStats] = useState({
        donations: 3,
        livesSaved: 9,
        nextEligibleDate: '2025-06-15'
    });

    // Mock data
    const history = [
        { id: 1, date: '2025-03-10', location: 'City Hospital', units: 1, type: 'Whole Blood' },
        { id: 2, date: '2024-11-05', location: 'Red Cross Camp', units: 1, type: 'Whole Blood' },
        { id: 3, date: '2024-06-20', location: 'City Hospital', units: 1, type: 'Whole Blood' },
    ];

    const requests = [
        { id: 101, patient: 'Rahul S.', hospital: 'Ruby Hall Clinic', urgency: 'high', bloodType: 'O+', distance: '2.5 km' },
        { id: 102, patient: 'Anjali M.', hospital: 'Jehangir Hospital', urgency: 'moderate', bloodType: 'O+', distance: '4.1 km' },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-8">

                {/* Sidebar */}
                <div className="w-full md:w-64 flex-shrink-0">
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <div className="text-center mb-6">
                            <div className="w-20 h-20 bg-red-100 rounded-full mx-auto flex items-center justify-center text-red-600 mb-3">
                                <User size={40} />
                            </div>
                            <h2 className="font-bold text-gray-800">Laveen Chordia</h2>
                            <p className="text-sm text-gray-500">O+ Donor</p>
                        </div>

                        <nav className="space-y-2">
                            <button
                                onClick={() => setActiveTab('overview')}
                                className={`w-full text-left px-4 py-2 rounded-lg transition ${activeTab === 'overview' ? 'bg-red-50 text-red-700 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
                            >
                                Overview
                            </button>
                            <button
                                onClick={() => setActiveTab('history')}
                                className={`w-full text-left px-4 py-2 rounded-lg transition ${activeTab === 'history' ? 'bg-red-50 text-red-700 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
                            >
                                Donation History
                            </button>
                            <button
                                onClick={() => setActiveTab('requests')}
                                className={`w-full text-left px-4 py-2 rounded-lg transition ${activeTab === 'requests' ? 'bg-red-50 text-red-700 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
                            >
                                Active Requests
                            </button>
                        </nav>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-grow">
                    {activeTab === 'overview' && (
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <div className="text-gray-500 text-sm mb-1">Total Donations</div>
                                    <div className="text-3xl font-bold text-gray-800">{stats.donations}</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <div className="text-gray-500 text-sm mb-1">Lives Impacted</div>
                                    <div className="text-3xl font-bold text-red-600">{stats.livesSaved}</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <div className="text-gray-500 text-sm mb-1">Next Eligible</div>
                                    <div className="text-xl font-bold text-green-600">{stats.nextEligibleDate}</div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-2">You are a Hero!</h3>
                                <p className="opacity-90 mb-6">
                                    Your last donation on March 10, 2025 helped save 3 lives at City Hospital.
                                </p>
                                <button className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-red-50 transition">
                                    View Certificate
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'history' && (
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 text-gray-600 text-sm">
                                    <tr>
                                        <th className="p-4">Date</th>
                                        <th className="p-4">Location</th>
                                        <th className="p-4">Type</th>
                                        <th className="p-4">Units</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {history.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-50">
                                            <td className="p-4 flex items-center">
                                                <Calendar size={16} className="text-gray-400 mr-2" />
                                                {item.date}
                                            </td>
                                            <td className="p-4">{item.location}</td>
                                            <td className="p-4">{item.type}</td>
                                            <td className="p-4">{item.units}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === 'requests' && (
                        <div className="space-y-4">
                            <h3 className="font-bold text-gray-800 mb-4">Urgent Requests Nearby</h3>
                            {requests.map((req) => (
                                <div key={req.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-red-100 p-3 rounded-full text-red-600">
                                            <Droplet size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800">{req.bloodType} Blood Needed</h4>
                                            <p className="text-sm text-gray-600">For {req.patient} at {req.hospital}</p>
                                            <div className="flex items-center mt-2 text-xs text-gray-500 space-x-3">
                                                <span className="flex items-center"><MapPin size={12} className="mr-1" /> {req.distance}</span>
                                                <span className="flex items-center"><Clock size={12} className="mr-1" /> Posted 1hr ago</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-full md:w-auto bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition">
                                        Respond
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
