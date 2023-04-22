import React, { useState } from "react";

export default function PostTransaction() {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      date: date,
      description: description,
      category: category,
      amount: amount,
    };

    fetch(`http://localhost:8001/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error adding transaction");
        }
      })
      .then((data) => {
        console.log(data);
        setDate("");
        setDescription("");
        setCategory("");
        setAmount("");
        window.location.reload(); // refresh the table to display the new transaction
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div style={{marginBottom:"10px"}}>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
    
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
    
        <label>
          Amount:
          <input
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
  }
