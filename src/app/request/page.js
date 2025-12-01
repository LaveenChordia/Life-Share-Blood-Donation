import RequestForm from '@/components/RequestForm';

export const metadata = {
    title: "Request Blood - LifeShare",
    description: "Emergency blood request form.",
};

export default function RequestPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Request Blood</h1>
                    <p className="text-xl text-gray-600">
                        Broadcast an emergency request to nearby donors immediately.
                    </p>
                </div>

                <RequestForm />

                <div className="mt-12 text-center text-gray-500 text-sm">
                    <p>
                        LifeShare facilitates the connection between donors and recipients.
                        We do not store or sell blood. In case of extreme emergency, please call 102/108.
                    </p>
                </div>
            </div>
        </div>
    );
}
