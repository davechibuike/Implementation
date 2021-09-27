const express = require("express");
const User = require("../../models/user");
const router = new express.Router()


//Find / Get user By id
router.get("/api/user/:id", async (req, res)=>{
    const userId = req.params.id

    try {
        const user = await User.findById(userId);

        if(!user){
            return res.status(404).send({message: "User not found !"})
        }
        res.json({user});
    }catch (err){
        res.status(500).send(err)
    }
    
});

module.exports = router