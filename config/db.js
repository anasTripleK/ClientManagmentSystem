const mongoose = require('mongoose')
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            'mongodb+srv://testUser:123456testUser@clusterzero.j5w7v.mongodb.net/BodyZone?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true
            }
        )
        console.log('MongoDB Connected')
    }
    catch(err)
    {
        console.log(err)
        process.exit(1)
    }
}
module.exports = connectDB