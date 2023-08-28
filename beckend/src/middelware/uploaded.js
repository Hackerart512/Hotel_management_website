const multer = require('multer');


const uploaded = (req,res, next)=>{
    try{
      
        const upload = multer({dest:"uploads/"})

        upload.single("image_photo");
        next();
    }catch(e){
       res.status(401).send({message: 'Invalid token error'});
    }
}

module.exports = uploaded;