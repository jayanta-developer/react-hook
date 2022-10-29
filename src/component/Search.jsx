import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StyleSearch from '../style/Search.css'

export default function Search() {
  const [term, setTerm] = useState('program')
  const [results, setResult] = useState([])


  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        }
      })
      setResult(data.query.search)
    }
    if (term && !results.length) {
      search()
    } else {
      const timeId = setTimeout(() => {
        search()
      }, 1000)

      return (() => {
        clearTimeout(timeId)
      })
    }
  }, [term])





  const rendereResult = results.map(result => {
    return (
      <div className="container" key={result.pageid}>
        <button className='btn btn-secondary'>
          <a href={`https://en.wikipedia.org/wiki/${result.title}`}>Go</a>
        </button>
        <div className="content">
          <h2 className="header">{result.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
        </div>
        <hr />
      </div>
    )
  })

  return (
    <>
      <nav className="navbar bg-light">
        <form className="container-fluid">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">Enter Search Term</span>
            <input
              className='form-control'
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
        </form>
      </nav>
      <div className="container">{rendereResult}</div>
    </>
  )
}
