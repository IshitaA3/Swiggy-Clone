# Swiggy-Clone 🍔
[![HTML](https://img.shields.io/badge/HTML-informational?style=flat&logo=html5&logoColor=white&color=orange)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=yellow)]()
[![React](https://img.shields.io/badge/React-informational?style=flat&logo=react&logoColor=white&color=blue)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-informational?style=flat&logo=tailwindcss&logoColor=white&color=skyblue)]()



## Description
A food ordering web application inspired by Swiggy, featuring menu search, live API integration for restaurant data, and cart management. 
This project is built using React, Tailwind CSS, and Redux Toolkit, providing a responsive and user-friendly experience. 🚀



## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Important Links](#important-links)
- [Footer](#footer)



## Features ✨
- **Restaurant Listing:** Displays restaurants with online food delivery in Delhi. 🍽️
- **Menu Search:** Allows users to search for dishes within a specific restaurant menu. 🔍
- **Cart Management:** Enables users to add, increment, and decrement items in their cart. 🛒
- **Veg/Non-Veg Filtering:** Filters menu items based on vegetarian or non-vegetarian preferences. 🥗🥩
- **Bestseller Highlights:** Highlights the best-selling items in a restaurant's menu. 🔥
- **Dineout Options:** Discover best restaurants on Dineout. 🥂
- **Grocery Options:** Shop Groceries on Instamart. 🛒
- **Checkout:** Secure checkout with bill details. 💰



## Tech Stack 💻
- **Frontend:**
    - React: A JavaScript library for building user interfaces. ⚛️
    - React Router: A standard library for routing in React. 🛣️
    - Redux Toolkit:  A toolset to simplify Redux development. 🧰
    - Tailwind CSS: A utility-first CSS framework for rapidly styling HTML.
    - React Icons: Include popular icons in your React projects easily with react-icons. 🖼️
- **Backend/Data:**
    - Live API Integration: Fetches restaurant data from Swiggy's API. 📡
    - Parcel: A blazing fast, zero configuration web bundler. 📦



## Installation 🛠️
1.  **Clone the repository:**

   ```bash
   git clone https://github.com/IshitaA3/Swiggy-Clone.git
   cd Swiggy-Clone
   ```

2.  **Install dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3.  **Start the development server:**

   ```bash
   parcel src/index.html
   ```

   This will start the app on `http://localhost:1234` or a similar port.



## Usage 🚀
1.  **Homepage:**

    - Displays food options, grocery options and dineout options.
    - Has links to Swiggy Corporate, Partner with us, Get the App and Sign in.
    - Has search inputs for location and restaurant/item. 

    ```jsx
    <Route path="/" element={<HomePage/>}></Route>
    ```

2.  **Restaurant Listing Page:**

    - Displays a list of restaurants in Delhi.
    - Includes an option to filter restaurants with ratings 4.0+.

    ```jsx
    <Route path="/restaurants" element={<RestaurantPage/>}> </Route>
    ```

3.  **Restaurant Menu Page:**

    - Displays the menu for a specific restaurant.
    - Allows users to filter the menu by Veg/Non-Veg.
    - Highlights Bestseller items.
    - Provides a search bar to find specific dishes.

    ```jsx
    <Route path="/city/delhi/:id" element={<RestaurantMenu/>}></Route>
    ```

4.  **Search Food:**

   - Displays search bar and search result.

    ```jsx
    <Route path="/city/delhi/:id/search" element={<SearchFood/>}></Route>
    ```

5.  **Checkout:**

    - Shows cart items and bill details.
    - Includes a secure checkout option.

    ```jsx
     <Route path="/checkout" element={<Checkout/>}></Route>
    ```



## Project Structure 📂
```
Swiggy-Clone/
├── src/
│   ├── Components/
│   │   ├── Checkout.js
│   │   ├── DineoutCard.js
│   │   ├── DineoutOption.js
│   │   ├── FoodCard.js
│   │   ├── FoodMenu.js
│   │   ├── FoodOption.js
│   │   ├── GroceryCard.js
│   │   ├── GroceryOption.js
│   │   ├── Header.js
│   │   ├── Header2.js
│   │   ├── Header3.js
│   │   ├── HomePage.js
│   │   ├── MenuCard.js
│   │   ├── RestCard.js
│   │   ├── RestaurantMenu.js
│   │   ├── RestaurantPage.js
│   │   ├── SearchCard.js
│   │   ├── SearchFood.js
│   │   ├── Shimmer.js
│   │   └── Swiggybanner.js
│   ├── GlobalStore/
│   │   ├── cartSlicer.js
│   │   └── store.js
│   ├── Utils/
│   │   ├── DineoutData.js
│   │   ├── FoodData.js
│   │   └── Grocery.js
│   ├── App.js
│   ├── index.css
│   └── index.html
├── .postcssrc
├── package.json
└── readme.md
```



## Contributing 🤝
Contributions are always welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch with a descriptive name.
3.  Make your changes and commit them with clear, concise messages.
4.  Submit a pull request to the main branch.



## License 📜
This project has no specified license. All rights are reserved unless otherwise specified.



## Important Links 🔗
- **Repository URL:** [https://github.com/IshitaA3/Swiggy-Clone](https://github.com/IshitaA3/Swiggy-Clone)



## Footer 👣
- **Project Name:** Swiggy-Clone
- **Repository URL:** [https://github.com/IshitaA3/Swiggy-Clone](https://github.com/IshitaA3/Swiggy-Clone)
- **Author:** IshitaA3
- **Contact:**
    - [GitHub](https://github.com/IshitaA3)
    - [LinkedIn](https://www.linkedin.com/in/ishitaagarwal13/)

⭐️ Feel free to fork, like, star, and raise issues! Your support is highly appreciated. 🙏