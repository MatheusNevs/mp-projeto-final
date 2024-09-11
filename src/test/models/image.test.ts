import { PrismaClient } from "@prisma/client";
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";

const db = new PrismaClient();

describe("Image Model", () => {
  it("Deve criar uma imagem com dados válidos", async () => {
    const createdUser = await db.user.create({
      data: {
        email: "imagetest@gmail.com",
      },
    });

    const createdDonate = await db.donate.create({
      data: {
        description: "Doação para teste de imagens",
        userId: createdUser.id,
      },
    });
    const validImageData = {
      donateId: createdDonate.id,
      publicId: "validPublicId",
    };

    const createdImage = await db.image.create({
      data: { ...validImageData },
    });

    expect(createdImage).toHaveProperty("id", createdImage.id);
    expect(createdImage).toHaveProperty("donateId", validImageData.donateId);
    expect(createdImage).toHaveProperty("publicId", validImageData.publicId);
  });

  it("Deve falhar ao criar imagem sem donateId", async () => {
    const invalidImageData = {
      donateId: null,
      publicId: "validPublicId",
    };

    await expect(
      db.image.create({
        data: { ...invalidImageData },
      }),
    ).rejects.toThrow(PrismaClientValidationError);
  });

  it("Deve falhar ao criar imagem sem publicId", async () => {
    const invalidImageData = {
      donateId: "validdonateId",
      publicId: null, // publicId vazio
    };

    await expect(
      db.image.create({
        data: { ...invalidImageData },
      }),
    ).rejects.toThrow(PrismaClientValidationError);
  });

  it("Deve falhar ao criar imagem com ID duplicado", async () => {
    const createdUser = await db.user.create({
      data: {
        email: "imagetest2@gmail.com",
      },
    });

    const createdDonate = await db.donate.create({
      data: {
        description: "Doação para teste de imagens",
        userId: createdUser.id,
      },
    });
    const validImageData = {
      donateId: createdDonate.id,
      publicId: "validPublicId2",
    };

    const createdImage = await db.image.create({
      data: { ...validImageData },
    });

    await expect(
      db.image.create({
        data: { ...validImageData, id: createdImage.id },
      }),
    ).rejects.toThrow(PrismaClientKnownRequestError);
  });
});
