import { post } from "./post_func.js";

const ele = document.getElementById("submit_register");

function verify()
{
    let name = document.getElementById("name").value;
    const meter_no = document.getElementById("meter_no").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const mail = document.getElementById("mail").value;

    const type = document.querySelector('input[name="type"]:checked').value;

    name = name.toUpperCase();

    return {
        name, meter_no, phone, address, pincode, mail, type
    };
}

async function register() {
    const url="http://localhost:3005/register/";

    try{
        let data = verify();

        let response = await post(url, data);

        const result = await response.json();
        
        if(result.code == 200){
        document.getElementById("output_span").innerHTML = "New user created successfully!";
        }


    }
    catch(e)
    {
        console.log("Error :" ,e);
    }
}

ele.addEventListener("click", () => {
    register();
})