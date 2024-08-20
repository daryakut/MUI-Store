import { Close } from "@mui/icons-material";
import { IconButton, ListItem, Typography } from "@mui/material";

const BasketItem = (props) => {
  return (
    <ListItem>
      <Typography variant={"body1"}>
        {props.name} {props.price}руб x{props.quantity}
      </Typography>
      <IconButton
        onClick={() => {
          props.removeFromOrder(props.id);
        }}
      >
        <Close />
      </IconButton>
    </ListItem>
  );
};

export default BasketItem;
