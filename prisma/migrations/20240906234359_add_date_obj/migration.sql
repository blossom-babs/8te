/*
  Warnings:

  - You are about to drop the column `month` on the `Finance` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Finance` table. All the data in the column will be lost.
  - Added the required column `date` to the `Finance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Finance" DROP COLUMN "month",
DROP COLUMN "year",
ADD COLUMN     "date" TEXT NOT NULL;
