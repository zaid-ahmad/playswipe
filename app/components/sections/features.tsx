import { Download, Gift, Play } from "lucide-react";

const features = [
    {
        icon: Play,
        title: "Easy to Learn",
        description: "Simple rules that anyone can pick up in minutes",
    },
    {
        icon: Gift,
        title: "Perfect Gift",
        description: "Great for friends and family of all ages",
    },
    {
        icon: Download,
        title: "Digital Manual",
        description: "Scan QR code for complete rules and video tutorial",
    },
];

export function Features() {
    return (
        <section className='py-16 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid md:grid-cols-3 gap-8'>
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className='flex flex-col items-center text-center p-6'
                        >
                            <div className='w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4'>
                                <feature.icon className='w-8 h-8 text-red-600' />
                            </div>
                            <h3 className='text-xl font-semibold mb-2'>
                                {feature.title}
                            </h3>
                            <p className='text-gray-600'>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
