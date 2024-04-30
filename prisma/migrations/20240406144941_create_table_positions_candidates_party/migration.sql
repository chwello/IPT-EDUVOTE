-- CreateEnum
CREATE TYPE "Year" AS ENUM ('FRESHMAN', 'SOPHOMORE', 'JUNIOR', 'SENIOR');

-- CreateTable
CREATE TABLE "Party" (
    "id" TEXT NOT NULL,
    "vision" TEXT,
    "mission" TEXT,
    "goals" TEXT
);

-- CreateTable
CREATE TABLE "Position" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "number_of_votes" INTEGER NOT NULL,
    "description" TEXT,
    "party_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Candidate" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "year" "Year" NOT NULL,
    "age" INTEGER NOT NULL,
    "position_id" TEXT NOT NULL,
    "credentials" TEXT,
    "advocacy" TEXT,
    "course" TEXT NOT NULL,
    "img_url" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Party_id_key" ON "Party"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Position_id_key" ON "Position"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Candidate_id_key" ON "Candidate"("id");

-- AddForeignKey
ALTER TABLE "Position" ADD CONSTRAINT "Position_party_id_fkey" FOREIGN KEY ("party_id") REFERENCES "Party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_position_id_fkey" FOREIGN KEY ("position_id") REFERENCES "Position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
