const mongoose = require('mongoose')

const DB = 'mongodb+srv://dippu1:Z1ySMZpMzoqmCNXA@cluster0.8ovsrwy.mongodb.net/asdfdgd?retryWrites=true&w=majority'
// const DB1 = process.env.DATABASE;
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connection successful')
}).catch((err) => console.log('no connection'))