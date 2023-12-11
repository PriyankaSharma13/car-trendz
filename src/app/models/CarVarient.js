import mongoose from 'mongoose';

const VarientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true,
    },
    
});

const CarVariant  = mongoose.models.CarVariant  || mongoose.model('Model', VarientSchema);

export default CarVariant ;

