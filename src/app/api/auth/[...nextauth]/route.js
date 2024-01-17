import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import { options } from "./options";

const handler = NextAuth(options);

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID ?? "",
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
//     }),
//   ],
// });

export { handler as GET, handler as POST };
