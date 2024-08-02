/*
  Warnings:

  - You are about to drop the column `orgId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_orgId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "orgId",
ADD COLUMN     "organizationId" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;
