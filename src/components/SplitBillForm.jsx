import React from "react";
import Button from "./Button";

export default function SplitBillForm({ handleSplit, selected }) {
  const [bill, setBill] = React.useState("");
  const [myBill, setMybill] = React.useState("");
  const [payer, setPayer] = React.useState("me");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!bill || !myBill) return;
    handleSplit(payer === "me" ? xBill : -myBill)
  };
  const xBill = bill ? bill - myBill : "";

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a Bill with {selected.name}</h2>
      <label htmlFor="">Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(event) => setBill(Number(event.target.value))}
      />
      <label htmlFor="">My Expense</label>
      <input
        type="text"
        value={myBill}
        onChange={(event) =>
          setMybill(
            Number(event.target.value) > bill
              ? myBill
              : Number(event.target.value)
          )
        }
      />
      <label htmlFor="">{selected.name} Expense</label>
      <input type="text" disabled value={xBill} />
      <label htmlFor="">Who is Paying</label>
      <select
        name="payer"
        id="payer"
        value={payer}
        onChange={(event) => setPayer(event.target.value)}
      >
        <option value="me">Me</option>
        <option value="xPayer">{selected.name}</option>
      </select>
      <Button>Add...</Button>
    </form>
  );
}
