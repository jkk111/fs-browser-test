let express = require('express')
let app = express();
app.use(express.static('static'))
app.listen(8083)
