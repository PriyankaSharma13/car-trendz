import connectDB from "@/app/db/config";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "../../../models/User";
import { authenticateToken } from "../../middelware/auth";


export async function GET(req, res) {
  if (req.method === "GET") {
    await connectDB();

    const token = req.headers.get("authorization");

    if (!token) {
      return NextResponse.json({ error: "Missing Token", success: false });
    }
    try {
      const decodedToken = jwt.verify(token, "car-trendz");
      const user_id = decodedToken.id;

      const admin = await User.findOne({ _id: user_id });

      if (!admin) {
        return NextResponse.json({
          success: false,
          error: "Invalid login credentials",
        });
      }

      return NextResponse.json({
        success: true,
        data: admin,
      });
    } catch (error) {
      return NextResponse.json({ error: "Invalid Token", success: false });
    }
  }
}


export { authenticateToken };
