import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>

        <Route path="/user" element={<PrivateUserRoutes />}>
          <Route path="dashboard" element={<UserDashBoard />} />
          <Route path="cart" element={<Cart />} />
        </Route>

        <Route path="/admin" element={<AdminRoutes />}>
          <Route path="dashboard" element={<AdminDashBoard />} />
          {
            // ? Category
          }
          <Route path="create/category" element={<AddCategory />} />
          <Route path="manage/categories" element={<ManageCategories />} />
          <Route
            path="category/update/:categoryId"
            element={<UpdateCategory />}
          />
          {
            // ? Products
          }
          <Route path="create/product" element={<AddProduct />} />
          <Route path="product/update/:productId" element={<UpdateProduct />} />
          <Route path="products" element={<ManageProducts />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
