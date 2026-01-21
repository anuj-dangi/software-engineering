const express = require("express")
const cors = require("cors");
const mongoose = require("mongoose");
const DataModel = require('./models/DataModel');
const UserModel = require('./models/UserModel');

const app = express();
app.use(cors(
    {origin:'http://localhost:5500'}
));

app.use(express.json());

app.post("/register",async (req, res) => {

    try{
        const newData = await UserModel.create(req.body)

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
    
    res.json({code: 200});
});

app.post("/bill",async (req, res) => {
    const meter_no = req.body.meter_no;
    const unit = req.body.input;

    const find = await UserModel.findOne({meter_no: meter_no});
    
    if(find == null)
    {
        return res.status(404).json({message: "meter number not found"});
    }

    const point = Math.trunc(unit/50);
    let amount = 0;
    for(i=1;i<=point;i++)
    {
        amount = amount + (i*50);
    }

    let left = unit%50;

    amount = amount + (left*(point+1));

    try{
        const record = await DataModel.create({meter_no: meter_no, units: unit, amount: amount});

        res.status(200).json({
            success: true,
        });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/", async (req, res) => {
    const data = await DataModel.find({});

    res.json(data);
});

app.get("/users", async (req, res) => {
    const data = await UserModel.find({});

    res.json(data);
})

app.listen(3005, () => {
    console.log("Port is stareted on: localhost:3005/");
});

const mongoURI = "mongodb+srv://anujdangi8722_db_user:anuj@cluster0.w9ecdaj.mongodb.net/se"

mongoose.connect(mongoURI).then(() => {console.log("connected with database")}).catch((err) => {console.error(err)});