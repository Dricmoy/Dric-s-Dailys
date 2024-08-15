'use client'
import { useState, useEffect } from 'react';

export default function WeatherWidget (){
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWeather = async (lat: number, lon: number) => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/weather?lat=${lat}&lon=${lon}`,
          {
            headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_API_NINJA_KEY || '' },
          }
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather:', error);
      } finally {
        setLoading(false);
      }
    };

    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
          setLoading(false);
        }
      );
    };

    getLocation();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Weather</h2>
      {loading ? (
        <p>Loading...</p>
      ) : weather ? (
        <p>{`${weather.city}, ${weather.state}: ${weather.temp}°C, ${weather.conditions}`}</p>
      ) : (
        <p>Could not fetch weather data.</p>
      )}
    </div>
  );
};

