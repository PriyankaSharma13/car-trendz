import { NextResponse } from "next/server";
import connectDB from "../../db/config";
import Variant from "../../models/Variant";
const { ObjectId } = require('mongodb');

// ---------create Variant---------
export async function POST(req, res) {
  if (req.method === "POST") {
    try {
      await connectDB();

      const body = await req.json();
      const { name, brand_id, model_id } = body;

      if (!name || !brand_id) {
        return NextResponse.json({
          success: false,
          error: "name or brand_id are required",
        });
      }
      if (!model_id) {
        return NextResponse.json({
          success: false,
          error: "model_id is required",
        });
      }

      const createVariant = new Variant({
        name: name,
        brand_id,
        model_id,
      });

      await createVariant.save();
      console.log("Variant created successfully:", createVariant);
      return NextResponse.json({
        success: true,
        data: createVariant,
      });
    } catch (error) {
      return NextResponse.json({
        success: false,
        error: "Internal Server Error",
      });
    }
  } else {
    return NextResponse.json({ success: false, error: "Method Not Allowed" });
  }
}

// ------ get Variant-------------
function getParamsFromURL(url) {
  const searchParams = new URLSearchParams(url.search);
  const params = {};

  for (const [key, value] of searchParams) {
    params[key] = value;
  }

  return params;
}

export async function GET(req, res) {
  if (req.method === "GET") {
    try {
      await connectDB();

      const url = new URL(req.url);

      const params = getParamsFromURL(url);

      const { id } = params;

      let result = [];

      if (id) {
        result = await Variant.aggregate([
          {
            $match: { _id: new ObjectId(id) },
          },
          {
            $lookup: {
              from: "brands",
              localField: "brand_id",
              foreignField: "_id",
              as: "brand_info",
            },
          },
          {
            $lookup: {
              from: "models",
              localField: "model_id",
              foreignField: "_id",
              as: "model_info",
            },
          },
        ]);
      } else {
        result = await Variant.aggregate([
          {
            $lookup: {
              from: "brands",
              localField: "brand_id",
              foreignField: "_id",
              as: "brand_info",
            },
          },
          {
            $lookup: {
              from: "models",
              localField: "model_id",
              foreignField: "_id",
              as: "model_info",
            },
          },
        ]);
      }

      return NextResponse.json({
        message: "Variants retrieved successfully",
        success: true,
        data: result,
      });
    } catch (error) {
      console.error("Error fetching variants:", error);
      NextResponse.json({
        success: false,
        error: "Internal Server Error",
      });
    }
  }
}

// --------------update variant-----------

export async function PUT(req, res) {
  if (req.method === "PUT") {
    try {
      await connectDB();
      const body = await req.json();
      const { id, name, brand_id, model_id } = body;

      if (!id || !name) {
        return NextResponse.json({
          success: false,
          error: "id or name are required",
        });
      }
      if (!brand_id || !model_id) {
        return NextResponse.json({
          success: false,
          error: "brand_id or model_id are required",
        });
      }
      const updatedVariant = await Variant.findByIdAndUpdate(
        id,
        {
          name,
          brand_id,
          model_id,
        },
        { new: true }
      );

      if (!updatedVariant) {
        return NextResponse.json({
          error: "Variant not found",
          success: false,
        });
      }

      return NextResponse.json({
        message: "Variant updated successfully",
        data: updatedVariant,
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

// --------------delete Variant------------------
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

      const result = await Variant.deleteOne({ _id: id });
      if (result.deletedCount === 0) {
        return NextResponse.json({
          error: "Variant not found",
          success: false,
        });
      }

      return NextResponse.json({
        message: "Variant deleted successfully",
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
/* 
// -----------------get variant data by ID -----------
export async function GET(req, res) {
  if (req.method === "GET") {
    try {
      await connectDB();
      const body = await req.json();
      const { id } = body;
    // const { id } = req.query;

     console.log(id)
      if (!id) {
        return res.status(200).json({ error: "id is required" });
      }
      const result = await Variant.findById(id);

      if (!result) {
        return res
          .status(200)
          .json({ error: "Item  not found", success: false });
      }
      res.status(200).json({
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
 */
