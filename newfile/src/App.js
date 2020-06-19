import React from 'react'
import './App.css'
import data from './books.json'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <div className='card'>
          {data.map((bookDetail) => <div key={data.id}>
            <h2 className='card-header'>{bookDetail.title}</h2>
            <p className='card-body'>{bookDetail.author}</p>
            <p className='card-body'>{bookDetail.shortDescription}</p>
            <img src={bookDetail.coverImageUrl} className='card-body' />
          </div>)}
        </div>
      </div>

    )
  }
}

export default App
