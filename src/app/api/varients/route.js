import connectDB from "../../db/config"

export async function GET(req,res){
    if(req.method === GET){
        try {
            await connectDB()
            
        } catch (error) {
            
        }
    }

}