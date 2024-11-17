// app/api/game/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Create a single PrismaClient instance and reuse it
const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const { username } = await request.json();

        if (!username) {
            return NextResponse.json(
                { success: false, error: "Username is required" },
                { status: 400 }
            );
        }

        // Create a new player
        const player = await prisma.player.create({
            data: {
                username,
                score: 0,
                rank: "Beginner",
                status: "Active",
            },
        });

        // Create a game controller
        const controller = await prisma.gameController.create({
            data: {
                gameName: "Card Game",
                currentPlayer: 1,
                sumQuota: 0.0,
            },
        });

        // Create a new game session
        const game = await prisma.game.create({
            data: {
                status: "New",
                startTime: new Date(),
                controllerId: controller.id,
                playerId: player.id,
                endTime: null, // Set explicitly to null for new games
            },
        });

        return NextResponse.json({
            success: true,
            gameId: game.id,
            playerId: player.id,
        });
    } catch (error) {
        console.error("Error creating game:", error);
        return NextResponse.json(
            {
                success: false,
                error:
                    error instanceof Error
                        ? error.message
                        : "Failed to create game",
            },
            { status: 500 }
        );
    }
}
