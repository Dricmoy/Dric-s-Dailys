// pages/index.tsx
import TriviaCard from '@/components/TriviaCard';
import QuoteCard from '@/components/QuoteCard';
import JokeCard from '@/components/JokeCard';
import FactCard from '@/components/FactCard';
import WeatherWidget from '@/components/WeatherWidget';
import RiddleCard from '@/components/RiddleCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Daily's by Dric</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <TriviaCard />
        <QuoteCard />
        <JokeCard />
        <FactCard />
        <RiddleCard />
      </div>
      <WeatherWidget />
    </div>
  );
}
