import connectDB from "../../db/config";
import { NextResponse } from "next/server";
import Brand from "@/app/models/Brand"

// -----Create brands---------
export async function POST(req, res) {
    if (req.method === "POST") {
        try {
            await connectDB();
            const body = await req.json();
            const { name } = body;
            if (!name) {
                return NextResponse.json({ success: false, error: 'Name is requried' });
            }
            
            const createBrand = new Brand({
                name: name,
            });

             await createBrand.save();  

            return NextResponse.json({ success: true, data: createBrand });
        } catch (error) {
            console.error('Error creating brand:', error);
            return NextResponse.json({ success: false, error: 'Internal Server Error' });
        }
    } else {
        return NextResponse.json({ success: false, error: 'Method Not Allowed' });
    }
}


// ------------get brand ------------

export async function GET(req, res) {
    if (req.method === "GET") {
        try {
            await connectDB(); 
        
            const brands = await Brand.find().sort({name:1});

            if (!brands) {
                return NextResponse.json({ error: "Brands not found", success: false });
            }

            return NextResponse.json({
                message: "Brands retrieved successfully",
                data: brands,
                success: true,
            });
        } catch (error) {
            console.error(error);
            return NextResponse.json({ error: "Internal Server Error", success: false });
        }
    } else {
        return NextResponse.json({ success: false, error: 'Method Not Allowed' });
    }
}

// --------------Delete brand----------------

export async function DELETE(req, res) {
    if (req.method === "DELETE") {
        try {
            await connectDB();
            const body = await req.json()
            const { id } =body;
                        
            if (!id) {
                return NextResponse.json({ error: "Missing 'id' in request body", success: false });
            }

            const result = await Brand.deleteOne({_id:id});
             console.log(result)
            if (result.deletedCount === 0) {
                return NextResponse.json({ error: "Brand not found", success: false });
            }

            return NextResponse.json({
                message: "Brand deleted successfully",
                data: result,
                success: true,
            });

        } catch (error) {
            console.error(error);
            return NextResponse.json({ error: "Internal Server Error", success: false });
        }
    } else {
        return res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }
}

// --------------Update brand--------------

export async function PUT(req, res) {
    if (req.method === "PUT") {
        try {
            await connectDB();
            const body = await req.json();
            const {id, name} = body;

            if (!id || !name) {
                return NextResponse.json({ error: "Both 'id' and 'name' are required", success: false });
            }

            const updatedBrand = await Brand.findByIdAndUpdate(id, { name }, { new: true });

            if (!updatedBrand) {
                return NextResponse.json({ error: "Brand not found", success: false });
            }

            return NextResponse.json({
                message: "Brand updated successfully",
                data: updatedBrand,
                success: true,
            });

        } catch (error) {
            console.error(error);
            return NextResponse.json({ error: "Internal Server Error", success: false });
        }
    } else {
        return res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }
}

