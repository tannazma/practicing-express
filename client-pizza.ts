const getLowCalorieVeggiPizzas = async () => {
  const response = await fetch(
    "http://127.0.0.1:3001/pizzas/low-calories-vegetarian"
  );
  const data = await response.json();
  console.log(data);
};
getLowCalorieVeggiPizzas();
