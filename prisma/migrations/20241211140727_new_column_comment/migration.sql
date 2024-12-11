/*
  Warnings:

  - A unique constraint covering the columns `[authorId]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `authorId` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "authorId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Comment_authorId_key" ON "Comment"("authorId");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
