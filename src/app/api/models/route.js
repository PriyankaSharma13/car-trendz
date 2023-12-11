import { NextResponse } from "next/server";
import connectDB from "../../db/config";
import CarModel from "@/app/models/Model";

// -----Create Models---------
export async function POST(req, res) {
  if (req.method === "POST") {
    try {
      await connectDB();

      const body = await req.json();
      const { name, brand_id } = body;

      if (!name) {
        return NextResponse.json({ success: false, error: "Name is required" });
      }

      if (!brand_id) {
        return NextResponse.json({
          success: false,
          error: "brand_id is required",
        });
      }

      const createModel = new CarModel({
        name: name,
        brand_id,
      });

      await createModel.save();

      return NextResponse.json({
        success: true,
        data: createModel,
      });
    } catch (error) {
      console.error("Error creating brand:", error);
      return NextResponse.json({
        success: false,
        error: "Internal Server Error",
      });
    }
  } else {
    return NextResponse.json({ success: false, error: "Method Not Allowed" });
  }
}

// ----------GET Models--------

export async function GET(req, res) {
  if (req.method === "GET") {
    try {
      await connectDB();
      const result = await CarModel.aggregate([
        {
          $lookup: {
            from: "brands",
            localField: "brand_id",
            foreignField: "_id",
            as: "brand_info",
          },
        },
        {
          $unwind: "$brand_info",
        },
      ]);

      return NextResponse.json({
        message: "Models retrieved successfully",
        data: result,
        success: true,
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json({
        error: "Internal Server Error",
        success: false,
      });
    }
  }
}

// --------Update Models-----

export async function PUT(req, res) {
  if (req.method === "PUT") {
    try {
      await connectDB();
      const body = await req.json();
      const { id, name, brand_id } = body;

      if (!id || !name || !brand_id) {
        return NextResponse.json({
          error: "id, name or brand_id are required",
          success: false,
        });
      }
      const updatedModel = await CarModel.findByIdAndUpdate(id, {
        name,
        brand_id,
      }, { new: true });

      if (!updatedModel) {
        return NextResponse.json({ error: "Model not found", success: false });
      }

      return NextResponse.json({
        message: "Model updated successfully",
        data: updatedModel,
        success: true,
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json({
        error: "Internal Server Error",
        success: false,
      });
    }
  }
}

// -------------Delete brands---------------

export async function DELETE(req, res) {
  if (req.method === "DELETE") {
    try {
      await connectDB();
      const body = await req.json();
      const { id } = body;

      if (!id) {
        return NextResponse.json({
          error: "Missing 'id' in request body",
          success: false,
        });
      }

      const result = await CarModel.deleteOne({ _id: id });

      if (result.deletedCount === 0) {
        return NextResponse.json({
          error: "CarModel not found",
          success: false,
        });
      }

      return NextResponse.json({
        message: "CarModel deleted successfully",
        data: result,
        success: true,
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json({
        error: "Internal Server Error",
        success: false,
      });
    }
  } else {
    return res
      .status(405)
      .json({ success: false, error: "Method Not Allowed" });
  }
}
