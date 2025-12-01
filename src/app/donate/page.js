import DonorForm from '@/components/DonorForm';

export const metadata = {
    title: "Donate Blood - LifeShare",
    description: "Register to become a blood donor.",
};

export default function DonatePage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Become a Donor</h1>
                    <p className="text-xl text-gray-600">
                        Join our community of heroes. Your registration helps us save lives in emergencies.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <DonorForm />
                    </div>

                    <div className="space-y-6">
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-blue-800 mb-2">Eligibility Checklist</h3>
                            <ul className="space-y-2 text-sm text-blue-700 list-disc list-inside">
                                <li>Age between 18 - 65 years</li>
                                <li>Weight at least 50 kg</li>
                                <li>No major surgery in last 6 months</li>
                                <li>No tattoo/piercing in last 6 months</li>
                                <li>Hemoglobin level &gt; 12.5 g/dL</li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                            <h3 className="font-bold text-yellow-800 mb-2">Did You Know?</h3>
                            <p className="text-sm text-yellow-700">
                                One pint of blood can save up to three lives. Your body replenishes the lost fluid within 24 hours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
