// src/components/SalesList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SalesList.css';

const SalesList = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/sales`);
      setSales(res.data);
    };
    fetchSales();
  }, []);

  return (
    <div className="sales-list">
      <h2>Sales List</h2>
      <Link to="/user-dashboard/add-sale" className="btn">Add Sale</Link>
      <ul>
        {sales.map((sale) => (
          <li key={sale._id}>
            <Link to={`/user-dashboard/sales/${sale._id}`}>{sale.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SalesList;
