/*
  Warnings:

  - A unique constraint covering the columns `[userId,commentId]` on the table `Deslike` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,commentId]` on the table `Like` will be added. If there are existing duplicate values, this will fail.
  - Made the column `userId` on table `Deslike` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `Like` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Deslike" DROP CONSTRAINT "Deslike_userId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_userId_fkey";

-- DropIndex
DROP INDEX "Deslike_commentId_key";

-- DropIndex
DROP INDEX "Like_commentId_key";

-- AlterTable
ALTER TABLE "Deslike" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Like" ALTER COLUMN "userId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Deslike_userId_commentId_key" ON "Deslike"("userId", "commentId");

-- CreateIndex
CREATE UNIQUE INDEX "Like_userId_commentId_key" ON "Like"("userId", "commentId");

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deslike" ADD CONSTRAINT "Deslike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
