const IncomingForm = require('formidable').IncomingForm

module.exports = function upload(req, res) {
    var form = new IncomingForm()
    
    form.on('file', (field, file) => {
        return res.json({ success: true });  
    })

    form.on('end', () => {
      return res.json({ success: true });
    });

    form.parse(req);     
}
