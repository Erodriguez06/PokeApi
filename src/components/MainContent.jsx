import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import AppBar from "./AppBar";
import ListPokedex from "./ListPokedex";
import ModalPokemon from "./ModalPokemon";
import { searchPokemon, getPokemons, getPokemonsByUrl } from "../functions/api";

const MainContent = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState({
    name: "",
    types: [],
    sprites: { front_default: "", back_default: "" }
  });
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchPokemons = async (page) => {
    try {
      setLoading(true);
      const data = await getPokemons(10, 10 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsByUrl(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPokemon = async (pokemon) => {
    const data = await searchPokemon(pokemon);
    setPokemon(data);
    handleClickOpen();
  };

  const handlerPage = (page) => {
    setPage(page);
  };

  useEffect(() => {
    fetchPokemons(page);
  }, [page]);

  return (
    <Box>
      <AppBar getPokemon={fetchPokemon} />
      {loading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <ListPokedex pokemons={pokemons} setPage={handlerPage} page={page} />
      )}
      <ModalPokemon open={open} handleClose={handleClose} pokemon={pokemon} />
    </Box>
  );
};

export default MainContent;
