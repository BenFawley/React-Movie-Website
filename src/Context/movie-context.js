import React, { useState, useReducer, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const initialState = {
  showFavMovies: false,
  favMovies: [],
  showFavIcon: false,
};

const trailerReducer = (state, action) => {
  if(action.type === "SHOW_TRAILER"){
    return {id: action.id, showTrailer: action.showTrailer}
  }
  if(action.type === "CLOSE_TRAILER"){
    return {showTrailer: action.showTrailer}
  }
  
  return {id: "", showTrailer: false}
}

const favouritesReducer = (state, action) => {
  if (action.type === "ADD_FAV_MOVIE"){
    const existingMovie = state.favMovies.findIndex(movie => movie.id === action.movie.id);
    if(existingMovie > -1){
      return state;
    }else{
      return {
        ...state, 
        favMovies: [...state.favMovies, action.movie],
        showFavIcon: true,
        showFavMovies: state.showFavMovies,
      }
    }
  }
  if(action.type ==="SHOW_FAV_LIST"){
    return {
      ...state,
      favMovies:[...state.favMovies],
      showFavMovies: action.showFavMovies,
    }
  }
  if(action.type ==="HIDE_FAV_LIST"){
    return {
      ...state,
      favMovies:[...state.favMovies],
      showFavMovies:action.showFavMovies,
    }
  }
  if(action.type === "REMOVE"){
      if(state.favMovies.length === 1){
        let updatedMovies = state.favMovies.filter(current=>
          current.id !== action.id);
          return {
            favMovies: updatedMovies,
            showFavIcon: false,
            showFavMovies: false,
          }
      } else {
          let updatedMovies = state.favMovies.filter(current=>current.id !== action.id);
          console.log(updatedMovies);
            return {
              favMovies: updatedMovies,
              showFavIcon: true,
              showFavMovies: true,
      }
    }
  } else {
    return state;
  }
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
    const [favState, dispatchFav] = useReducer(favouritesReducer, initialState);

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
      dispatchFav({
          type: "ADD_FAV_MOVIE",
          movie: {
              id: movie.id,
              title: movie.original_title,
              poster: movie.poster_path,
          },
          showFavIcon: true,
      })
  }

    const handleShowFavourites = () => {
        dispatchFav({
          type:"SHOW_FAV_LIST",
          showFavMovies:true,
        })
    }

    const handleCloseFavList = () => {
        dispatchFav({
          type:"HIDE_FAV_LIST",
          showFavMovies:false,
        })
    }
    const handleRemoveFavMovie = (id) => {
        dispatchFav({
          type: "REMOVE",
          id: parseInt(id, 10),
        })
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
            favState: favState,
         }}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieContext;