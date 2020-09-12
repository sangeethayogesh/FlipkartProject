import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import Login from './component/Login';
import Cart from './component/Cart';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './component/NavBar';
import CardDetailPage from './component/CardDetailPage';
import { StoreProvider, createStore, action, computed, thunk } from 'easy-peasy';
const productModel = {
  products: [],
  set: action((state, products) => {
    state.products = products;
  }),
};
const cartModel = {
  cartIds: [],
  addCart: action((state, payload) => {

    state.cartIds.push(payload);
  }),
};

const storeModel = {
  products: productModel,
  cart: cartModel

};
const storeData = createStore(storeModel);

function App() {
  return (
    <BrowserRouter>
      <StoreProvider store={storeData}>

        <div className="container">
          <NavBar />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/Home' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/cart' component={Cart} />
            <Route path='/carddetailpage' component={CardDetailPage} />

          </Switch>

        </div>
      </StoreProvider>

    </BrowserRouter>

  );
}

export default App;
