alert("Welcome to Food Order System!");

let orderType = prompt("would u like delivery or take   away good sir or madame?");
if (orderType !== "delivery" && orderType !== "takeaway") {
  console.log("Please answer accordingly to the question: Delivery or Takeaway");
} else {

  let foodMenu = `
Select your food (Enter number 1-9):
1. Burger 250 rs
2. Pizza 400 rs
3. Biryani 200rs
4. Sandwich 180 rs
5. Tikka 350 rs
6. Shawarma 150 rs
7. Pasta 380 rs
8. Nuggets 150 rs
9. Fries 100 rs
`;
  let foodChoice = prompt(foodMenu);

  let foodName = "";

  if (foodChoice === "1") {
    foodName = "Burger";
  } else if (foodChoice === "2") {
    foodName = "Pizza";
  } else if (foodChoice === "3") {
    foodName = "Biryani";
  } else if (foodChoice === "4") {
    foodName = "Sandwich";
  } else if (foodChoice === "5") {
    foodName = "Tikka";
  } else if (foodChoice === "6") {
    foodName = "Shawarma";
  } else if (foodChoice === "7") {
    foodName = "Pasta";
  } else if (foodChoice === "8") {
    foodName = "Nuggets";
  } else if (foodChoice === "9") {
    foodName = "Fries";
  } else {
    console.log("Please answer appropriately: choose a number between 1 and 9.");
  }
  let portionSize = prompt("Choose prefferd portion size: Small, Medium, or Large?");
  if (
    portionSize !== "Small" &&
    portionSize !== "Medium" &&
    portionSize !== "Large"
  ) {
    console.log("Please answer appropriately: Small, Medium, or Large.");
  } else {
    let sauce = prompt(" would u like me to add any sauces ? (e.g. Garlic, Mayo, BBQ)");

    let drink = prompt("Which drink would you like? (e.g. Coke, Sprite, Water)");

    if (foodName !== "" && foodName !== "Invalid choice") {
      console.log("this is ur summary");
      console.log("Order Type:", orderType);
      console.log("Food Selected:", foodName);
      console.log("Portion Size:", portionSize);
      console.log("Sauce Add-ons:", sauce);
      console.log("Drink:", drink);
      console.log("Thank you for ordering!, your order wil arive in 30 mins please be patient !");
    }
  }
}
