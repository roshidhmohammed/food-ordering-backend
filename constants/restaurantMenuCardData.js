const restaurantMenu = [
  {
    id:"10575",
    name:"Pizza Hut",
    ratings:"4.3",
    ratingCount:200,
    costForTwo:"₹600 for two",
    areaName:"Central Bangalore",
    cuisines:["Pizzas"],
    dishes:[

      {
        title: "Recommended",
        dishes: [
          {
            name: "Tandoori Paneer",
            rating:4,
            ratingCount:"44 ratings",
            price: 319,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/bf62afee565475fb92a204206321a41c",
          },
          {
            name: "Veggie Supreme",
            rating:4.2,
            ratingCount:"40 ratings",
            price: 379,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/z0c4xpovma1qtmu4tlls",
          },
          {
            name: "Margherita",
            rating:4.5,
            ratingCount:"50 ratings",
            price: 169,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/z0c4xpovma1qtmu4tlls",
          },
          {
            name: "Country Feast",
            rating:3.9,
            ratingCount:"44 ratings",
            price: 319,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/c3832837392378cca98e484b89c313ba",
          },
          {
            name: "Veggie Feast",
            rating:5.7,
            ratingCount:"70 ratings",
            price: 259,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/cbye9x7wxeopwqvenn7g",
          },
        ],
      },
      {
        title: "Veg Pizza",
        dishes: [
          {
            name: "Margherita Pizza",
            rating:4,
            ratingCount:"44 ratings",
            price: 169,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/0e7df98b7cffdb0b88856464014ad2ff",
          },
          {
            name: "Mazedar Makhni Paneer",
            rating:5,
            ratingCount:"50 ratings",
            price: 379,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/a89yqx09ppwlecyqterp",
          },
          {
            name: "Tandoori Paneer",
            rating:3.2,
            ratingCount:"99 ratings",
            price: 319,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/z0c4xpovma1qtmu4tlls",
          },
        ],
      },
      {
        title: "Non Veg Pizza",
        dishes: [
          {
            name: "Chicken Supreme",
            rating:4.2,
            ratingCount:"40 ratings",
            price: 409,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/dlvdmsn1uotbdn4vzvap",
          },
          {
            name: "MChicken Pepperoni",
            rating:4.8,
            ratingCount:"20 ratings",
            price: 379,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/gdz44c9hirco09bdafoq",
          },
          {
            name: "Triple Chicken Feast",
            rating:3.8,
            ratingCount:"44 ratings",
            price: 409,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/t1stinhga3alitdpr6yt",
          },
          {
            name: "Chicken Tikka",
            rating:5,
            ratingCount:"4 ratings",
            price: 379,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/bf62afee565475fb92a204206321a41c",
          },
        ],
      },
      {
        title: "Veg Pizza",
        dishes: [
          {
            name: "Margherita Pizza",
            rating:4.5,
            ratingCount:"44 ratings",
            price: 169,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/0e7df98b7cffdb0b88856464014ad2ff",
          },
          {
            name: "Mazedar Makhni Paneer",
            rating:4.9,
            ratingCount:"50 ratings",
            price: 379,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/a89yqx09ppwlecyqterp",
          },
          {
            name: "Tandoori Paneer",
            rating:3.6,
            ratingCount:"30 ratings",
            price: 319,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/z0c4xpovma1qtmu4tlls",
          },
        ],
      },
    ]
  },
  {
    id:"69876",
    name:"Subway",
    ratings:"4.3",
    ratingCount:"3.7K",
    costForTwo:"₹350 for two",
    areaName:"Vittal Mallya Road",
    cuisines:["sandwich", "Salads"],
    dishes:[

      {
        title: "Recommended",
        dishes: [
          {
            name: "Potato Chilli Cheese",
            rating:4,
            ratingCount:"44 ratings",
            price: 299,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/9/476ccea0-9c5a-4c0d-a357-286ff6b90b50_8c43ba23-5a16-4ff9-9921-34ec2b3025e5.png",
          },
          {
            name: "Cheesy Paneer Tikka",
            rating:5,
            ratingCount:"4 ratings",
            price: 349,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/23/db150a3a-6f10-4781-accc-4913a6ffebba_ead68be3-70f9-4b43-9b9d-69b854117b74.png",
          },
          {
            name: "Cheesy Mexican",
            rating:4.8,
            ratingCount:"24 ratings",
            price: 329,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/9/e911b705-4934-422f-903e-67b3ee5d9345_55ea1b8b-3482-4aaa-9614-3c988f165372.png",
          },
          {
            name: "Cheesy American BBQ",
            rating:4,
            ratingCount:"4 ratings",
            price: 329,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/9/4718095a-49f3-4187-bf43-399f691ab36e_c981dc74-f278-4d81-a1fb-a23ff33da533.png",
          },
          {
            name: "Cheesy Chicken Tikka",
            rating:4,
            ratingCount:"44 ratings",
            price: 349,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/9/4c1cdf2a-e6ac-47c7-8200-c9f85d1425dd_c0946eae-b0fd-436b-92bf-b0cecc1b5246.png",
          },
        ],
      },
      {
        title: "Salads",
        dishes: [
          {
            name: "Veggie Delite Salad",
            rating:4.8,
            ratingCount:"49 ratings",
            price: 279,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/4/2ab9a7fc-102b-48b5-9591-fd2cd10e6f2f_63c7b86f-5e7f-4eb3-a89b-87a23b3c48d5.png",
          },
          {
            name: "Aloo Patty Salad",
            rating:4,
            ratingCount:"43 ratings",
            price: 279,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/4/15ed372e-ded6-4824-a4a1-0a961516b64a_e38e8631-1884-45a5-a914-1baf93c7c96c.png",
          },
        ],
      },
      {
        title: "Beverages",
        dishes: [
          {
            name: "Coke 330ml Can",
            rating:4.6,
            ratingCount:"440 ratings",
            price: 66.67,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/210ce8741987e628d9dd4759cfdb0ed1",
          },
          {
            name: "Coke Zero 330mlCan",
            rating:4,
            ratingCount:"44 ratings",
            price: 66.67,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/a16e3b25a476d546a9b5a9a1bf0677e1",
          },
          {
            name: "Sprite 330ml Can",
            rating:4,
            ratingCount:"44 ratings",
            price: 66.67,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/354b5ce508da19027a4726fb6a4ed2ca",
          },
          {
            name: "Thums Up 330ml Can",
            rating:4,
            ratingCount:"440 ratings",
            price: 66.67,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/368728e01f525c3adf17b722eece3558",
          },
        ],
      },
      {
        title: "Cookies",
        dishes: [
          {
            name: "Oatmeal Raisin Cookie (eggless)",
            rating:4,
            ratingCount:"44 ratings",
            price: 75,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/c357b1d2938f64949638fc46078e399c",
          },
          {
            name: "Dark Chunk Chocolate Cookie (eggless)",
            rating:4.5,
            ratingCount:"48 ratings",
            price: 75,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/24a6ec5cf7494e437fb6341132e90eb5",
          },
          {
            name: "Double Dark Chunk Chocolate Cookie (eggless)",
            rating:4.7,
            ratingCount:"404 ratings",
            price: 75,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/3fd8460867feeb92ccf7d5cfd4341f3c",
          },
        ],
      },
    ]
  },
  {
    id:"810943",
    name:"Baskin Robbins - Ice Cream Desserts",
    ratings:"4.8",
    ratingCount:"121",
    costForTwo:"₹250 for two",
    areaName:"RESIDENCY ROAD",
    cuisines:["Ice Cream", "Desserts"],
    dishes:[

      {
        title: "Recommended",
        dishes: [
          {
            name: "Iranian Pista Kulfi Roll slice (80g)",
            rating:4,
            ratingCount:"44 ratings",
            price: 175,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/15/cc5f1bb5-ddc9-4bb6-8db8-07b59256a17e_da4ea6e5-3db5-4592-9579-b0258d8d3858.jpg_compressed",
          },
          {
            name: "Salted Butter Popcorn Ice Cream",
            rating:4.5,
            ratingCount:"34 ratings",
            price: 200,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/15/307dcc11-6a67-46e4-9e5a-92d195de80f4_52a1c239-9895-483b-a994-4f05365f796f.jpg_compressed",
          },
          {
            name: "Carrot Halwa Sundae",
            rating:4,
            ratingCount:"3 ratings",
            price: 400,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/04ce9294-db07-4f97-b1bd-869d67cc8404_c0296c8c-6578-4b0c-92e8-20242ae2a28d.jpg_compressed",
          },
        ],
      },
      {
        title: "Newly Launched",
        dishes: [
          {
            name: "Crunchy Honeycomb Ice Cream",
            rating:4.5,
            ratingCount:"440 ratings",
            price: 110,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/1f14ff0db808797c103097354cf3aa2f",
          },
          {
            name: "Iranian Pista Kulfi Roll (650g)",
            rating:4.9,
            ratingCount:"404 ratings",
            price: 1000,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/15/2ecc6ce4-5234-48e7-84cb-4ba99f1fd67b_85ba5836-6ff9-43d0-858b-85db7c62b56f.jpg_compressed",
          },
        ],
      },
      {
        title: "Ice Cream Rocks",
        dishes: [
          {
            name: "Hazelnut Ice Cream Rocks",
            rating:4.8,
            ratingCount:"14 ratings",
            price: 290,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/29/a3eadcb9-37db-4e62-bd3d-16b85134becc_bdaea67a-a937-480d-bdb2-77b2cc3a01f2.jpg",
          },
          {
            name: "Caramel Biscuit Ice Cream Rocks",
            rating:4.9,
            ratingCount:"24 ratings",
            price: 285,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/29/5c9917e0-229e-4b27-b3dd-5bf4dff04e33_d26ca67b-a46a-481d-aa2b-a8c11f244399.jpg",
          },
          {
            name: "Cotton Candy Ice Cream Rocks",
            rating:4,
            ratingCount:"10 ratings",
            price: 272.5,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/1/2/033a1557-d281-40c7-8d87-58569273de3f_0f7b3341-c02b-43c9-b548-602e4b644ff2.jpg",
          },
        ],
      },
    ]
  },
  {
    id:"5938",
    name:"Burger King",
    ratings:"4.4",
    ratingCount:"37K+",
    costForTwo:"₹350 for two",
    areaName:"Shivaji Nagar",
    cuisines:["Burgers", "American"],
    dishes:[

      {
        title: "Recommended",
        dishes: [
          {
            name: "Classic Family Feast for 4 - Veg",
            rating:3.6,
            ratingCount:"54 ratings",
            price: 731,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/28/9a3a28a3-dd42-4673-bd21-17703e203dab_73cc224f-2f64-4172-b7cc-804a3ae70a85.jpg",
          },
          {
            name: "Premium Family Feast for 4 - Chicken",
            rating:4.9,
            ratingCount:"99 ratings",
            price: 964,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/28/9a3a28a3-dd42-4673-bd21-17703e203dab_73cc224f-2f64-4172-b7cc-804a3ae70a85.jpg",
          },
          {
            name: "Crispy Veg Burger",
            rating:5,
            ratingCount:"100 ratings",
            price: 70,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
          },
        ],
      },
      {
        title: "Whopper",
        dishes: [
          {
            name: "Chicken Whopper with Cheese Slice",
            rating:4.9,
            ratingCount:"200 ratings",
            price: 234,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/5/28/155053a8-284d-435e-9c9d-b051b31c6197_4e6ae6e9-5bcb-4eae-a4b5-21261b252e8b.jpg",
          },
          {
            name: "Chicken Whopper Double Patty",
            rating:3.8,
            ratingCount:"20 ratings",
            price: 289,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/29/bb22a46b-b8bd-4b87-914b-605a63195a18_40b7fb61-c47d-4b4c-8dce-7c2570e5b2ba.jpg",
          },
        ],
      },
      {
        title: "Sides",
        dishes: [
          {
            name: "Fiery Hell Dip",
            rating:4.8,
            ratingCount:"44 ratings",
            price: 25,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/nsqnarjlxmzioj5zotty",
          },
          {
            name: "(4Pc) Crunchy Chicken Nuggets",
            rating:4,
            ratingCount:"60 ratings",
            price: 95,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/bc9b17fa358d5638113f40bea4b16e50",
          },
          {
            name: "Masala Hashbrown",
            rating:4.9,
            ratingCount:"14 ratings",
            price: 89,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/2b23de82-807f-4a2b-bf24-5819aeb95989_960f4062-c049-4bc2-b90b-69690014d5fe.jpg",
          },
        ],
      },
    ]
  },
  {
    id:"43836",
    name:"McDonald's",
    ratings:"4.4",
    ratingCount:"25K+",
    costForTwo:"₹400 for two",
    areaName:"Ashok Nagar",
    cuisines:["Burgers", "Beverages"],
    dishes:[

      {
        title: "Burgers & Wraps",
        dishes: [
          {
            name: "Chicken Maharaja Mac Burger",
            rating:5,
            ratingCount:"44 ratings",
            price: 265,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/21/65a88cf4-7bcd-40f6-a09d-ec38c307c5d9_8993ea5b-f8e0-4d6c-9691-7f85adee2000.png",
          },
          {
            name: "McSpicy Chicken Burger",
            rating:4,
            ratingCount:"44 ratings",
            price: 224,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/22/dcdb436c-7b9f-4667-9b73-b8fa3215d7e2_9730340a-661b-49f4-a7d9-a8a89ffe988f.png",
          },
          {
            name: "Grilled Chicken & Cheese Burger",
            rating:3.9,
            ratingCount:"120 ratings",
            price: 169,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/21/55a77d9e-cc28-4853-89c8-1ba3861f38c4_a378aafc-62b3-4328-a255-0f35f810966e.png",
          },
        ],
      },
      {
        title: "Newly Launched",
        dishes: [
          {
            name: "2 Mc Crispy Chicken Burger + Fries (L) + 2 Coke",
            rating:4.8,
            ratingCount:"50 ratings",
            price: 709,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/18/b4fda3b0-82c9-4d97-ab9c-c804b7d7893a_a14992d5-49cb-4035-827d-a43e40752840.png",
          },
          {
            name: "2 Mc Crispy Chicken Burger + 2 Fries (M) + Veg Pizza McPuff.",
            rating:4,
            ratingCount:"44 ratings",
            price: 669,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/18/921eac18-93f2-43ee-aaf3-6ba7b8d15aea_302570c8-8813-46a5-8897-569c8965d163.png",
          },
        ],
      },
      {
        title: "Fries & Sides",
        dishes: [
          {
            name: "6 Pc Chicken Nuggets",
            rating:4.8,
            ratingCount:"80 ratings",
            price: 180,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/44dc10c1099d7c366db9f5ce776878bd",
          },
          {
            name: "Fries (Large)",
            rating:4,
            ratingCount:"44 ratings",
            price: 140,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/a4b3002d0ea35bde5e5983f40e4ebfb4",
          },
        ],
      },
    ]
  },
  {
    id:"23847",
    name:"Domino's Pizza",
    ratings:"4.4",
    ratingCount:"5.9K+",
    costForTwo:"₹400 for two",
    areaName:"Brigade Road",
    cuisines:["Pizzas"],
    dishes:[

      {
        title: "Recommended",
        dishes: [
          {
            name: "Peppy Paneer Cheese Burst",
            rating:5,
            ratingCount:"64 ratings",
            price: 354,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/17/52268a6e-00c2-4a08-99b6-2ddee4f3bdd3_32c8ad06-4578-43da-9c45-e5848c1b9b43.jpg",
          },
          {
            name: "Farmhouse Cheese Burst",
            rating:4.8,
            ratingCount:"124 ratings",
            price: 344,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/17/6aef4814-ce61-484e-a7d5-7f3e5d003288_be08f225-0fb1-498f-854a-1ba936aa8d60.jpg",
          },
          {
            name: "Veggie Paradise Cheese Burst",
            rating:4.8,
            ratingCount:"14 ratings",
            price: 354,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/17/52268a6e-00c2-4a08-99b6-2ddee4f3bdd3_32c8ad06-4578-43da-9c45-e5848c1b9b43.jpg",
          },
        ],
      },
      {
        title: "Cheese Volcano",
        dishes: [
          {
            name: "Cheese Volcano Peppy Paneer",
            rating:3.8,
            ratingCount:"100 ratings",
            price: 319,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/4/a842381d-5d56-4a1e-99b8-4594170ae2c1_6d79c2a4-5aec-4067-acea-0afdfd875830.jpg",
          },
          {
            name: "Cheese Volcano Farmhouse",
            rating:4,
            ratingCount:"44 ratings",
            price: 319,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/4/a842381d-5d56-4a1e-99b8-4594170ae2c1_6d79c2a4-5aec-4067-acea-0afdfd875830.jpg",
          },
        ],
      },
      {
        title: "Party Combo",
        dishes: [
          {
            name: "Special Party for 4 (Veg) @Rs. 180 off",
            rating:4,
            ratingCount:"44 ratings",
            price: 999,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/4dfd02271e979bdcbed7737473d930c5",
          },
          {
            name: "Pizza Party for 4 (Veg) @Rs. 180 Off",
            rating:5,
            ratingCount:"2 ratings",
            price: 1039,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/31/99380be1-e010-42b9-ac5f-18eca2c4df13_8817bc9d-8a29-4e7e-ab1f-2be79a8a3441.jpg",
          },
        ],
      },
    ]
  },
  {
    id:"558773",
    name:"HRX by EatFit",
    ratings:"4.5",
    ratingCount:"693",
    costForTwo:"₹450 for two",
    areaName:"Central Bangalore",
    cuisines:["Healthy Food", "Salads"],
    dishes:[

      {
        title: "Whole Wheat Sandwiches",
        dishes: [
          {
            name: "Makhani Egg Sandwich",
            rating:4,
            ratingCount:"44 ratings",
            price: 149,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/12/23/749f3228-9b26-4605-acdd-0dab0985fa70_0d149543-6175-4212-8b1d-9165063d3e38.jpg",
          },
          {
            name: "Makhani Chaap Sandwich",
            rating:4,
            ratingCount:"44 ratings",
            price: 149,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/12/23/deb68d1d-8c3c-4812-8e45-4c1302d5232b_327f7e5d-2881-463f-84cc-944afc7e1a97.jpg",
          },
          {
            name: "VCreamy Plant Protein Sandwich",
            rating:3.7,
            ratingCount:"4 ratings",
            price: 155,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/12/23/b8783380-730a-4e1a-9c48-d8421c2d7c78_962d6196-40c2-40b2-97ff-7f2b7439d94e.jpg",
          },
        ],
      },
      {
        title: "High Protein Burgers",
        dishes: [
          {
            name: "Peri Peri Paneer PRO Burger",
            rating:4.8,
            ratingCount:"104 ratings",
            price: 349,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/31/a11f5ba6-6843-434b-bd8e-9125569e44b8_6fce9a79-da14-4953-8949-bfe8e1dc6f36.jpeg",
          },
          {
            name: "Korean Paneer PRO Burger",
            rating:3.9,
            ratingCount:"104 ratings",
            price: 249,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/9/2a6f1b85-9e83-4a30-b640-30f3730017dd_80d2202c-7ef2-4e57-a733-65fee2835d9b.jpg",
          },
        ],
      },
      {
        title: "Fruit Pop Jars",
        dishes: [
          {
            name: "Palak Khichdi Pop",
            rating:3.8,
            ratingCount:"159 ratings",
            price: 239,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/13/7ebc22f9-e339-481c-b17d-141260a82b1a_c47ceb34-b1ad-45cb-81aa-6b0651bc67a6.png_compressed",
          },
          {
            name: "Quinoa Khichdi Pop",
            rating:4.6,
            ratingCount:"155 ratings",
            price: 139,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/13/78477bb4-561f-4800-9010-4c7070494dae_03ff661d-8448-4370-a9b5-e8ec8443c1c5.png_compressed",
          },
        ],
      },
    ]
  },
  {
    id:"396748",
    name:"The Good Bowl",
    ratings:"4.3",
    ratingCount:"833",
    costForTwo:"₹400 for two",
    areaName:"Central Bangalore",
    cuisines:["Biriyani", "Pastas"],
    dishes:[

      {
        title: "Recommended",
        dishes: [
          {
            name: "Pookie Bowl Meal Combo",
            rating:4,
            ratingCount:"44 ratings",
            price: 169,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/1/28/a11250da-749f-4c62-9008-2ecddd4461f6_4f7168c6-4e91-4d21-bb76-46344bcd8fb2.jpeg",
          },
          {
            name: "Buy 2 Bowls at 299",
            rating:5,
            ratingCount:"440 ratings",
            price: 299,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/1/16/42b5f5fe-c1e6-451d-8bc2-6b14272f7b17_246a3e2d-84f1-4c15-af35-38c64ede8051.jpeg",
          },
          {
            name: "Sweet Pongal (100 gm)",
            rating:4,
            ratingCount:"44 ratings",
            price: 109,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/1/9/2f516af4-ec3e-4fe0-84c5-2e9051f914f3_b30e9f19-e621-4166-9f4b-2c079af77ae8.jpeg",
          },
        ],
      },
      {
        title: "Signature Bowls",
        dishes: [
          {
            name: "Mughlai Grilled Chicken Rice Bowl with Omelette",
            rating:4.7,
            ratingCount:"4 ratings",
            price: 359,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/2/17007d3e-265a-4e97-8f8a-7b54bc35fbda_77c51303-710a-45b5-8a8e-826b972640cd.jpeg",
          },
          {
            name: "Creamy Chicken Tikka Rice Bowl",
            rating:5,
            ratingCount:"24 ratings",
            price: 359,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/2/17007d3e-265a-4e97-8f8a-7b54bc35fbda_77c51303-710a-45b5-8a8e-826b972640cd.jpeg",
          },
        ],
      },
      {
        title: "Biryani Bowls",
        dishes: [
          {
            name: "Egg Biryani Bowl",
            rating:5,
            ratingCount:"44 ratings",
            price: 219,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/29/33e570d7-4a8a-43e7-af8c-5313389fab2c_59090ba9-3a44-45fd-bf36-8bf08098ef82.jpeg",
          },
          {
            name: "Chicken Biryani Bowl",
            rating:4,
            ratingCount:"44 ratings",
            price: 269,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/29/d3357b47-085f-4a6b-90f5-adcc2cb2ccbd_a4527648-02ea-46eb-b535-47383a01ce73.jpeg",
          },
        ],
      },
    ]
  },
  {
    id :"667962",
    name:"Paris Panini - Gourmet Sandwiches & Wraps",
    ratings:"4.6",
    ratingCount:"3.5K+",
    costForTwo:"₹500 for two",
    areaName:"Central Bangalore",
    cuisines:["Continental","Pastas"],
    dishes:[

      {
        title: "Recommended",
        dishes: [
          {
            name: "Hummus & Bell Pepper Wrap",
            rating:4.5,
            ratingCount:"44 ratings",
            price: 260,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/8c62e8edaa2c87d4cacd231b98898675",
          },
          {
            name: "Hummus & Olives Wrap",
            rating:4.8,
            ratingCount:"14 ratings",
            price: 260,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/749cf18d4c1875d3073fbea9401f4ac3",
          },
          {
            name: "Deviled Egg & Sriracha Wrap",
            rating:4.5,
            ratingCount:"24 ratings",
            price: 270,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/f64296527289d9950c1e8d1cf06c96bc",
          },
        ],
      },
      {
        title: "Veg Wraps",
        dishes: [
          {
            name: "Herbed Paneer & Bell pepper Wrap",
            rating:4.8,
            ratingCount:"20 ratings",
            price: 270,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/22/29df7724-79e5-4ab5-9e17-cd74275a21f1_a6b6ced8-d2dc-45a5-9f95-ad44a3600593.jpg",
          },
          {
            name: "Hummus & Bell Pepper Wrap",
            rating:4.6,
            ratingCount:"2 ratings",
            price: 260,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/d6363974cc024c3e9878000667bb406d",
          },
        ],
      },
      {
        title: "Non Veg Wraps ",
        dishes: [
          {
            name: "Deviled Egg & Sriracha Wrap",
            rating:3.5,
            ratingCount:"26 ratings",
            price: 270,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/d4b1462ebfe4afb4c8d02861323898f3",
          },
          {
            name: "French Dipped Chicken Wrap",
            rating:4,
            ratingCount:"44 ratings",
            price: 290,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/0d96282e7e90968cdbc4e79a7c096b5b",
          },
        ],
      },
    ]
  },
  {
    id:"739040",
    name:"Restaurant Chef Pillai",
    ratings:"4.4",
    ratingCount:"4.0K+",
    costForTwo:"₹1400 for two",
    areaName:"Whitefield",
    cuisines:["South Indian","Beverages"],
    dishes:[

      {
        title: "Recommended",
        dishes: [
          {
            name: "Pol Sambol Squids",
            rating:4,
            ratingCount:"44 ratings",
            price: 350,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/e914684c893fab2a41bba6d90b7c1569",
          },
          {
            name: "Baby Corn Okra Mango Muringa Charu",
            rating:4.5,
            ratingCount:"54 ratings",
            price: 350,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/1584ba27160201cf6932dc12e5ceb163",
          },
          {
            name: "Jaffna Crab Roast",
            rating:5,
            ratingCount:"5 ratings",
            price: 950,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/8578c38272f3f65408ea8ef6ad392a70",
          },
        ],
      },
      {
        title: "Belly Fillers Non Veg",
        dishes: [
          {
            name: "Veettile Kozhi Curry",
            rating:4,
            ratingCount:"44 ratings",
            price: 475,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/b88fa3ad798bf4ab23d1fe9a3b1c938a",
          },
          {
            name: "Chayakada Pothu Curry",
            rating:4,
            ratingCount:"44 ratings",
            price: 525,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/530d40c5302d3be6c1bc22dd5475755e",
          },
        ],
      },
      {
        title: "Breads",
        dishes: [
          {
            name: "Malabar Nool Porotta",
            rating:3.6,
            ratingCount:"34 ratings",
            price: 45,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/30869bef14886fa45a2f62dc8fa0acd3",
          },
          {
            name: "Appam",
            rating:3.9,
            ratingCount:"56 ratings",
            price: 35,
            image:
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/8e0de07e093c4104b8847d24efd03805",
          },
        ],
      },
    ]
  }
];

module.exports ={
  restaurantMenu
}
