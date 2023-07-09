const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));
app.use(express.json())
app.use(cors());

app.get('/id/:dynamic',  async function (req, res){
    const {dynamic} = await req.params;
    if(!dynamic){
        return res.status(404).send({ status: 'not found'});
    }
        let otp = await fetch('https://smstome.com/api/phones/'+dynamic+'/messages')
        let response = await otp.json();
        res.status(200).send(response);
})

module.exports = app;
 app.listen(port, () => { console.log(`server started ${port}`);
})