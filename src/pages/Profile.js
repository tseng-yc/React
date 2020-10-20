import React, { useState, useEffect } from 'react';
import { Link, Redirect, Switch, useParams } from 'react-router-dom';

function profile(props) {
  const { isAuth } = props;
  if (isAuth === false) return <Redirect to="/login" />;

  return (
    <>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">帳號</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">姓名</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="button" className="btn btn-primary">
            修改
          </button>
        </form>
      </div>
    </>
  );
}

export default profile;
