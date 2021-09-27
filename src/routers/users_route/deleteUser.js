const express = require("express");
const User = require("../../models/user");
const router = new express.Router();


//Deleter user by Id
router.delete("/api/user/:id", async (req, res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if(!user){
            return res.status(404).send();
        }

        res.json({"Deleted User ": user});
    } catch (err){
        res.status(500).send(err);
    }
});

module.exports = router;