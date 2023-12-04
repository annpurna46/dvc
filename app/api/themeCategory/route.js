import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Category from "@/models/themeCat";
import { getResponseMessage } from "@/helpers/responseMessage";


export async function GET() {
    try {
        await connectMongoDB();
        const category = await Category.find().select("name");
        //console.log(category);
        return NextResponse.json(category);
    } catch (error) {
        console.log(error);
        return getResponseMessage("Error in gettting data !!", 404, false);
    }
}