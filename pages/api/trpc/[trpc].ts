
import { createNextApiHandler } from "@trpc/server/adapters/next";

// import { env } from "~/env.mjs";
import { createTRPCContext } from "@/app/server/api/trpc";
import { appRouter } from "@/app/server/api/root";

// export API handler
export default createNextApiHandler({
    router: appRouter,
    createContext: createTRPCContext,
    onError:
        process.env.NODE_ENV === "development" // TODO: use env.mjs
            ? ({ path, error }) => {
                console.error(
                    `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
                );
            }
            : undefined,
});