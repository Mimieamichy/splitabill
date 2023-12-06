import React from 'react'

export default function SplitBillForm() {
  return (
    <form className="form-split-bill">
      <h2>Split a Bill with {}</h2>
      <label htmlFor="">Bill Value</label>
      <input type="text" />
      <label htmlFor="">My Expense</label>
      <input type="text" />
      <label htmlFor="">{} Expense</label>
      <input type="text" />
      <label htmlFor="">Who is Paying</label>
      <select name="" id="">
        <option value=""></option>
        <option value="me">Me</option>
        <option value="xPayer">{}</option>
      </select>
    </form>
  )
}
