
import { createTRPCRouter, publicProcedure } from "@/app/server/api/trpc";
import {trades} from "@/app/server/hardcodedDB";
import {z} from "zod";


export const tradesRouter = createTRPCRouter({
    getAll: publicProcedure
            .query(async () => {

            await new Promise(resolve => setTimeout(resolve, 1000));

            return {
                trades: trades
            }
            }),
    add: publicProcedure.input(z.object({
        ticker: z.string(),
        positionSize: z.number(),
        openedAt: z.string(),
        closedAt: z.string().optional(),
        openPrice: z.number(),
        closePrice: z.number().optional(),
        positionBalance: z.number(),
        orderType: z.enum(['CALL', 'PUT'])
    })).mutation(async ({  input }) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        trades.push(input);
    })
});
