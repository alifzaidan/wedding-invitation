-- CreateTable
CREATE TABLE "Wishes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "wish" TEXT NOT NULL,
    "attendees" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Wishes_pkey" PRIMARY KEY ("id")
);
