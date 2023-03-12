import React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";

export default function AlertDialog(props) {
  const { open, handleClose, pokemon } = props;
  if (pokemon) {
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby={pokemon.name}
          aria-describedby={pokemon.name}
        >
          <Box
            sx={{
              p: 1
            }}
          >
            <Typography component="div" variant="h4" className="fontCapi">
              {pokemon.name}
            </Typography>
          </Box>
          <DialogContent>
            <Box
              sx={{
                p: 1,
                m: 1
              }}
            >
              {pokemon.types.map((type, idx) => {
                return (
                  <Box key={idx}>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                      className="fontCapi"
                    >
                      {type.type.name}
                    </Typography>
                  </Box>
                );
              })}
              <CardMedia
                component="img"
                sx={{ width: 150 }}
                image={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
              <CardMedia
                component="img"
                sx={{ width: 150 }}
                image={pokemon.sprites.back_default}
                alt={pokemon.name}
              />
            </Box>
          </DialogContent>
        </Dialog>
      </div>
    );
  } else {
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="N/A"
          aria-describedby="N/A"
        >
          <DialogTitle>No se encontró resultado</DialogTitle>
        </Dialog>
      </div>
    );
  }
}
