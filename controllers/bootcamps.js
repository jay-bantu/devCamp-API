const Bootcamp = require('../models/Bootcamps')


//@ desc    get bootcamp
// route    GET api/v1/bootcamps
//access     public

exports.getBootcamps = (req,res,next)=>{
    res.status(200).json({success:true, msg:'show all bootcamps'});

}
//@ desc    get bootcamp
// route    GET api/v1/bootcamps/:id
//access     public

exports.getBootcamp = (req,res,next)=>{
    res.status(200).json({success:true, msg:`get bootcamp ${req.params.id}`});

}
//@ desc    get bootcamp
// route    GET api/v1/bootcamps
//access     private

exports.createBootcamp = async (req,res,next)=>{

    try {
        const bootcamp = await Bootcamp.create(req.body);

        res.status(201).json({
            success: true,
            data: bootcamp
        });
        
    } catch (error) {
        res.status(400).json({
            success: false
        });
        
    }
    

}
//@ desc    get bootcamp
// route    GET api/v1/bootcamps/:id
//access     private

exports.updateBootcamp = (req,res,next)=>{
    res.status(200).json({success:true, msg:`update bootcamp  ${req.params.id}`});

}
//@ desc    get bootcamp
// route    GET api/v1/bootcamps/:1
//access     private

exports.deleteBootcamp = (req,res,next)=>{
    res.status(200).json({success:true, msg:`delete bootcamp ${req.params.id}`});

}
