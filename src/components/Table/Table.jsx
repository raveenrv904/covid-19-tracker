import React from 'react';
import "./table.css";

const Table = ({ countries }) => {
    return (
        <div className="table">
            {countries.map(({ country, cases }) => {
                return (
                    <tr>
                        <td>{country}</td>
                        <td><strong>{cases}</strong></td>
                    </tr>
                )
            })}

        </div>
    )
}

export default Table;