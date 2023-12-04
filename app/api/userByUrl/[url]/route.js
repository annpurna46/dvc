import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/users";

export async function GET(){
    try {
        await connectMongoDB();
        const user = await User.findById({url, email})
        console.log("user: ", user);
    return NextResponse.json({ user }, {status:200});
    } catch (error) {
        console.log(error);
    }
}
