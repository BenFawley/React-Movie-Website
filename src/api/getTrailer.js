import { BASE_URL, API_KEY } from "./config";

export const getTrailer = async (id) => {
    let newKey;
    const trailerURL = `${BASE_URL}/movie/${id}/videos${API_KEY}`;
    const response = await fetch(trailerURL)
    .then((res)=>res.json())
    .catch((err)=>{
      console.log(err);
  });
      if(response.results){
           const key = response.results.find((movie)=>{
            if(movie.type.toLowerCase() == "Trailer"){
              return movie;
            }
            return movie;
        })        
        let newKey = key.key;
        console.log(newKey);
        return newKey;
      }
}