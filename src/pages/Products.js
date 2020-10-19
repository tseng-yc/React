import React, { useState, useEffect } from 'react';
import { Link, Redirect, Switch, useParams } from 'react-router-dom';
// import { Link, Switch, withRouter } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

function Products(props) {
  const { isAuth } = props;
  let { id } = useParams();
  //使用勾子以後你的products的屬性並不會被擴充，只是讓你得到id值而已，且只能在函式型元件使用
  console.log(props);
  if (isAuth === false) return <Redirect to="/register" />;

  return (
    <>
      <h1>Products</h1>
      <Breadcrumb />
      <h3>目前會員狀態：{isAuth ? '登入' : '登出'}</h3>
      <h3>{id}</h3>
    </>
  );
}

export default Products;
// export default withRouter(Products);
