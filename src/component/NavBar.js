import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { action, useStoreActions, useStoreState } from 'easy-peasy';
import Badge from 'react-bootstrap/Badge';
const NavBar = () => {

  const count = useStoreState(state => state.cart.cartIds.length);

  return (
    <div className="marg_bot">
      <Navbar bb="dark" expand="lg" className="nav_back">
        <Navbar.Brand href="/Home">
          <img
            src={require('../assets/images/logo.jpeg')}

            className="d-inline-block align-top img_prop"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavLink className="d-inline p-2 text-white navlink" to="/HOME">Home</NavLink>

            <NavLink className="d-inline p-2 text-white navlink" to="/login">Login</NavLink>
            <NavLink className="d-inline p-2 text-white navlink" to="/admin">Admin</NavLink>

            <NavLink className="d-inline p-2 btn_cart text-white navlink" to="/Cart"><AiOutlineShoppingCart className="fa_icon"></AiOutlineShoppingCart><Badge className="badge_cls">{count}</Badge></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )

}

export default NavBar
