import { z } from "zod";
import {
  createCallerFactory,
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

/**
 * @file root.ts
 * @brief Arquivo principal de roteamento para a API com tRPC.
 *
 * Este arquivo define o roteamento de procedimentos da API utilizando tRPC,
 * com métodos públicos e protegidos para manipulação de recursos relacionados
 * a doações e imagens no banco de dados.
 *
 * **Tecnologias**: tRPC, Zod, Prisma.
 */

/**
 * @brief Roteador principal da aplicação.
 *
 * Este roteador agrega todas as rotas/procedimentos definidos no servidor,
 * que estão localizados no diretório `/api`. Esses procedimentos podem
 * ser manipulados de acordo com a necessidade da aplicação, usando tanto
 * `protectedProcedure` para rotas que requerem autenticação, quanto `publicProcedure`
 * para rotas abertas.
 *
 * Assertivas de Entrada/Saída:
 * - A função cria rotas para interações com o banco de dados relacionadas a doações e imagens.
 * - Todas as entradas são validadas com Zod e os dados são manipulados via Prisma.
 */

export const appRouter = createTRPCRouter({
  donate: {
    /**
     * @brief Procedimento para criação de uma doação.
     *
     * Este procedimento é protegido e requer que o usuário esteja autenticado.
     * O usuário deve fornecer uma descrição da doação via entrada validada pelo Zod.
     *
     * Assertivas de Entrada:
     * - Deve receber um objeto contendo `{ description: string }`.
     * - O `userId` é extraído da sessão autenticada do usuário.
     *
     * Assertivas de Saída:
     * - Retorna o objeto da doação criada com `description` e `userId` no banco de dados.
     *
     * @param input Objeto contendo `description` da doação.
     * @return O objeto `createdDonate` com os dados da nova doação.
     */
    createDonate: protectedProcedure
      .input(
        z.object({ description: z.string(), lat: z.number(), lng: z.number() }),
      )
      .mutation(async ({ input, ctx }) => {
        const createdDonate = await ctx.db.donate.create({
          data: {
            description: input.description,
            userId: ctx.session.user.id,
            Location: {
              create: {
                local: `latitude: ${input.lat}, longitude: ${input.lng}`,
                lat: input.lat,
                lng: input.lng,
                user: { connect: { id: ctx.session.user.id } },
              },
            },
          },
        });
        return createdDonate;
      }),

    /**
     * @brief Procedimento para obter todas as doações.
     *
     * Este procedimento é público e retorna uma lista de todas as doações,
     * incluindo a localização associada a cada doação.
     *
     * Assertivas de Entrada:
     * - Não requer entrada.
     *
     * Assertivas de Saída:
     * - Retorna um array contendo todas as doações com a localização associada.
     *
     * @return Array de objetos `donates` contendo as doações e respectivas localizações.
     */
    getDonates: publicProcedure.query(async ({ ctx }) => {
      const donates = await ctx.db.donate.findMany({
        include: {
          Location: true,
        },
      });
      return donates;
    }),

    /**
     * @brief Procedimento para obter uma única doação pelo ID.
     *
     * Este procedimento público busca uma doação específica no banco de dados pelo
     * seu ID, retornando os detalhes da doação e a localização associada.
     *
     * Assertivas de Entrada:
     * - Deve receber um objeto contendo `{ id: string }` validado com Zod.
     *
     * Assertivas de Saída:
     * - Retorna um objeto `donate` com os dados da doação correspondente ao ID.
     *
     * @param input Objeto contendo `id` da doação.
     * @return O objeto `donate` com os dados da doação e a localização associada.
     */
    getDonate: publicProcedure
      .input(z.object({ id: z.string() }))
      .query(async ({ ctx, input }) => {
        const donate = await ctx.db.donate.findUnique({
          where: { id: input.id },
          include: { Location: true },
        });
        return donate;
      }),
  },
  image: {
    /**
     * @brief Procedimento para criar uma imagem associada a uma doação.
     *
     * Este procedimento é protegido e requer autenticação. O usuário deve fornecer
     * o ID da doação associada e o `publicId` da imagem do Cloudinary.
     *
     * Assertivas de Entrada:
     * - Deve receber um objeto contendo `{ donateId: string, publicId: string }`.
     *
     * Assertivas de Saída:
     * - Retorna o objeto da imagem criada com `publicId` e `donateId` no banco de dados.
     *
     * @param input Objeto contendo `donateId` e `publicId` da imagem.
     * @return O objeto `createdImage` com os dados da nova imagem.
     */
    createImage: protectedProcedure
      .input(z.object({ donateId: z.string(), publicId: z.string() }))
      .mutation(async ({ ctx, input }) => {
        const createdImage = await ctx.db.image.create({
          data: {
            publicId: input.publicId,
            donateId: input.donateId,
          },
        });
        return createdImage;
      }),
  },
});

/**
 * @brief Tipo exportado da API para ser usado em outras partes da aplicação.
 */
export type AppRouter = typeof appRouter;

/**
 * @brief Função para criar um `caller` do lado do servidor para acessar a API tRPC.
 *
 * Essa função permite fazer chamadas para os procedimentos tRPC diretamente no servidor.
 *
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 *
 * @return Um objeto `caller` que permite fazer chamadas para os procedimentos tRPC.
 */
export const createCaller = createCallerFactory(appRouter);
