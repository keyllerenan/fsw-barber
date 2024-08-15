import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import { db } from "./prisma";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google"
//import { Session } from "inspector";
import { id } from "date-fns/locale";
import { Session } from "inspector";

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(db) as Adapter,
    providers: [
        GoogleProvider ({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
}),
],
callbacks: {
    /*async session ({session: user}) {
        Session.user = {
            ...Session.user,
            id: user.id,
        } as any
        return session
    }, */
},
secret: process.env.NEXT_AUTH_SECRET,
}
