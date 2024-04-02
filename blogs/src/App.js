import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './ui/HomePage';
import Login from './ui/Login';
import Logout from './ui/Logout';
import DetailBlog from './ui/DetailBlog';
import ListAccount from './component/admin/ListAccount';
import AddBlog from './component/admin/AddBlog';
import Favorite from './ui/Favorite';
import FindBlogByTopic from './ui/FindBlogByTopic';
import ManageBlog from './component/admin/ManageBlog';
import EditBlog from './component/admin/EditBlog';
import Profile from './component/user/Profile';
import UserAddBlog from './component/user/UserAddBlog';
import SuccessPayment from './component/user/SuccessPayment';
import Product from './component/product/Product';
import Cart from './component/product/Cart';
import DetailProduct from './component/product/DetailProduct';
import PayCartFinish from './component/product/PayCartFinish';
import HistoryProduct from './component/user/HistoryProduct';
import ManageProduct from './component/admin/ManageProduct';
import AddProduct from './component/admin/AddProduct';
import EditProduct from './component/admin/EditProduct';
import ManageAccount from './component/admin/ManageAccount';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={""} element={<HomePage />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/logout"} element={<Logout />} />
          <Route path={"/detail/:id"} element={<DetailBlog />} />
          <Route path={"/list/blog"} element={<ListAccount />} />
          <Route path={"/add/blog"} element={<AddBlog />} />
          <Route path={"/findBlogByTopic"} element={<FindBlogByTopic />} />
          <Route path={"/manageBlog"} element={<ManageBlog />} />
          <Route path={"/editBlog/:id"} element={<EditBlog/>} />
          <Route path={"/favorite"} element={<Favorite/>} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/user/addBlog"} element={<UserAddBlog/>} />
          <Route path={`/payment/:id`} element={<SuccessPayment/>} />
          <Route path={`/product`} element={<Product />} />
          <Route path={'/cart'} element={<Cart/>} /> 
          <Route path={'/detailProduct/:id'} element={<DetailProduct/>} /> 
          <Route path={'/paymentCart/:id'} element={<PayCartFinish/>} />
          <Route path={'/historyProduct'} element={<HistoryProduct/>} />
          <Route path={'/manageProduct'} element={<ManageProduct/>} />
          <Route path={'/addProduct'}  element={<AddProduct/>} /> 
          <Route path={'/editProduct/:id'} element={<EditProduct/>} />
          <Route path={'/manageAccount'} element={<ManageAccount/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
