import { useState, useEffect } from 'react'
import axios from 'axios';

const AddQuote = ({ageFilter, getQuote}) => {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        const form = new FormData();
        form.append('name', name)
        form.append('message', message)

        axios.post("/quote", form)

        setName('')
        setMessage('')

        getQuote(ageFilter)
    }


  return (
    <div>
        <h2>Submit a quote</h2>
        <form onSubmit={onSubmit}>
            <label htmlFor="input-name">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            <label htmlFor="input-message">Quote</label>
            <input type="text"  value={message} onChange={(e) => setMessage(e.target.value)} required />
            <button type="submit"> Submit</button>
        </form>
    </div>
  )
}

export default AddQuote