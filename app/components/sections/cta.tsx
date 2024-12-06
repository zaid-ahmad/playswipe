import { Button } from "@/components/ui/button";

export function CTA() {
    return (
        <section className='py-16 bg-red-600'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                <h2 className='text-3xl font-bold text-white mb-8'>
                    Get Your Copy Today
                </h2>
                <div className='flex flex-wrap justify-center gap-4'>
                    <Button
                        size='lg'
                        variant='secondary'
                        className='min-w-[200px]'
                    >
                        Buy on Amazon.com - $19.95 USD
                    </Button>
                    <Button
                        size='lg'
                        variant='secondary'
                        className='min-w-[200px]'
                    >
                        Buy on Amazon.ca - $29.95 CAD
                    </Button>
                </div>
            </div>
        </section>
    );
}
