import mongoose from 'mongoose';

const VariantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      brand_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true,
      },
      model_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true,
      },
    
    
});

const Variant  = mongoose.models.Variant  || mongoose.model('Variant', VariantSchema);

export default Variant ;

