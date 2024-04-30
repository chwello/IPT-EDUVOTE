-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'VOTER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" DEFAULT 'VOTER',
    "year" "Year",
    "course" TEXT,
    "hasVoted" BOOLEAN DEFAULT false,
    "vote_history" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
