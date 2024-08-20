import {
  Card,
  CardMedia,
  Grid,
  CardContent,
  Button,
  Typography,
  CardActions,
} from "@mui/material";
import React from "react";

const GoodsItem = (props) => {
  const { id, name, price, setOrder, poster } = props;

  return (
    <Grid item xs={12} md={4}>
      <Card sx={{height:"100%"}}>
        <CardMedia
          component="img"
          image={poster}
          alt={name}
          title={name}
          sx={{ height: 140 }}
        />
        <CardContent>
          <Typography variant="h5" component="h3">
            {name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Цена: {price} руб.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              setOrder({
                id: id,
                name: name,
                price: price,
              })
            }
          >
            Купить
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GoodsItem;
