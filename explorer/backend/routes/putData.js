const cowData = require('./putType/cowData');
//for testing
module.exports = ( req, res ) => {
//switch on type field
    console.log(req.body);
    switch(req.body.type) {
            case "cow":
                return cowData( req, res ); 
            break;
            
            default:
                return res.json({ success: false , error: "No matching type found" });
        }
};

 