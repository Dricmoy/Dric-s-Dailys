'use client'
import { useState, useEffect } from 'react';

export default function TriviaCard() {
  const [trivia, setTrivia] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTrivia = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/trivia', {
          headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_API_NINJA_KEY || '' },
        });
        const data = await response.json();
        setTrivia(data[0].question);
      } catch (error) {
        console.error('Error fetching trivia:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrivia();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Trivia of the Day</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{trivia}</p>
      )}
    </div>
  );
}
