const express = require("express");
const User = require("../../models/user");
const router = new express.Router();


//Update user
router.patch("/api/user/:id", async (req, res)=>{
    const udpates = Object.keys(req.body);
    const allowedUpdates = ["name", "email", "role"];
    const isValidOperation = udpates.every((update) => allowedUpdates.includes(update));
    
    if(!isValidOperation){
        return res.status(400).send({error: "Invalid Updates !"})
    }
    
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if(!user){
            return res.status(404).send();
        }

        res.status(200).json(user)
    }catch(err) {
        res.status(400).send(err);
    }
});


module.exports = router;

