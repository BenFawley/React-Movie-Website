import { BASE_URL, API_KEY } from "./config";

export const getTrailer = async (id) => {
    const trailerURL = `${BASE_URL}/movie/${id}/videos${API_KEY}`;
    const response = await fetch(trailerURL)
    .then((res)=>res.json())
    .catch((err)=>{
      console.log(err);
  });
      if(response.results){
           const key = response.results.find((movie)=>{
            if(movie.type.toLowerCase()=== "Trailer"){
              return movie;
            }
            return movie;
        })        
        return key.key;
      }
}