# React E-commerce Store with Redux Toolkit

This project is a front-end implementation of a simple e-commerce store built with **React** and utilizing **Redux Toolkit** for efficient state management. It showcases how to manage application state related to products, a shopping cart, and user interactions in a scalable way.

## ✨ Features

* **Product Listing:** Displays a list of available products fetched from a (mock/static/API) data source.
* **Shopping Cart:**
    * Add products to the cart.
    * View items in the cart.
    * Adjust item quantities in the cart.
    * Remove items from the cart.
    * Display cart total.
* **State Management with Redux Toolkit:**
    * Centralized store for managing products, cart state, and potentially UI state.
    * Utilizes Redux Toolkit's `createSlice` for concise reducer and action creation.
    * (`createAsyncThunk` for API calls to fetch products).
* **Component-Based Architecture:** Built with reusable React components for UI elements like product items, cart display, etc.

## 🛠️ Technologies Used

* **Frontend:**
    * React (version X.X)
    * Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
    * (React Router for navigation)
    * (Styling: CSS Modules)
* **Product Data Source:**
    * https://fakestoreapi.com/
* **Build Tools:**
    * Vite
* **Other Libraries:**
    * Axios

* *Homepage/Product Listing*
* *Shopping Cart View*
* *Product Detail Page

## 🚀 Getting Started

### Prerequisites

* Node.js (version X.X - check your `package.json` engines or specify a recent LTS version) and npm/yarn.
* (Any specific instructions if product data needs to be hosted or an external API key is needed).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/amirali-98/store-reduxtoolkit.git](https://github.com/amirali-98/store-reduxtoolkit.git)
    cd store-reduxtoolkit
    ```
2.  **Install dependencies:**
    ```bash
    # Using npm
    npm install
    # Or using yarn
    yarn install
    ```
3.  **Set up environment variables (if applicable):**
    If you are fetching data from an external API that requires an API key or has a specific base URL, create a `.env` file (e.g., `.env.local` for Create React App/Next.js, or `.env` for Vite).
    ```env
    # Example .env file content (if using an external API)
    # For Create React App/Next.js, prefix with REACT_APP_ or NEXT_PUBLIC_
    REACT_APP_API_BASE_URL="your_api_base_url"
    REACT_APP_API_KEY="your_api_key" # if needed

    # For Vite, prefix with VITE_
    VITE_API_BASE_URL="your_api_base_url"
    VITE_API_KEY="your_api_key" # if needed
    ```
    *Ensure this `.env` file is listed in your `.gitignore`.*

### Running the Application

```bash
# Using npm
npm run dev
