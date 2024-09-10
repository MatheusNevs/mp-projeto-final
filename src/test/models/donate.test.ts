import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

describe("Donate Model", () => {
  it("Deve criar uma doação com um usuário válido", async () => {
    const createdUser = await db.user.create({
      data: {
        email: "matheusnf62@gmail.com",
      },
    });
    const validDonateData = {
      description: "Descrição de uma doação válida",
      userId: createdUser.id,
    };
    const createdDonate = await db.donate.create({
      data: { ...validDonateData },
    });

    expect(createdDonate).toHaveProperty("id", createdDonate.id);
    expect(createdDonate).toHaveProperty(
      "description",
      validDonateData.description,
    );
    expect(createdDonate).toHaveProperty("status", "a caminho");
  });

  it("Deve falhar ao criar uma doação sem o usuário", async () => {
    const invalidDonateData = {
      description: "Descrição de uma doação inválida",
      userId: 20, // Nao existe este usuario
    };

    const notCreatedDonate = await db.donate.create({
      data: { ...invalidDonateData },
    });

    expect(notCreatedDonate).toThrow();
  });

  it("Deve falhar ao ser passado ID repetido", async () => {
    const createdUser = await db.user.create({
      data: {
        email: "matheusnf@gmail.com",
      },
    });
    const validDonateData = {
      description: "Descrição de uma doação válida",
      userId: createdUser.id,
    };
    const createdDonate = await db.donate.create({
      data: { ...validDonateData },
    });
    const repeteadDonate = await db.donate.create({
      data: { ...validDonateData, id: createdDonate.id },
    });
    expect(repeteadDonate).toThrow();
  });
});
