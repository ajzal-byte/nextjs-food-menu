export const menuItems: FoodItem[] = [
  {
    id: 1,
    title: "Grilled Chicken Salad",
    description:
      "A refreshing mix of fresh greens topped with juicy grilled chicken, cherry tomatoes, and crunchy cucumbers, all drizzled with a light and tangy vinaigrette dressing that enhances the flavors.",
    image:
      "https://www.eatingbirdfood.com/wp-content/uploads/2023/06/grilled-chicken-salad-hero.jpg",
    ingredients: ["Chicken", "Lettuce", "Tomatoes", "Vinaigrette", "Cucumber"],
    category: "Salad",
    customization: [
      {
        label: "Base Options",
        options: ["Romaine Lettuce", "Spinach", "Kale", "Mixed Greens"],
      },
      {
        label: "Protein Choices",
        options: ["Grilled Chicken", "Grilled Tofu", "Shrimp", "No Protein"],
      },
      {
        label: "Toppings",
        options: [
          "Cherry Tomatoes",
          "Cucumbers",
          "Avocado",
          "Red Onions",
          "Croutons",
          "Feta Cheese",
        ],
      },
      {
        label: "Sides",
        options: ["Garlic Bread", "Side of Fruit", "Chips"],
      },
      {
        label: "Sauces/Dressings",
        options: ["Vinaigrette", "Caesar", "Ranch", "Balsamic Glaze"],
      },
      {
        label: "Special Requests",
        options: [
          "Gluten-Free",
          "Vegan (with tofu, no cheese)",
          "Extra Chicken",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Margherita Pizza",
    description:
      "A classic Italian pizza featuring a thin, crispy crust topped with rich tomato sauce, fresh mozzarella cheese, and fragrant basil leaves, baked to perfection for a delightful experience.",
    image:
      "https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg",
    ingredients: ["Pizza Dough", "Tomatoes", "Mozzarella", "Basil"],
    category: "Pizza",
    customization: [
      {
        label: "Crust Options",
        options: ["Thin Crust", "Thick Crust", "Gluten-Free"],
      },
      {
        label: "Size",
        options: ["Small", "Medium", "Large"],
      },
      {
        label: "Toppings",
        options: [
          "Pepperoni",
          "Mushrooms",
          "Olives",
          "Bell Peppers",
          "Extra Cheese",
        ],
      },
      {
        label: "Sauces",
        options: ["Marinara", "Pesto", "Olive Oil"],
      },
      {
        label: "Special Requests",
        options: ["No Cheese", "Extra Sauce", "Add Spices"],
      },
    ],
  },
  {
    id: 3,
    title: "Spaghetti Carbonara",
    description:
      "A rich and creamy pasta dish made with al dente spaghetti, tossed in a velvety sauce of eggs, cheese, and crispy pancetta, finished with a sprinkle of freshly cracked black pepper for a touch of heat.",
    image:
      "https://www.allrecipes.com/thmb/a_0W8yk_LLCtH-VPqg2uLD9I5Pk=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg",
    ingredients: ["Spaghetti", "Pancetta", "Eggs", "Parmesan", "Black Pepper"],
    category: "Pasta",
    customization: [
      {
        label: "Pasta Type",
        options: ["Spaghetti", "Fettuccine", "Penne"],
      },
      {
        label: "Add-Ons",
        options: ["Grilled Chicken", "Shrimp", "Mushrooms"],
      },
      {
        label: "Cheese Options",
        options: ["Parmesan", "Pecorino", "No Cheese"],
      },
      {
        label: "Spice Level",
        options: ["Mild", "Medium", "Spicy"],
      },
      {
        label: "Special Requests",
        options: ["Gluten-Free Pasta", "Extra Sauce", "No Egg"],
      },
    ],
  },
  {
    id: 4,
    title: "Cheeseburger",
    description:
      "A mouthwatering cheeseburger featuring a juicy beef patty cooked to perfection, topped with melted cheddar cheese, crisp lettuce, and fresh tomato, all sandwiched between a toasted bun and served with a side of golden fries.",
    image:
      "https://s23209.pcdn.co/wp-content/uploads/2022/07/220602_DD_The-Best-Ever-Cheeseburger_267.jpg",
    ingredients: ["Beef Patty", "Cheddar Cheese", "Bun", "Lettuce", "Tomato"],
    category: "Burger",
    customization: [
      {
        label: "Bun Type",
        options: ["Regular", "Whole Wheat", "Gluten-Free"],
      },
      {
        label: "Protein Options",
        options: ["Beef Patty", "Turkey Patty", "Veggie Patty"],
      },
      {
        label: "Toppings",
        options: ["Lettuce", "Tomato", "Onions", "Pickles", "Bacon", "Avocado"],
      },
      {
        label: "Cheese Options",
        options: ["Cheddar", "Swiss", "American", "No Cheese"],
      },
      {
        label: "Sides",
        options: ["Fries", "Onion Rings", "Side Salad"],
      },
      {
        label: "Special Requests",
        options: ["Extra Patty", "No Onions", "Spicy Sauce"],
      },
    ],
  },
  {
    id: 5,
    title: "Grilled Salmon",
    description:
      "A perfectly grilled salmon fillet, flaky and tender, served alongside sautéed asparagus and drizzled with a zesty lemon butter sauce that elevates the dish to a whole new level of deliciousness.",
    image:
      "https://www.dinneratthezoo.com/wp-content/uploads/2019/05/grilled-salmon-final-2.jpg",
    ingredients: ["Salmon", "Asparagus", "Butter", "Lemon", "Garlic"],
    category: "Seafood",
    customization: [
      {
        label: "Cooking Style",
        options: ["Grilled", "Baked", "Pan-Seared"],
      },
      {
        label: "Sides",
        options: ["Asparagus", "Rice", "Mashed Potatoes"],
      },
      {
        label: "Sauces",
        options: ["Lemon Butter", "Garlic Sauce", "Herb Sauce"],
      },
      {
        label: "Special Requests",
        options: ["Extra Lemon", "No Butter", "Add Vegetables"],
      },
    ],
  },
  {
    id: 6,
    title: "Beef Tacos",
    description:
      "Deliciously seasoned ground beef served in soft tortillas, topped with fresh salsa, creamy guacamole, and crisp lettuce, bringing a burst of flavor and texture to every bite.",
    image:
      "https://loveandgoodstuff.com/wp-content/uploads/2020/08/classic-ground-beef-tacos-1200x1200.jpg",
    ingredients: ["Beef", "Tortillas", "Salsa", "Guacamole", "Lettuce"],
    category: "Tacos",
    customization: [
      {
        label: "Tortilla Type",
        options: ["Corn", "Flour", "Whole Wheat"],
      },
      {
        label: "Protein Choices",
        options: ["Ground Beef", "Chicken", "Vegetarian"],
      },
      {
        label: "Toppings",
        options: [
          "Lettuce",
          "Tomato",
          "Onions",
          "Cheese",
          "Sour Cream",
          "Jalapeños",
        ],
      },
      {
        label: "Sides",
        options: ["Rice", "Refried Beans", "Chips"],
      },
      {
        label: "Special Requests",
        options: ["Extra Guacamole", "No Onions", "Spicy Salsa"],
      },
    ],
  },
  {
    id: 7,
    title: "Caesar Salad",
    description:
      "A classic Caesar salad featuring crisp romaine lettuce, crunchy croutons, and a sprinkle of parmesan cheese, all tossed in a creamy Caesar dressing that adds a rich and savory flavor.",
    image:
      "https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg",
    ingredients: ["Romaine", "Croutons", "Parmesan", "Caesar Dressing"],
    category: "Salad",
    customization: [
      {
        label: "Base Options",
        options: ["Romaine Lettuce", "Mixed Greens", "Kale"],
      },
      {
        label: "Protein Choices",
        options: ["Grilled Chicken", "Shrimp", "No Protein"],
      },
      {
        label: "Toppings",
        options: ["Croutons", "Parmesan Cheese", "Bacon Bits"],
      },
      {
        label: "Dressings",
        options: ["Caesar", "Ranch", "Balsamic Vinaigrette"],
      },
      {
        label: "Special Requests",
        options: ["Gluten-Free", "Extra Dressing", "No Croutons"],
      },
    ],
  },
  {
    id: 8,
    title: "Chicken Curry",
    description:
      "A flavorful and spicy chicken curry made with tender pieces of chicken simmered in a rich and aromatic curry sauce, served with fluffy steamed rice to soak up all the delicious flavors.",
    image:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Chicken-Curry-Recipe.jpg",
    ingredients: ["Chicken", "Curry Sauce", "Rice", "Spices", "Cilantro"],
    category: "Curry",
    customization: [
      {
        label: "Spice Level",
        options: ["Mild", "Medium", "Spicy"],
      },
      {
        label: "Serving Style",
        options: ["With Rice", "With Naan", "With Roti"],
      },
      {
        label: "Add-Ons",
        options: ["Extra Chicken", "Vegetables", "Paneer"],
      },
      {
        label: "Sides",
        options: ["Raita", "Salad", "Papad"],
      },
      {
        label: "Special Requests",
        options: ["Extra Sauce", "No Cilantro", "Gluten-Free Naan"],
      },
    ],
  },
  {
    id: 9,
    title: "Vegetable Stir-Fry",
    description:
      "A vibrant mix of fresh vegetables stir-fried in a savory soy sauce, creating a colorful and healthy dish that is both satisfying and packed with nutrients.",
    image:
      "https://natashaskitchen.com/wp-content/uploads/2020/08/Vegetable-Stir-Fry-2.jpg",
    ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce", "Garlic"],
    category: "Vegetarian",
    customization: [
      {
        label: "Base Options",
        options: ["White Rice", "Brown Rice", "Quinoa"],
      },
      {
        label: "Vegetable Choices",
        options: ["Broccoli", "Carrots", "Bell Peppers", "Snow Peas"],
      },
      {
        label: "Sauces",
        options: ["Soy Sauce", "Teriyaki Sauce", "Sweet and Sour Sauce"],
      },
      {
        label: "Add-Ons",
        options: ["Tofu", "Cashews", "Sesame Seeds"],
      },
      {
        label: "Special Requests",
        options: ["Extra Sauce", "No Garlic", "Vegan"],
      },
    ],
  },
  {
    id: 10,
    title: "BBQ Ribs",
    description:
      "Tender and juicy pork ribs, slow-cooked and glazed with a smoky BBQ sauce, served with a side of coleslaw for a perfect balance of flavors and textures.",
    image:
      "https://www.southernliving.com/thmb/EUvJGe0PGPysUyWij6KmOZo7VWY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/oven-baked-baby-back-ribs-beauty-332_preview-34579f7f15ed4548ae3bb5b2048aab60.jpg",
    ingredients: ["Pork Ribs", "BBQ Sauce", "Spices", "Coleslaw"],
    category: "BBQ",
    customization: [
      {
        label: "Rib Type",
        options: ["Baby Back Ribs", "Spare Ribs"],
      },
      {
        label: "Sauce Choices",
        options: ["Sweet BBQ", "Spicy BBQ", "Honey BBQ"],
      },
      {
        label: "Sides",
        options: ["Coleslaw", "Baked Beans", "Cornbread"],
      },
      {
        label: "Special Requests",
        options: ["Extra Sauce", "No Coleslaw", "Add Pickles"],
      },
    ],
  },
  {
    id: 11,
    title: "Chicken Alfredo",
    description:
      "A creamy and decadent dish featuring fettuccine pasta tossed in a rich Alfredo sauce, topped with grilled chicken and garnished with a sprinkle of parmesan and freshly chopped garlic.",
    image:
      "https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-bowl.jpg",
    ingredients: ["Fettuccine", "Chicken", "Cream", "Parmesan", "Garlic"],
    category: "Pasta",
    customization: [
      {
        label: "Pasta Type",
        options: ["Fettuccine", "Penne", "Spaghetti"],
      },
      {
        label: "Add-Ons",
        options: ["Grilled Chicken", "Broccoli", "Mushrooms"],
      },
      {
        label: "Cheese Options",
        options: ["Parmesan", "Mozzarella", "No Cheese"],
      },
      {
        label: "Spice Level",
        options: ["Mild", "Medium", "Spicy"],
      },
      {
        label: "Special Requests",
        options: ["Extra Sauce", "No Garlic", "Gluten-Free Pasta"],
      },
    ],
  },
  {
    id: 12,
    title: "Chocolate Lava Cake",
    description:
      "A delightful dessert featuring a warm chocolate cake with a gooey molten center, served with a scoop of vanilla ice cream for a truly indulgent experience.",
    image:
      "https://www.foodandwine.com/thmb/XdFd-DvTtouryLCjeCqwhfmmK-A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/molten-chocolate-cake-FT-RECIPE0220-0a33d7d0ab0c45588f7bfe742d33a9bc.jpg",
    ingredients: ["Chocolate", "Flour", "Eggs", "Sugar", "Butter"],
    category: "Dessert",
    customization: [
      {
        label: "Serving Style",
        options: ["With Ice Cream", "With Whipped Cream", "Plain"],
      },
      {
        label: "Flavor Options",
        options: ["Dark Chocolate", "Milk Chocolate", "White Chocolate"],
      },
      {
        label: "Special Requests",
        options: ["Extra Chocolate Sauce", "No Ice Cream", "Add Berries"],
      },
    ],
  },
];
