import { createTRPCRouter } from "@/app/server/api/trpc";
import {tradesRouter} from "@/app/server/api/routers/trades";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    trades: tradesRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
