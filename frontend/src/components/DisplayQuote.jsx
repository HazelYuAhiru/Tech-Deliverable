import { useState, useEffect } from 'react'
import Quote from './Quote'

const DisplayQuote = () => {
    const [quotes, setQuotes] = useState([])

    // Fetch Quotes
    const fetchQuote = async () => {
        const res = await fetch("../../api/quote")
        const data = await res.json()

        return data
    }

    useEffect(() => {
        const getQuote = async () => {
          const qServer = await fetchQuote()
          setQuotes(qServer)
        }
    
        getQuote()
    }, [])

  return (
    <div>
        <h2>Previous Quotes</h2>
        <div className="messages">
            {quotes.map((Squote, index) => (
                <Quote key={index} quote={Squote} />
            ))}
        </div>
    </div>
  )
}

export default DisplayQuote