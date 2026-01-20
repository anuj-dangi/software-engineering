const express = require("express")
const cors = require("cors");
const mongoose = require("mongoose");
const DataModel = require('./models/DataModel');

const app = express();
app.use(cors(
    {origin:'http://localhost:5500/*'}
));

app.use(express.json());

app.post("/register",async (req, res) => {
    
    const name = req.body.name;
    const meter_no = req.body.meter_no;
    console.log(req.body);

    try{
        const newData = await DataModel.create({name: name, meter_no:meter_no})
        console.log(newData)
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
    

    res.json({code: 200});
});

app.post("/bill",async (req, res) => {
    const meter_no = req.body.meter_no;
    const unit = req.body.input;

    const point = Math.trunc(unit/50);
    let amount = 0;
    for(i=1;i<=point;i++)
    {
        amount = amount + (i*50);
    }

    let left = unit%50;

    amount = amount + (left*(point+1));

    try{
        const newBillEntry = { 
            units: unit, 
            amount: amount 
        };
    

        const updatedRecord = await DataModel.findOneAndUpdate(
            { meter_no: meter_no },           
            { $push: { bill: newBillEntry } }, 
            { new: true, upsert: true }       
        );

        res.status(200).json({
            success: true,
            updatedRecord
        });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/", async (req, res) => {
    const data = await DataModel.find({});

    res.json(data);
})

app.listen(3005, () => {
    console.log("Port is stareted on: localhost:3005/");
});

const mongoURI = "mongodb+srv://anujdangi8722_db_user:anuj@cluster0.w9ecdaj.mongodb.net/se"

mongoose.connect(mongoURI).then(() => {console.log("connected with database")}).catch((err) => {console.error(err)});