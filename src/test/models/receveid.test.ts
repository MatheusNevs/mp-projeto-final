import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const db = new PrismaClient();

describe("Receveid Model", () => {
  it("Deve criar uma entrada Receveid com dados válidos", async () => {
    const createdUser = await db.user.create({
      data: {
        email: "validuser@gmail.com",
      },
    });

    const createdDonate = await db.donate.create({
      data: {
        description: "Doação para Receveid",
        userId: createdUser.id,
      },
    });

    const validReceveidData = {
      donateId: createdDonate.id,
      userId: createdUser.id,
      message: "Mensagem de agradecimento",
    };

    const createdReceveid = await db.receveid.create({
      data: { ...validReceveidData },
    });

    expect(createdReceveid).toHaveProperty("id", createdReceveid.id);
    expect(createdReceveid).toHaveProperty(
      "message",
      validReceveidData.message,
    );
    expect(createdReceveid).toHaveProperty(
      "donateId",
      validReceveidData.donateId,
    );
    expect(createdReceveid).toHaveProperty("userId", validReceveidData.userId);
  });

  it("Deve falhar ao criar Receveid sem donateId", async () => {
    const createdUser = await db.user.create({
      data: {
        email: "anotheruser@gmail.com",
      },
    });

    const invalidReceveidData = {
      donateId: "", // donateId inválido
      userId: createdUser.id,
      message: "Mensagem sem donateId",
    };

    await expect(
      db.receveid.create({
        data: { ...invalidReceveidData },
      }),
    ).rejects.toThrow(PrismaClientKnownRequestError);
  });

  it("Deve falhar ao criar Receveid com donateId não existente", async () => {
    const createdUser = await db.user.create({
      data: {
        email: "thirduser@gmail.com",
      },
    });

    const invalidReceveidData = {
      donateId: "nonexistentDonateId", // donateId inexistente
      userId: createdUser.id,
      message: "Mensagem com donateId inexistente",
    };

    await expect(
      db.receveid.create({
        data: { ...invalidReceveidData },
      }),
    ).rejects.toThrow(PrismaClientKnownRequestError);
  });

  it("Deve falhar ao criar Receveid com userId não existente", async () => {
    const createdUser = await db.user.create({
      data: {
        email: "fourthuser@gmail.com",
      },
    });
    const createdDonate = await db.donate.create({
      data: {
        description: "Doação para teste de userId",
        userId: createdUser.id,
      },
    });

    const invalidReceveidData = {
      donateId: createdDonate.id,
      userId: "nonexistentUserId", // userId inexistente
      message: "Mensagem com userId inexistente",
    };

    await expect(
      db.receveid.create({
        data: { ...invalidReceveidData },
      }),
    ).rejects.toThrow(PrismaClientKnownRequestError);
  });

  it("Deve falhar ao criar Receveid com ID duplicado", async () => {
    const createdUser = await db.user.create({
      data: {
        email: "duplicatetest@gmail.com",
      },
    });

    const createdDonate = await db.donate.create({
      data: {
        description: "Doação para Receveid duplicado",
        userId: createdUser.id,
      },
    });

    const validReceveidData = {
      donateId: createdDonate.id,
      userId: createdUser.id,
      message: "Mensagem para Receveid duplicado",
    };

    const createdReceveid = await db.receveid.create({
      data: { ...validReceveidData },
    });

    await expect(
      db.receveid.create({
        data: { ...validReceveidData, id: createdReceveid.id },
      }),
    ).rejects.toThrow(PrismaClientKnownRequestError);
  });
});
