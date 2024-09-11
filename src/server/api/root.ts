import { z } from "zod";
import {
  createCallerFactory,
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  donate: {
    createDonate: protectedProcedure
      .input(z.object({ description: z.string() }))
      .mutation(async ({ input, ctx }) => {
        const createdDonate = await ctx.db.donate.create({
          data: {
            description: input.description,
            userId: ctx.session.user.id,
          },
        });
        return createdDonate;
      }),
    getDonates: publicProcedure.query(async ({ ctx }) => {
      const donates = await ctx.db.donate.findMany({
        include: {
          Location: true,
        },
      });
      return donates;
    }),
  },
  image: {
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

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
