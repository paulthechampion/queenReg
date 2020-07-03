const express= require("express");
const router= express.Router();
const People = require("../module/reg")

router.get('/all', async(req,res)=>{
    try{
        const peoples= await People.find();
        res.render("index",{peoples:peoples});
    }catch{
        res.redirect('/');
    }

})

router.get('/', (req,res)=>{
    res.render("reg/new",{people:new People()});
    
})

router.post('/', async(req,res)=>{
    const people= new People({
        firstName:req.body.firstName,
        lastName: req.body.lastName,
        pronoun: req.body.pronoun,
        email:  req.body.email,
        dob: new Date(req.body.dob),
        phoneN: req.body.phoneN
    });

    try{
        const newPeople= await people.save();
        res.redirect('/all');
    }catch{
        res.render('reg/new',{
            people:people,
            errorMessage:"Error Registering you, please try again, make sure you fill the form correctly"
        });
    }
    
})




module.exports = router;