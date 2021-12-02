-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" TEXT,
    "thumbnail" TEXT,
    "banner" TEXT,
    "cover" TEXT,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
