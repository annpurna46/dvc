import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/users";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";


export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email }).select("+password");
          
          if (!user) {
            throw new Error("Invalid Email or Password");
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            throw new Error("Invalid Email or Password");
          }
          
          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);

      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      
      // delete password from session
      delete session?.user?.password;

      return session;
    },
  },
  pages: {
    signIn: "/login",
  
  },
  
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };