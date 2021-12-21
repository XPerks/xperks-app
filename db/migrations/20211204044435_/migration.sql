/*
  Warnings:

  - You are about to drop the column `isConfirmed` on the `Game` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "isConfirmed";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isConfirmed" BOOLEAN NOT NULL DEFAULT false;
