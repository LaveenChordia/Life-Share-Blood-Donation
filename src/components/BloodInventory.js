import { Droplet } from 'lucide-react';

export default function BloodInventory() {
    // Mock data - in a real app this would come from an API
    const inventory = [
        { type: 'A+', level: 65, status: 'good' },
        { type: 'A-', level: 30, status: 'low' },
        { type: 'B+', level: 80, status: 'good' },
        { type: 'B-', level: 25, status: 'critical' },
        { type: 'AB+', level: 45, status: 'moderate' },
        { type: 'AB-', level: 15, status: 'critical' },
        { type: 'O+', level: 90, status: 'good' },
        { type: 'O-', level: 10, status: 'critical' },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'good': return 'bg-green-500';
            case 'moderate': return 'bg-yellow-500';
            case 'low': return 'bg-orange-500';
            case 'critical': return 'bg-red-600 animate-pulse';
            default: return 'bg-gray-400';
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Droplet className="w-6 h-6 text-red-600 mr-2" />
                Current Blood Stock Levels
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {inventory.map((item) => (
                    <div key={item.type} className="bg-gray-50 rounded-lg p-4 relative overflow-hidden group hover:shadow-md transition">
                        <div className="flex justify-between items-start mb-2 relative z-10">
                            <span className="text-2xl font-black text-gray-800">{item.type}</span>
                            <span className={`w-3 h-3 rounded-full ${getStatusColor(item.status)}`}></span>
                        </div>

                        <div className="relative z-10">
                            <span className="text-sm text-gray-500 capitalize">{item.status}</span>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                                <div
                                    className={`h-1.5 rounded-full ${getStatusColor(item.status)}`}
                                    style={{ width: `${item.level}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Decorative background droplet */}
                        <Droplet className="absolute -bottom-2 -right-2 w-16 h-16 text-red-100 transform rotate-12 group-hover:scale-110 transition" />
                    </div>
                ))}
            </div>

            <div className="mt-6 text-sm text-gray-500 flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                <span>Updates every 30 mins</span>
                <span className="text-blue-600 font-semibold cursor-pointer hover:underline">View Detailed Report</span>
            </div>
        </div>
    );
}
