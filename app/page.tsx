import Bible from "@/components/sections/Bible";
import ChurchPurpose from "@/components/sections/ChurchPurpose";
import DailyMessage from "@/components/sections/DailyMessage";
import Events from "@/components/sections/Events";
import Hero from "@/components/sections/Hero";
import PrayerWall from "@/components/sections/PrayerWall";
import ServiceTimes from "@/components/sections/ServiceTimes";

export default function Home() {
  return (
    <main>
      <Hero />
      <ChurchPurpose />
      <ServiceTimes />
      <Events />
      <DailyMessage />
      <PrayerWall />
      <Bible />
    </main>
  );
}