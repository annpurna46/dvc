import { getResponseMessage } from "@/helpers/responseMessage";
import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import DVC from "@/models/dvc";
// import multer from 'multer';
// import initMiddleware from '../../lib/init-middleware';
// import Cors from 'cors';
// import fs from 'fs/promises';
// import path from 'path';


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
export const config = {
  api: {
    bodyParser: false,
  },
};


export async function GET(request, { params }){
    const {userId} = params;
    try {
        await connectMongoDB();
        const dvc = await DVC.findById({userId});
        return NextResponse.json(dvc);
        
    } catch (error) {
        console.log(error);
    return getResponseMessage("Error in getting task !!", 404, false);
    }
}

export async function PUT(req, { params }) {
  const cors = Cors({
    methods: ['POST'],
  });
  
  await initMiddleware(cors)(req, res);

    try {
      await initMiddleware(upload.single('image'))(req, res);
      const image = req.file;
      // Ensure the 'public/uploads' directory exists
    const uploadDirectory = path.join(process.cwd(), 'public/uploads');
    await fs.mkdir(uploadDirectory, { recursive: true });

    // Generate a unique filename
    const fileName = `image_${Date.now()}.jpg`;

    // Construct the full file path
    const filePath = path.join(uploadDirectory, fileName);

    // Write the image buffer to the file
    await fs.writeFile(filePath, image.buffer);
      const { userId } = params;
      console.log(userId);
      const { name } = await request.json();
  
      let card = await DVC.findById(userId);
  
      (card.companyName = companyName), (card.companyEmail = companyEmail), (card.status = status);
      const updatedTask = await task.save();
      return NextResponse.json(updatedTask);
    } catch (error) {
      console.log(error);
      return getResponseMessage("Error in updating task !! ", 500, false);
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