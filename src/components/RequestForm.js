'use client';
import { useState } from 'react';
import { AlertTriangle, MapPin, Send } from 'lucide-react';

export default function RequestForm() {
    const [formData, setFormData] = useState({
        patientName: '',
        bloodType: '',
        units: 1,
        hospital: '',
        contactName: '',
        contactPhone: '',
        urgency: 'high',
        message: ''
    });

    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        setTimeout(() => {
            console.log('Blood Request:', formData);
            // Save to localStorage
            const requests = JSON.parse(localStorage.getItem('requests') || '[]');
            requests.push({ ...formData, id: Date.now(), status: 'pending', date: new Date().toISOString() });
            localStorage.setItem('requests', JSON.stringify(requests));

            setStatus('success');
        }, 1500);
    };

    if (status === 'success') {
        return (
            <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center max-w-md mx-auto">
                <div className="flex justify-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full">
                        <Send className="w-10 h-10 text-red-600" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-red-800 mb-2">Request Broadcasted</h3>
                <p className="text-red-700 mb-6">
                    Your request has been sent to all nearby donors matching blood type <strong>{formData.bloodType}</strong>.
                </p>
                <div className="bg-white p-4 rounded-lg shadow-sm text-left mb-6">
                    <p className="text-sm text-gray-500 mb-1">Estimated Response Time</p>
                    <p className="text-lg font-bold text-gray-800">~15 Minutes</p>
                </div>
                <button
                    onClick={() => {
                        setStatus('idle');
                        setFormData({ ...formData, patientName: '', units: 1 });
                    }}
                    className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
                >
                    Make Another Request
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-6 md:p-8 border-t-4 border-red-500">
            <div className="flex items-center mb-6">
                <AlertTriangle className="text-red-600 w-8 h-8 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Request Blood</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Urgency Level</label>
                    <div className="flex space-x-4">
                        {['critical', 'high', 'moderate'].map((level) => (
                            <label key={level} className={`flex-1 cursor-pointer border rounded-lg p-3 text-center transition ${formData.urgency === level
                                ? 'bg-red-50 border-red-500 text-red-700 ring-1 ring-red-500'
                                : 'border-gray-200 hover:bg-gray-50'
                                }`}>
                                <input
                                    type="radio"
                                    name="urgency"
                                    value={level}
                                    checked={formData.urgency === level}
                                    onChange={handleChange}
                                    className="sr-only"
                                />
                                <span className="capitalize font-semibold">{level}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
                    <input
                        type="text"
                        name="patientName"
                        required
                        value={formData.patientName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Blood Type Needed</label>
                    <select
                        name="bloodType"
                        required
                        value={formData.bloodType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                    >
                        <option value="">Select Type</option>
                        {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Units Required</label>
                    <input
                        type="number"
                        name="units"
                        min="1"
                        max="10"
                        required
                        value={formData.units}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Hospital Name</label>
                    <div className="relative">
                        <MapPin className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            name="hospital"
                            required
                            value={formData.hospital}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                            placeholder="City Hospital, Pune"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
                    <input
                        type="text"
                        name="contactName"
                        required
                        value={formData.contactName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Phone</label>
                    <input
                        type="tel"
                        name="contactPhone"
                        required
                        value={formData.contactPhone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                    />
                </div>
            </div>

            <button
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full py-4 px-6 rounded-lg font-bold text-white text-lg transition shadow-lg ${status === 'submitting' ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 hover:shadow-xl'
                    }`}
            >
                {status === 'submitting' ? 'Broadcasting Request...' : 'Request Blood Now'}
            </button>
        </form>
    );
}
