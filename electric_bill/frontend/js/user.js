import { get } from "./get_func.js";

async function get_users() {
        const url="http://localhost:3005/users"

        try{
            
            let result = await get(url);
            let output = `
                        <table>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Meter No</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                        `;

                        for (let i = 0; i < result.length; i++) {
                        output += `
                            <tr>
                            <td>${result[i].name}</td>
                            <td>${result[i].meter_no}</td>
                            <td>${result[i].phone}</td>
                            <td>${result[i].mail}</td>
                            <td>${result[i].type}</td>
                            </tr>
                        `;
                        }

                        output += `</tbody></table>`;

            
            document.getElementById("users").innerHTML = output;
        }
        catch(e)
        {
            console.log("Error :" ,e);
        }
    }

get_users();