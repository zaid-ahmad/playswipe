const steps = [
    {
        title: "Game Setup",
        description:
            "Each player starts with 20 cards arranged in the distinctive SWIPE layout, creating an engaging and strategic playing field.",
        imageUrl: "/images/setup.jpg",
    },
    {
        title: "Basic Rules",
        description:
            'Match "4 fours" (4 of a kind) but higher than 3. Strategic card placement and timing are key to victory!',
        imageUrl: "/images/rules.jpg",
    },
];

export function HowToPlay() {
    return (
        <section className='py-16 bg-gray-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <h2 className='text-3xl font-bold text-center mb-12'>
                    How to Play
                </h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    {steps.map((step) => (
                        <div
                            key={step.title}
                            className='bg-white rounded-lg overflow-hidden shadow-md'
                        >
                            <div className='aspect-video bg-gray-100'>
                                {/* Replace with actual images in production */}
                                <div className='w-full h-full flex items-center justify-center text-gray-400'>
                                    {step.title} Image
                                </div>
                            </div>
                            <div className='p-6'>
                                <h3 className='text-xl font-semibold mb-2'>
                                    {step.title}
                                </h3>
                                <p className='text-gray-600'>
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
