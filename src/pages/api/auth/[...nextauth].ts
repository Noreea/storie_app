import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

export default NextAuth({
  ...authOptions,
  debug: true,  // Activez le mode debug
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("SignIn Callback:", { user, account, profile });
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log("Redirect Callback:", { url, baseUrl });
      return url;
    },
    async session({ session, user, token }) {
      console.log("Session Callback:", { session, user, token });
      return session;
    },
    async jwt({ token, user, account, profile }) {
      console.log("JWT Callback:", { token, user, account, profile });
      return token;
    },
  }
});
