'use client'
import { useState, useEffect } from 'react';

const JokeCard = () => {
  const [joke, setJoke] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJoke = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/jokes', {
          headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_API_NINJA_KEY || '' },
        });
        const data = await response.json();
        setJoke(data[0].joke);
      } catch (error) {
        console.error('Error fetching joke:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJoke();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Joke of the Day</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{joke}</p>
      )}
    </div>
  );
};

export default JokeCard;
