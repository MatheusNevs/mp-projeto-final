import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const db = new PrismaClient();

describe("Location Model", () => {
  it("Deve criar uma entrada Location com dados válidos", async () => {
    const createdUser = await db.user.create({
      data: {
        email: "locationuser@gmail.com",
      },
    });

    const createdDonate = await db.donate.create({
      data: {
        description: "Doação para teste de localização",
        userId: createdUser.id,
      },
    });

    const validLocationData = {
      local: "Rua dos Testes, 123",
      userId: createdUser.id,
      donateId: createdDonate.id,
    };

    const createdLocation = await db.location.create({
      data: { ...validLocationData },
    });

    expect(createdLocation).toHaveProperty("id", createdLocation.id);
    expect(createdLocation).toHaveProperty("local", validLocationData.local);
    expect(createdLocation).toHaveProperty("userId", validLocationData.userId);
    expect(createdLocation).toHaveProperty(
      "donateId",
      validLocationData.donateId,
    );
  });

  it("Deve falhar ao criar Location com userId inexistente", async () => {
    const createdUser = await db.user.create({
      data: {
        email: "locationuser3@gmail.com",
      },
    });
    const createdDonate = await db.donate.create({
      data: {
        description: "Doação para teste de userId inexistente",
        userId: createdUser.id,
      },
    });

    const invalidLocationData = {
      local: "Rua dos Testes, 789",
      userId: "nonexistentUserId", // userId inexistente
      donateId: createdDonate.id,
    };

    await expect(
      db.location.create({
        data: { ...invalidLocationData },
      }),
    ).rejects.toThrow(PrismaClientKnownRequestError);
  });

  it("Deve falhar ao criar Location com donateId inexistente", async () => {
    const createdUser = await db.user.create({
      data: {
        email: "locationuser4@gmail.com",
      },
    });

    const invalidLocationData = {
      local: "Rua dos Testes, 101",
      userId: createdUser.id,
      donateId: "nonexistentDonateId", // donateId inexistente
    };

    await expect(
      db.location.create({
        data: { ...invalidLocationData },
      }),
    ).rejects.toThrow(PrismaClientKnownRequestError);
  });

  it("Deve falhar ao criar Location com ID duplicado", async () => {
    const createdUser = await db.user.create({
      data: {
        email: "locationduplicate@gmail.com",
      },
    });

    const createdDonate = await db.donate.create({
      data: {
        description: "Doação para teste de ID duplicado",
        userId: createdUser.id,
      },
    });

    const validLocationData = {
      local: "Rua dos Testes, 202",
      userId: createdUser.id,
      donateId: createdDonate.id,
    };

    const createdLocation = await db.location.create({
      data: { ...validLocationData },
    });

    await expect(
      db.location.create({
        data: { ...validLocationData, id: createdLocation.id },
      }),
    ).rejects.toThrow(PrismaClientKnownRequestError);
  });
});
