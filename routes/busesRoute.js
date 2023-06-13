const router = require('express').Router();
const authMiddleware = require('../middlewares/authMiddleware');
const Bus = require("../models/busModel")
// add bus

router.post('/add-bus',authMiddleware,async(req,res) => {
    try {
        const existingBus = await Bus.findOne({number : req.body.number});
        if(existingBus){
            return res.send(200).send({
                success: false,
                message: "Bus already exists",
            })
        }
        const newBus = new Bus(req.body);
        await newBus.save();
        return res.status(200).send({
            success: true,
            message: "Bus added successfully",
        })
    } catch (error) {
        res.status(200).send({
            success: false,
            message: error.message,
        })
    }
}) 

router.post("/get-all-buses",authMiddleware, async(req,res) => {
    try {
        const buses = await Bus.find();
        return res.status(200).send({
            success: true,
            message: "Buses fetched successsfully",
            data: buses,
        })
    } catch (error) {
        res.status(500).send({success:false,message: error.message});
    }
})

module.exports = router;