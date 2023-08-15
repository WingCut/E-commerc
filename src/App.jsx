import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Basket,
  Error,
  Login,
  Account,
  Search,
  ViewProductSingle,
  ViewCategoryProductList,
} from "./views/index";
import { Navbar, Footer } from "./components/common/index";
import ProtectedRoute from "./routers/ProtectedRoute";
import PublicRoute from "./routers/PublicRoute";
import { useContext } from "react";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Protected route */}
        <Route element={<ProtectedRoute />}>
          <Route path="account" element={<Account />} />
          <Route path="basket" element={<Basket />} />
        </Route>
        {/* Public route */}
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="error" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="products/:id" element={<ViewProductSingle />} />
          <Route
            path="category/:categoryKey"
            element={<ViewCategoryProductList />}
          />
          <Route path="search/:searchKey" element={<Search />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
