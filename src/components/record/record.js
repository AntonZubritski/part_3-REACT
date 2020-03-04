import React from 'react';
import './record.css';

const Record = ({data, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{data[field]}</span>
    </li>
  )
};

export default Record;
