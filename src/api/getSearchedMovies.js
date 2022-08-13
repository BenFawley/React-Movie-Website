import { BASE_URL, API_KEY } from "./config";


export const getSearchedMovies = async (searchValue) => {
    if(searchValue){
        const url = `${BASE_URL}/search/movie${API_KEY}&query=${searchValue}`;
        const response =  await fetch(url)
        .then((res)=>res.json())
        .catch((err)=>{
            console.log(err);
        });
        if (response.results){
       return response.results;
    }
}
} 