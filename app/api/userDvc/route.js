import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import DVC from "@/models/dvc";
import { getServerSession } from "next-auth";
import { getResponseMessage } from "@/helpers/responseMessage";
import { authOptions } from "../auth/[...nextauth]/route";
import jwt from "jsonwebtoken";


export async function GET() {
    try {
        const data = await getServerSession(authOptions);
        console.log(data);
        const userId = data.user._id;
        const url = data.user.url;
        const dvc = await DVC.find({ userId });
        return NextResponse.json(dvc);
    } catch (error) {
        console.log(error);
        return getResponseMessage("Error in gettting data !!", 404, false);
    }
}
export async function POST(request) {

    const { name, category, userId } = await request.json();
    try {
        await connectMongoDB();
        const dvc = new DVC({
            name,
            themeCategory:category,
            userId,
        });

        const createdDvc = await dvc.save();
        return NextResponse.json(createdDvc, {
            status: 201,
        });
    } catch (error) {
        console.log(error);
        return getResponseMessage("Failed to create Dvc !! ", 500, false);
    }
}
export async function DELETE(request, { params }) {
    try {
      const { taskId } = params;
  
      await Task.deleteOne({
        _id: taskId,
      });
      return getResponseMessage("Task Deleted !!", 200, true);
    } catch (error) {
      console.log(error);
      return getResponseMessage("Error in deleting Task !", 500, false);
    }
  }

