"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export default function GameInterface() {
    const [username, setUsername] = useState("");
    const [gameState, setGameState] = useState<{
        gameId?: string;
        playerId?: string;
    } | null>(null);

    const startGame = async () => {
        if (!username) {
            toast.error("Please enter a username");
            return;
        }

        try {
            const response = await fetch("/api/game", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username }),
            });

            const data = await response.json();

            if (data.success) {
                setGameState({
                    gameId: data.gameId,
                    playerId: data.playerId,
                });
                toast.success("Game created successfully!");
            } else {
                toast.error(data.error || "Failed to create game");
            }
        } catch (error) {
            console.error(error);
            toast.error("Error starting game");
        }
    };

    return (
        <div className='container mx-auto p-4 mt-28'>
            <Card className='max-w-md mx-auto'>
                <CardHeader>
                    <CardTitle>PlaySwipe Online</CardTitle>
                </CardHeader>
                <CardContent>
                    {!gameState?.gameId ? (
                        <div className='space-y-4'>
                            <Input
                                type='text'
                                placeholder='Choose a username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className='w-full'
                            />
                            <Button
                                onClick={startGame}
                                variant={"destructive"}
                                className='w-full'
                            >
                                Start Game
                            </Button>
                        </div>
                    ) : (
                        <div className='space-y-4'>
                            <p className='text-center'>Game Started!</p>
                            <p className='text-sm text-gray-500'>
                                Game ID: {gameState.gameId}
                            </p>
                            <p className='text-sm text-gray-500'>
                                Player ID: {gameState.playerId}
                            </p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
