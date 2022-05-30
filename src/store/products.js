export const initialState = {
    categories: [
      {
        name: "Electronics",
        description: "Modern and Styled electronics",
      },
      {
        name: "Phones",
        description: "Discover the last released mobiles",
      },
    ],
    products: [
      {
        name: "Apple MacBook",
        description: "MacBook Air 13.3'' ",
        category: "Electronics",
        price: 500,
        inventoryCount: 40,
        img: "https://www.macworld.co.uk/cmsdata/features/3685961/macbook_air_2019_review_9_thumb900_1-1.jpg",
      },
      {
        name: "PS5",
        description: "Limited Edition",
        category: "Electronics",
        price: 950,
        inventoryCount: 13,
        img: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/ps5_render_1_5.jpg",
      },
      {
        name: "IPhone 13 Pro Max",
        description: "Limited Edition",
        category: "Phones",
        price: 1250,
        inventoryCount: 100,
        img: "https://phoneslab.net/oman/wp-content/uploads/sites/10/2021/09/max4-600x600.jpg",
      },
      {
        name: "Samsung Galaxy Note 10 ",
        description: "White ",
        category: "Phones",
        price: 1000,
        inventoryCount: 80,
        img: "https://images.firstpost.com/fpimages/1200x800/fixed/jpg/2020/01/samsung-galaxy-note10-lite.jpg",
      },
    ],
    activeCategory: null,
  };