-- DropForeignKey
ALTER TABLE "Candidate" DROP CONSTRAINT "Candidate_party_id_fkey";

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_party_id_fkey" FOREIGN KEY ("party_id") REFERENCES "Party"("id") ON DELETE CASCADE ON UPDATE CASCADE;
