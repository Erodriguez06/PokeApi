import React from "react";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Card from "./Card";

const Item = (props) => {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        borderRadius: 1,
        ...sx
      }}
      {...other}
    />
  );
};

const ListPokedex = (props) => {
  const { pokemons, setPage, page } = props;

  const handlerPage = (event, page) => {
    setPage(page - 1);
  };

  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          my: 3
        }}
      >
        <Stack spacing={2}>
          <Pagination
            count={10}
            color="primary"
            onChange={handlerPage}
            page={page + 1}
          />
        </Stack>
      </Box>
      <Box
        sx={{
          display: "grid",
          gap: 1,
          gridTemplateColumns: "repeat(2, 1fr)"
        }}
      >
        {pokemons.map((pokemon, idx) => {
          return (
            <Item key={idx}>
              <Card
                name={pokemon.name}
                imgFront={pokemon.sprites.front_default}
                imgBack={pokemon.sprites.back_default}
                types={pokemon.types.map((type) => type.type.name)}
              />
            </Item>
          );
        })}
      </Box>
    </div>
  );
};

export default ListPokedex;
