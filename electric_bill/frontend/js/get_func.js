export const get = async (url) => {
    console.log("get");
    try{
        const response = await fetch(url)

        if(!response.ok)
        {
            throw new Error(`Response status: ${response.status}`);
        }

        let result = await response.json();

        return result;
    }
    catch(e)
    {
        console.log("Error :" ,e + "error in get function");
    }
}