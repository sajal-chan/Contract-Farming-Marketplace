import express from "express";
import { Crop } from "../model/model.js"; // Capitalized 'Crop' for the model
const router = express.Router();

// Routes needed: GET and POST

// GET all crops
router.get("/", async (req, res) => {
    try {
        const crops = await Crop.find({});
        res.status(200).send({
            count: crops.length,
            data: crops,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// GET a single crop by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const crop = await Crop.findById(id);
        if (!crop) {
            return res.status(404).send({ message: "Crop not found" });
        }
        res.status(200).json(crop);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});


router.post("/", async (req, res) => {
    try {
        // Corrected destructuring of 'yieldAmount'
        const { f_name, crop_type, location, rate, yieldAmount } = req.body;

        // Logging incoming data for debugging
        console.log("Incoming data: ", req.body);

        // Check if all required fields are present
        if (!f_name || !crop_type || !location || !rate || !yieldAmount) {
            return res.status(400).send({ message: 'Please provide all required fields.' });
        }

        // Create the new crop object
        const newCrop = {
            f_name,
            crop_type,
            location,
            rate,
            yield: yieldAmount, // Map 'yieldAmount' to 'yield' field in the database
        };

        // Create the crop in the database
        const createdCrop = await Crop.create(newCrop);
        res.status(201).send(createdCrop);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});


export default router;
