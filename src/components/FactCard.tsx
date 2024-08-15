'use client'
import { useState, useEffect } from 'react';

const FactCard = () => {
  const [fact, setFact] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFact = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/facts', {
          headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_API_NINJA_KEY || '' },
        });
        const data = await response.json();
        setFact(data[0].fact);
      } catch (error) {
        console.error('Error fetching fact:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFact();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Interesting Fact</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{fact}</p>
      )}
    </div>
  );
};

export default FactCard;
