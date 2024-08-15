'use client'
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Riddle {
  question: string;
  answer: string;
}

const RiddleCard: React.FC = () => {
  const [riddle, setRiddle] = useState<Riddle | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const fetchRiddle = async () => {
      try {
        const response = await fetch("https://api.api-ninjas.com/v1/riddles", {
          headers: { "X-Api-Key": process.env.NEXT_PUBLIC_NINJA_API_KEY || '' },
        });
        const data = await response.json();
        setRiddle(data[0]);
      } catch (error) {
        console.error("Error fetching riddle:", error);
      }
    };

    fetchRiddle();
  }, []);

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle>Riddle of the Day</CardTitle>
      </CardHeader>
      <CardContent>
        {riddle ? (
          <div>
            <CardDescription>{riddle.question}</CardDescription>
            {showAnswer && (
              <p className="text-gray-700 mt-4">{riddle.answer}</p>
            )}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleShowAnswer}>
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RiddleCard;
