class ItemService{
    constructor(){}
    getAllItems = () =>{
        return axios({
            url: "https://60fc37c791156a0017b4ca1c.mockapi.io/items",
            type: "GET"
        });
    }

    getItemById = (id) =>{
        return axios({
            url: `https://60fc37c791156a0017b4ca1c.mockapi.io/items/${id}`,
            type: "GET"
        });
    }
}