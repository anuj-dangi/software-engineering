export const post = async (url, data) => {

    try{
        const response = await fetch(url, {
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(data),
        });

        if(!response.ok)
        {
            throw new Error(`Response status: ${response.status}`);
        }
        // optional: clear inputs

        return response;

    }
    catch(e)
    {
        console.log("Error :" ,e);
    }
}