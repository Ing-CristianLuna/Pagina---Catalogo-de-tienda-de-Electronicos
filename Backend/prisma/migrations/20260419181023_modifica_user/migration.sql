/*
  Warnings:

  - You are about to alter the column `rol` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `rol` BOOLEAN NOT NULL;
