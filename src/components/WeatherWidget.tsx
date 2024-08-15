'use client'
import { useEffect } from 'react';

const WeatherWidget: React.FC = () => {
  useEffect(() => {
    // Load the weather widget script
    const script = document.createElement('script');
    script.src = 'https://weatherwidget.io/js/widget.min.js';
    script.async = true;
    script.id = 'weatherwidget-io-js';
    document.body.appendChild(script);

    // Cleanup the script on component unmount
    return () => {
      const existingScript = document.getElementById('weatherwidget-io-js');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Weather Widget</h2>
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/en/53d54n113d49/edmonton/"
        data-label_1="EDMONTON"
        data-label_2="WEATHER"
        data-theme="original"
      >
        EDMONTON WEATHER
      </a>
    </div>
  );
};

export default WeatherWidget;
