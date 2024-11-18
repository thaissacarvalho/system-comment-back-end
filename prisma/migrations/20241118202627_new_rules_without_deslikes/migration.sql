/*
  Warnings:

  - You are about to drop the `Deslike` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Deslike" DROP CONSTRAINT "Deslike_commentId_fkey";

-- DropForeignKey
ALTER TABLE "Deslike" DROP CONSTRAINT "Deslike_postId_fkey";

-- DropForeignKey
ALTER TABLE "Deslike" DROP CONSTRAINT "Deslike_userId_fkey";

-- DropTable
DROP TABLE "Deslike";
