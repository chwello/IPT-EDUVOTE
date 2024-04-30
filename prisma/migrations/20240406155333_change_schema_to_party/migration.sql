/*
  Warnings:

  - Added the required column `name` to the `Party` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Candidate" DROP CONSTRAINT "Candidate_position_id_fkey";

-- DropForeignKey
ALTER TABLE "Position" DROP CONSTRAINT "Position_party_id_fkey";

-- DropIndex
DROP INDEX "Candidate_id_key";

-- DropIndex
DROP INDEX "Party_id_key";

-- DropIndex
DROP INDEX "Position_id_key";

-- AlterTable
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Party" ADD COLUMN     "name" TEXT NOT NULL,
ADD CONSTRAINT "Party_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Position" ADD CONSTRAINT "Position_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Position" ADD CONSTRAINT "Position_party_id_fkey" FOREIGN KEY ("party_id") REFERENCES "Party"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_position_id_fkey" FOREIGN KEY ("position_id") REFERENCES "Position"("id") ON DELETE CASCADE ON UPDATE CASCADE;
