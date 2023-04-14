import React from 'react'

const AddQuote = () => {
  return (
    <div>
        <h2>Submit a quote</h2>
        <form action="../../api/quote" method="post">
            <label htmlFor="input-name">Name</label>
            <input type="text" name="name" id="input-name" required />
            <label htmlFor="input-message">Quote</label>
            <input type="text" name="message" id="input-message" required />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddQuote