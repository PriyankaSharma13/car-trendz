import mongoose from 'mongoose';

const ModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    brand_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true,
    },
    
});

const Model = mongoose.models.Model || mongoose.model('Model', ModelSchema);

export default Model;

