import React, { useEffect, useState } from "react";
export default function TableTransaction() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTransactions, setFiltered] = useState([]);
  useEffect(() => {
    const url = `http://localhost:8001/transactions`;
    fetch(url, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTransactions(data);
        setFiltered(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handleSearch = () => {
    const newFilteredTransactions = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltered(newFilteredTransactions);
  };
  return (
    <div>
      <style>
        {`
          th,
          table,td{
          border:1px solid white
          }
        `}
      </style>
      <div>
        <label>Search description:</label>
        <input
          type="text"
          placeholder="Search by description"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <table>
        <tr>
          <th>date</th>
          <th>description</th>
          <th>category</th>
          <th>amount</th>
        </tr>
        {filteredTransactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
