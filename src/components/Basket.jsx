import { ShoppingBasket } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import BasketItem from "./BasketItem";

const Basket = (props) => {
  const {
    order = [],
    removeFromOrder,
    cartOpen,
    closeCart = Function.prototype,
  } = props;

  return (
    <Drawer anchor="right" open={cartOpen} onClose={closeCart}>
      <List sx={{ width: "400px" }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary="Basket" />
        </ListItem>
        <Divider />
        {order.length ? (
          <>
            {order.map((item) => (
              <div key={item.id}>
                <BasketItem {...item} removeFromOrder={removeFromOrder} />
                <Divider />
              </div>
            ))}
            <ListItem>
              <Typography sx={{ fontWeight: 700 }}>
                Общая стоимость:{" "}
                {order.reduce((acc, item) => {
                  return acc + item.price * item.quantity;
                }, 0)}{" "}
                рублей.
              </Typography>
            </ListItem>
          </>
        ) : (
          <ListItem>Cart is empty</ListItem>
        )}
      </List>
    </Drawer>
  );
};

export default Basket;
