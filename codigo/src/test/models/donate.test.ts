import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

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
      userId: "20", // Nao existe este usuario
    };

    await expect(
      db.donate.create({
        data: { ...invalidDonateData },
      }),
    ).rejects.toThrow(PrismaClientKnownRequestError); // Certifique-se de que o erro correto do Prisma está sendo capturado
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
    await expect(
      db.donate.create({
        data: { ...validDonateData, id: createdDonate.id },
      }),
    ).rejects.toThrow(PrismaClientKnownRequestError);
  });
});
