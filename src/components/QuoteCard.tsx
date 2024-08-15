'use client'
import { useState, useEffect } from 'react';

const QuoteCard = () => {
  const [quote, setQuote] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuote = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
          headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_API_NINJA_KEY || '' },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        if (data.length > 0) {
          setQuote(`${data[0].quote} - ${data[0].author}`);
        } else {
          setError('No quote found.');
        }
      } catch (error) {
        console.error('Error fetching quote:', error);
        setError('Failed to fetch quote.');
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Quote of the Day</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {quote && <p>{quote}</p>}
    </div>
  );
};

export default QuoteCard;
