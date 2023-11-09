import menu from "./pizza.json";
console.log(menu);

import express from "express";
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send(menu);
});
app.get("/pizzas/low-calories-vegetarian", (req, res) => {
  const lowCalorieVeggiPizzas = menu.filter(
    (pizz) => pizz.caloricCount < 600 && pizz.vegetarian
  );
  res.send(lowCalorieVeggiPizzas);
});

app.listen(port, () => {
  console.log(`Server has started on port: ${port}`);
});
