import HeroSection from "../components/sections/HeroSection";
import ImproveSkills from "../components/sections/ImproveSkills";
import QouteSection from "../components/sections/QuoteSection";
import ChefsSection from "../components/sections/ChefsSection";


export default function Home(){
    return (
        <div>
            <HeroSection />
            <ImproveSkills />
            <QouteSection />
            <ChefsSection />
        </div>
    )
}