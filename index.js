const express = require('express')
const app = express()

app.get('/', function(req, res){
	res.send('Ye Huahua is a Guapi!!!')
})

app.listen(8080, function() {
	console.log("Example app listening at http")
})
