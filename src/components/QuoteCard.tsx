// components/QuoteCard.tsx
import { useState, useEffect } from 'react';

const QuoteCard = () => {
  const [quote, setQuote] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchQuote = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
          headers: { 'X-Api-Key': 'YOUR_API_KEY' },
        });
        const data = await response.json();
        setQuote(`${data[0].quote} - ${data[0].author}`);
      } catch (error) {
        console.error('Error fetching quote:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Quote of the Day</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{quote}</p>
      )}
    </div>
  );
};

export default QuoteCard;
