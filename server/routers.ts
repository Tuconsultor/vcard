import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { createFile, getUserFiles, deleteFile } from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  files: router({
    list: protectedProcedure.query(({ ctx }) =>
      getUserFiles(ctx.user.id)
    ),
    
    upload: protectedProcedure
      .input((val: unknown) => {
        if (typeof val !== 'object' || val === null) throw new Error('Invalid input');
        const obj = val as Record<string, unknown>;
        return {
          filename: typeof obj.filename === 'string' ? obj.filename : '',
          mimeType: typeof obj.mimeType === 'string' ? obj.mimeType : '',
          size: typeof obj.size === 'number' ? obj.size : 0,
          url: typeof obj.url === 'string' ? obj.url : '',
          fileKey: typeof obj.fileKey === 'string' ? obj.fileKey : '',
          category: typeof obj.category === 'string' ? obj.category : 'general',
          description: typeof obj.description === 'string' ? obj.description : undefined,
        };
      })
      .mutation(({ ctx, input }) =>
        createFile({
          userId: ctx.user.id,
          filename: input.filename,
          mimeType: input.mimeType,
          size: input.size,
          url: input.url,
          fileKey: input.fileKey,
          category: input.category,
          description: input.description,
        })
      ),
    
    delete: protectedProcedure
      .input((val: unknown) => {
        if (typeof val !== 'number') throw new Error('Invalid input');
        return val;
      })
      .mutation(async ({ ctx, input: fileId }) => {
        await deleteFile(fileId, ctx.user.id);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
