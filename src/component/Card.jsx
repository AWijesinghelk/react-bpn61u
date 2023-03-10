import React, { useState } from 'react';
import { render } from 'react-dom';

import './Card.css';

export default function Card() {
  const [rowData] = useState([
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ]);

  const [columnDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ]);

  return (
    <div className="card card-red" style={{  }}>
      <div className="wrapper">
        <div className="left">04</div>

        <div className="right">OVERDUE</div>
      </div>
    </div>
  );
}
