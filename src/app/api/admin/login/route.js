import { NextResponse } from "next/server";
import User from "@/app/models/User"
import bcrypt from "bcrypt";
import connectDB from "@/app/db/config";
import jwt from "jsonwebtoken";

export async function POST(req, res) {
  if (req.method === "POST") {
    await connectDB();
    try {
      const body = await req.json();
      const { email, password } = body;

      const admin = await User.findOne({ email });

      if (!admin) {
        return NextResponse.json({
          success: false,
          error: "Invalid login credentials",
        });
      }

      const passwordMatch = await bcrypt.compare(password, admin.password);
      if (!passwordMatch) {
        return NextResponse.json({
          message: "Login not successful",
          error: "Invalid password",
          success: false,
        });
      }

      const token = jwt.sign(JSON.stringify({ id: admin._id , email: admin.email }), "car-trendz");

      return NextResponse.json({
        message: "Login successful",
        admin,
        token: token,
        success: true,
      });
    } catch (error) {
      console.error("Error creating admin :", error);
      return NextResponse.json({ error: "Internal Server Error" });
    }
  } else {
    return NextResponse.json({ error: "Method Not Allowed" });
  }
}
