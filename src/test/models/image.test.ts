import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const db = new PrismaClient();

describe("Images Model", () => {
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
      objectId: createdDonate.id,
      publicId: "validPublicId",
    };

    const createdImage = await db.images.create({
      data: { ...validImageData },
    });

    expect(createdImage).toHaveProperty("id", createdImage.id);
    expect(createdImage).toHaveProperty("objectId", validImageData.objectId);
    expect(createdImage).toHaveProperty("publicId", validImageData.publicId);
  });

  it("Deve falhar ao criar imagem sem objectId", async () => {
    const invalidImageData = {
      objectId: null,
      publicId: "validPublicId",
    };

    await expect(
      db.images.create({
        data: { ...invalidImageData },
      }),
    ).rejects.toThrow(PrismaClientKnownRequestError);
  });

  it("Deve falhar ao criar imagem sem publicId", async () => {
    const invalidImageData = {
      objectId: "validObjectId",
      publicId: null, // publicId vazio
    };

    await expect(
      db.images.create({
        data: { ...invalidImageData },
      }),
    ).rejects.toThrow(PrismaClientKnownRequestError);
  });

  it("Deve falhar ao criar imagem com ID duplicado", async () => {
    const validImageData = {
      objectId: "validObjectId2",
      publicId: "validPublicId2",
    };

    const createdImage = await db.images.create({
      data: { ...validImageData },
    });

    await expect(
      db.images.create({
        data: { ...validImageData, id: createdImage.id },
      }),
    ).rejects.toThrow(PrismaClientKnownRequestError);
  });
});
