import mongoose from "mongoose";

const cropSchema = mongoose.Schema(
    {
        f_name:{
            type:String,
            required:true,
        }
        ,crop_type: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        rate: {
            type: Number,
            required: true
        },
        yield: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true, // Automatically add createdAt and updatedAt fields
    }
);

export const Crop = mongoose.model('Crop', cropSchema);
