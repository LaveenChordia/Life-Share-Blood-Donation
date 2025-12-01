'use client';
import { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function DonorForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        bloodType: '',
        weight: '',
        lastDonation: '',
        hasDiseases: false,
        agreeToTerms: false
    });

    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            console.log('Donor Registered:', formData);
            // Save to localStorage for demo
            const donors = JSON.parse(localStorage.getItem('donors') || '[]');
            donors.push({ ...formData, id: Date.now(), type: 'donor' });
            localStorage.setItem('donors', JSON.stringify(donors));

            setStatus('success');
        }, 1500);
    };

    if (status === 'success') {
        return (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center max-w-md mx-auto">
                <div className="flex justify-center mb-4">
                    <CheckCircle className="w-16 h-16 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Registration Successful!</h3>
                <p className="text-green-700 mb-6">
                    Thank you for registering as a donor. You are now part of our life-saving community.
                </p>
                <button
                    onClick={() => {
                        setStatus('idle');
                        setFormData({ ...formData, fullName: '', email: '' }); // Reset some fields
                    }}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
                >
                    Register Another
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Donor Registration</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                        placeholder="John Doe"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                        placeholder="john@example.com"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                        placeholder="+91 98765 43210"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Blood Type</label>
                    <select
                        name="bloodType"
                        required
                        value={formData.bloodType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                    >
                        <option value="">Select Type</option>
                        {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
                    <input
                        type="number"
                        name="weight"
                        min="45"
                        required
                        value={formData.weight}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                        placeholder="e.g. 65"
                    />
                    <p className="text-xs text-gray-500 mt-1">Must be at least 50kg to donate.</p>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Donation Date</label>
                    <input
                        type="date"
                        name="lastDonation"
                        value={formData.lastDonation}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                    />
                </div>
            </div>

            <div className="mb-6 bg-red-50 p-4 rounded-lg border border-red-100">
                <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Health Declaration
                </h4>
                <div className="space-y-3">
                    <label className="flex items-start space-x-3">
                        <input
                            type="checkbox"
                            name="hasDiseases"
                            checked={formData.hasDiseases}
                            onChange={handleChange}
                            className="mt-1 w-4 h-4 text-red-600 rounded border-gray-300 focus:ring-red-500"
                        />
                        <span className="text-sm text-gray-700">
                            I do NOT have any chronic communicable diseases (HIV, Hepatitis, etc.) and am not currently on medication that prohibits donation.
                        </span>
                    </label>

                    <label className="flex items-start space-x-3">
                        <input
                            type="checkbox"
                            name="agreeToTerms"
                            required
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                            className="mt-1 w-4 h-4 text-red-600 rounded border-gray-300 focus:ring-red-500"
                        />
                        <span className="text-sm text-gray-700">
                            I agree to the Terms of Service and Privacy Policy. I consent to my contact details being shared with verified recipients in emergencies.
                        </span>
                    </label>
                </div>
            </div>

            <button
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full py-3 px-6 rounded-lg font-bold text-white transition transform hover:scale-[1.02] active:scale-[0.98] ${status === 'submitting' ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl'
                    }`}
            >
                {status === 'submitting' ? 'Registering...' : 'Register as Donor'}
            </button>
        </form>
    );
}
