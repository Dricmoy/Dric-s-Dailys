'use client'
import TriviaCard from '@/components/TriviaCard';
import QuoteCard from '@/components/QuoteCard';
import JokeCard from '@/components/JokeCard';
import FactCard from '@/components/FactCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 justify-center">
      <h1 className="text-3xl font-bold mb-8 text-center">Daily's by Dric</h1>
      <div className="grid grid-row-1 sm:grid-cols-2 lg:grid-rows-1 gap-6">
        <TriviaCard />
        <QuoteCard />
        <JokeCard />
        <FactCard />

        <div
          data-mc-src="dcf18822-f367-4789-b268-cdab50fa9259#youtube"></div>
                
        <script 
          src="https://cdn2.woxo.tech/a.js#66bdd2daf7b7ff39240280b4" 
          async data-usrc>
        </script>
      </div>
    </div>
  );
}
