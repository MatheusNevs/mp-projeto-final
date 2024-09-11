import { api } from "~/trpc/server";
import { PrismaClient } from "@prisma/client";
import { ZodError } from "zod";
const db = new PrismaClient();

describe("Donate controller", () => {
  it("Deve criar uma doação com um usuário válido", async () => {
    const createdUser = await db.user.create({
      data: {
        email: "donatecontroller@gmail.com",
      },
    });
    const validDonateData = {
      description: "Descrição de uma doação válida",
      userId: createdUser.id,
    };
    const createdDonate = await api.donate.createDonate(validDonateData);

    expect(createdDonate).toHaveProperty("id", createdDonate.id);
    expect(createdDonate).toHaveProperty(
      "description",
      validDonateData.description,
    );
    expect(createdDonate).toHaveProperty("status", "a caminho");
  });

  it("Deve dar erro de validação do Zod", async () => {
    const createdUser = await db.user.create({
      data: {
        email: "donatecontroller@gmail.com",
      },
    });
    const validDonateData = {
      description: "",
      userId: createdUser.id,
    };
    expect(await api.donate.createDonate(validDonateData)).rejects.toThrow(
      ZodError,
    );
  });
});
