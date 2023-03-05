import React, { useState, useReducer, useEffect } from "react";
import { getSearchedMovies } from "../api/getSearchedMovies";
import { getTrailer } from "../api/getTrailer";

const initialState = {
  showFavMovies: false,
  favMovies: [],
  showFavIcon: false,
};

const trailerReducer = (state, action) => {
  if (action.type === "SHOW_TRAILER") {
    return { id: action.id, showTrailer: action.showTrailer };
  }
  if (action.type === "CLOSE_TRAILER") {
    return { showTrailer: action.showTrailer };
  }

  return { id: "", showTrailer: false };
};

const favouritesReducer = (state, action) => {
  if (action.type === "ADD_FAV_MOVIE") {
    const existingMovie = state.favMovies.findIndex(
      (movie) => movie.id === action.movie.id
    );
    if (existingMovie > -1) {
      return state;
    } else {
      return {
        ...state,
        favMovies: [...state.favMovies, action.movie],
        showFavIcon: true,
        showFavMovies: action.showFavMovies,
      };
    }
  }
  if (action.type === "SHOW_FAV_LIST") {
    return {
      ...state,
      favMovies: [...state.favMovies],
      showFavMovies: action.showFavMovies,
    };
  }
  if (action.type === "HIDE_FAV_LIST") {
    return {
      ...state,
      favMovies: [...state.favMovies],
      showFavMovies: action.showFavMovies,
    };
  }
  if (action.type === "REMOVE") {
    if (state.favMovies.length === 1) {
      let updatedMovies = state.favMovies.filter(
        (current) => current.id !== action.id
      );
      return {
        favMovies: updatedMovies,
        showFavIcon: false,
        showFavMovies: false,
      };
    } else {
      let updatedMovies = state.favMovies.filter(
        (current) => current.id !== action.id
      );
      return {
        favMovies: updatedMovies,
        showFavIcon: true,
        showFavMovies: true,
      };
    }
  } else {
    return state;
  }
};

const MovieContext = React.createContext({
  onViewTrailer: (id) => {},
  onCloseTrailer: () => {},
  onSearchMovie: () => {},
  onAddFavourites: () => {},
  onShowFavourites: () => {},
  onCloseFavList: () => {},
  onRemoveFavMovie: (id) => {},
  onClearSearch: () => {},
});

export const MovieContextProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [trailerState, dispatchTrailer] = useReducer(trailerReducer, {
    id: "",
    showTrailer: false,
  });
  const [videoURL, setVideoURL] = useState("");
  const [favState, dispatchFav] = useReducer(favouritesReducer, initialState);
  const [startAnimation, setStartAnimation] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  useEffect(() => {
    fetchSearchedMovie(searchValue);
  }, [searchValue]);

  useEffect(() => {
    fetchTrailer(trailerState);
  }, [trailerState]);

  const fetchSearchedMovie = async (searchValue) => {
    if (searchValue) {
      const searchMovie = await getSearchedMovies(searchValue);
      setMovies(searchMovie);
    }
  };

  const fetchTrailer = async ({ id }) => {
    const movieTrailer = await getTrailer(id);
    setVideoURL(movieTrailer);
  };

  const handleShowTrailer = (id) => {
    dispatchTrailer({
      type: "SHOW_TRAILER",
      id: id,
      showTrailer: true,
    });
  };
  const handleCloseTrailer = () => {
    dispatchTrailer({
      type: "CLOSE_TRAILER",
      showTrailer: false,
    });
  };

  const handleAddFavourites = ({ id, original_title, poster_path, name }) => {
    dispatchFav({
      type: "ADD_FAV_MOVIE",
      movie: {
        id: id,
        title: original_title ? original_title : name,
        poster: poster_path,
      },
      showFavIcon: true,
    });
  };

  const handleShowFavourites = () => {
    dispatchFav({
      type: "SHOW_FAV_LIST",
      showFavMovies: true,
    });
  };

  const handleCloseFavList = () => {
    dispatchFav({
      type: "HIDE_FAV_LIST",
      showFavMovies: false,
    });
  };
  const handleRemoveFavMovie = (id) => {
    console.log(id);
    dispatchFav({
      type: "REMOVE",
      id: parseInt(id, 10),
    });
  };
  const handleClearSearch = (id) => {
    const clearMovies = movies.filter((current) => current.id === id);
    setMovies(clearMovies);
    setSearchValue("");
  };

  const updateHomePage = (boolean) => {
    setIsHomePage(boolean);
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
        onClearSearch: handleClearSearch,
        trailerState: trailerState,
        movies: movies,
        videoURL: videoURL,
        favState: favState,
        startAnimation: startAnimation,
        isHomePage: isHomePage,
        onUpdateHomePage: updateHomePage,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
