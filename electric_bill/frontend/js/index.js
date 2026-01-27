import { get } from "./get_func.js";
import { post } from "./post_func.js";

const ele = document.getElementById("submit_button");

show_data();

async function addBill() {
    const url="http://localhost:3005/bill";

    try{
        const user_input = document.getElementById("user_input").value;
        const user_meter_no = document.getElementById("user_meter_no").value;
    
        let data = {input: user_input, meter_no: user_meter_no};
        await post(url, data);

        document.getElementById("user_input").value = "";
        document.getElementById("user_meter_no").value = "";

        await show_data();

        // optional: clear inputs

    }
    catch(e)
    {
        console.log("Error :" ,e);
    }
}


async function show_data() {
    const url="http://localhost:3005/";

    try{

        let result = await get(url);

        let output = "<table><tr><th>Meter No</th><th>Bill</th><th>Amount</th></tr>";
        for(let i=0;i<result.length;i++){
            output = output + "<tr><td>"+result[i].meter_no + "</td><td>";
            output = output + result[i].units + "</td><td>" + result[i].amount;

                output = output + "</td></tr>";
        }

        output = output + "</table>";
        
        document.getElementById("output_span").innerHTML = output;
    }
    catch(e)
    {
        console.log("Error :" ,e);
    }
}

ele.addEventListener("click", () => {
    addBill();
})