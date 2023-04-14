import { useState, useEffect } from 'react'
import Select from 'react-select'
import Quote from './Quote'

const DisplayQuote = () => {

    const [quotes, setQuotes] = useState([])
    const options = [
        { value: 0, label: 'All Time' },
        { value: 1, label: 'Last Year' },
        { value: 2, label: 'Last Month' },
        { value: 3, label: 'Last Week' }
    ]

    // Fetch Quotes
    const fetchQuote = async (filtAge) => {
        const res = await fetch(`../../api/quote/?maxAge=${filtAge}`)
        const data = await res.json()

        return data
    }

    const getQuote = async (filtOp) => {
        const qServer = await fetchQuote(filtOp.value)
        setQuotes(qServer)
    }

    //for initial
    useEffect(() => {
        getQuote(options[0]);
      }, []);

  return (
    <div>
        <h2>Previous Quotes</h2>
        <div className='selectMenu'>
            <p>View Quotes From:</p>
            <Select defaultValue={{ value: 0, label: 'All Time' }} onChange={getQuote} options={options} />
        </div>
        <div className="messages">
            {quotes.map((Squote, index) => (
                <Quote key={index} quote={Squote} />
            ))}
        </div>
    </div>
  )
}

export default DisplayQuote