import React, { useState, useReducer, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const trailerReducer = (state, action) => {
  if(action.type === "SHOW_TRAILER"){
    return {id: action.id, showTrailer: action.showTrailer}
  }
  if(action.type === "CLOSE_TRAILER"){
    return {showTrailer: action.showTrailer}
  }
  
  return {id: "", showTrailer: false}
}

const MovieContext = React.createContext({
    onViewTrailer: (id) => {},
    onCloseTrailer: () => {},
    onSearchMovie: ()=>{},
    onAddFavourites: ()=>{},
    onShowFavourites: ()=>{},
    onCloseFavList: ()=>{},
    onRemoveFavMovie: (id)=>{},
});

export const MovieContextProvider = (props) => {

    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState("thor");
    const [trailerState, dispatchTrailer] = useReducer(trailerReducer, {id: "", showTrailer: false});
    const [videoURL, setVideoURL] = useState("");
    // const [favState, dispatchFav] = useReducer(favouritesReducer, []);
    const [showFav, setShowFav] = useState(false);
    const [favMovies, setFavMovies] = useState([]);

    const getMovies = async (searchValue) => {
        if(searchValue){
            const url = `https://api.themoviedb.org/3/search/movie${API_KEY}&query=${searchValue}`;
    
            const response =  await fetch(url);
            const responseJSON = await response.json();
        
            if (responseJSON.results){
            setMovies(responseJSON.results);
        }
    }
} 
    useEffect(() => {
      getMovies(searchValue);
    }, [searchValue]);
  
    const getTrailer = async ({id}) => {
      const trailerURL = `https://api.themoviedb.org/3/movie/${id}/videos${API_KEY}`;
  
      const response = await fetch(trailerURL);
      const responseJSON = await response.json();
  
      const trailers = responseJSON.results;
  
      if(trailers){
          trailers.find((movie)=>{
            if(movie.type.toLowerCase()=== "Trailer"  ){
              return movie.key;
            }
            setVideoURL(movie.key);
        })
      }
    }
  
    useEffect(() => {
      getTrailer(trailerState)
    }, [trailerState]);
  
    const handleShowTrailer = (id) => {
      dispatchTrailer({
        type: "SHOW_TRAILER",
        id: id,
        showTrailer: true
      })
    }
    const handleCloseTrailer = () => {
      dispatchTrailer({
        type: "CLOSE_TRAILER",
        showTrailer: false
      })
    }
    const handleAddFavourites = (movie) => {
        let index = favMovies.findIndex(el=>el.id === movie.id);
            if(index === -1){
                return setFavMovies([...favMovies, movie]);
            }else{
                return favMovies;
            }
    }

    const handleShowFavourites = () => {
        setShowFav(true);
    }

    const handleCloseFavList = () => {
        setShowFav(false);
    }
    const handleRemoveFavMovie = (id) => {
        setFavMovies(current => {
            current.filter(movie => {
                console.log(movie);
                return movie.id !== id;
        })
    });
    };

    return (
        <MovieContext.Provider 
        value={{ 
            onShowTrailer: handleShowTrailer,
            onCloseTrailer: handleCloseTrailer,
            onSearchMovie: setSearchValue,
            onAddFavourites: handleAddFavourites,
            onShowFavourites: handleShowFavourites,
            onCloseFavList: handleCloseFavList,
            onRemoveFavMovie: handleRemoveFavMovie,
            trailerState: trailerState,
            movies: movies,
            videoURL: videoURL,
            showFav: showFav,
            favMovies: favMovies,
         }}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieContext;