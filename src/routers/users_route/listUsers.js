const express = require("express");
const User = require("../../models/user");
const router = new express.Router();

//Get all user's 
router.get("/api/users", async (req, res)=>{
    try {
        const users = await User.find({})
        res.json({users});

    }catch (err){

        res.status(500).send(err);
    }
});

module.exports = router