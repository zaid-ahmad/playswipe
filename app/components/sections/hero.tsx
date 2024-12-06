import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function Hero() {
    return (
        <section className='pt-24 pb-16 bg-red-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='lg:grid lg:grid-cols-2 lg:gap-8 items-center'>
                    <div className='mb-12 lg:mb-0'>
                        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
                            PLAYSWIPE
                            <span className='block text-red-600 mt-2'>
                                A Fun and Addictive Game
                            </span>
                        </h1>
                        <p className='text-lg text-gray-600 mb-8'>
                            Combining skill & luck for 2-6 players. Perfect for
                            game nights, family gatherings, or casual play!
                        </p>
                        <div className='flex flex-wrap gap-4'>
                            <Button size='lg' variant='destructive'>
                                Buy Now
                            </Button>
                            <Button
                                size='lg'
                                variant='outline'
                                className='flex items-center gap-2'
                            >
                                <Play className='w-4 h-4' />
                                How to Play
                            </Button>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='aspect-video bg-gray-100 rounded-lg shadow-lg'>
                            {/* Video placeholder - in production, replace with actual video component */}
                            <div className='absolute inset-0 flex items-center justify-center'>
                                <span className='text-gray-400'>
                                    Video Preview
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
