# Beer E-commerce API Endpoints

## Overview

This document provides details on the backend API endpoints for the Beer E-commerce platform. These endpoints allow for retrieving stock and price information of products and are designed to support dynamic updates on the Product Detail Page (PDP).

## API Endpoints

### 1. Product Stock and Price Information

- **Endpoint:** `GET /api/stock-price/:sku`
- **Method:** `GET`
- **URL Params:**
  - **Required:**
    - `sku` : A unique identifier for the product whose stock and price information is being requested.
- **Success Response:**
  - **Code:** 200 OK
  - **Content:**
    ```json
    {
      "stock": 130,
      "price": "28.65"
    }
    ```
- **Error Response:**
  - **Code:** 404 Not Found
  - **Content:**
    ```json
    {
      "message": "Product not found"
    }
    ```
- **Description:** Retrieves the stock availability and price information for a specific product. The price is provided in dollars with two decimal places, converted from cents.

### 2. Dynamic Data Updates

- **Description:** This functionality ensures that the Product Detail Page (PDP) dynamically updates every 5 seconds to reflect the most current stock and price information. This process involves front-end logic that repeatedly calls the `/api/stock-price/:sku` endpoint to fetch the latest data.

## General Notes

- **Data Conversion:** The backend automatically converts price data from cents to a more user-friendly dollar format for display purposes.
- **Data Storage:** No modifications are made to the `products.js` file. All changes and updates are managed through the `stock-price.js` file and the respective API endpoint.

## Testing

- **Dynamic Updates Test:** Modify the `stock-price.js` file to simulate changes in product data over time, ensuring the PDP can update dynamically as required.
