import { CTA } from "./components/sections/cta";
import { Features } from "./components/sections/features";
import { Hero } from "./components/sections/hero";
import { HowToPlay } from "./components/sections/how-to-play";

export default function Home() {
    return (
        <main>
            <Hero />
            <Features />
            <HowToPlay />
            <CTA />
        </main>
    );
}
