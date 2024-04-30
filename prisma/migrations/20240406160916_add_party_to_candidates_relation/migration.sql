/*
  Warnings:

  - Added the required column `party_id` to the `Candidate` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Candidate" DROP CONSTRAINT "Candidate_position_id_fkey";

-- DropForeignKey
ALTER TABLE "Position" DROP CONSTRAINT "Position_party_id_fkey";

-- AlterTable
ALTER TABLE "Candidate" ADD COLUMN     "party_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Position" ADD CONSTRAINT "Position_party_id_fkey" FOREIGN KEY ("party_id") REFERENCES "Party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_party_id_fkey" FOREIGN KEY ("party_id") REFERENCES "Party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_position_id_fkey" FOREIGN KEY ("position_id") REFERENCES "Position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
