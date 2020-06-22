import React from 'react'
import './App.css'
import data from './books.json'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.toggleContent = this.toggleContent.bind(this)
    this.state = {
      showContent: false
    }
  }

  toggleContent (event) {
    event.preventDefault()
    this.setState({
      showContent: false
    })
  }

  render () {
    const { showContent } = this.state
    return (
      <div className='App'>
        {data.map((bookDetail, index) => <div key={data.id} className='container'>
          <div className='content'>
            <div className='contentBox'>
              <div>
                <h1 className='title'>{bookDetail.title}</h1>
                <p className='author'>{bookDetail.author}</p>
                <p className='description'>{bookDetail.shortDescription}</p>
                <div className='dropdownBox'>
                  {showContent === true ? <p>{bookDetail.dropdownBox}</p> : ''}
                  <button handleclick={this.toggleContent}>More Information</button>
                  <button handleclick={this.onhandleRemoveContentButton}>Less Information</button>
                  <p className='container_text'> <strong>URL: </strong>{bookDetail.url}</p>
                  <p className='container_text'><strong>Publisher: </strong>{bookDetail.publisher}</p>
                  <p className='container_text'><strong>Publication Date: </strong>{bookDetail.publicationDate}</p>
                  <p className='container_text'><strong>Full Description: </strong>{bookDetail.detailedDescription}</p>
                </div>
              </div>
              <img src={bookDetail.coverImageUrl} className='container_image' />
            </div>

          </div>

        </div>)}
      </div>
    )
  }
}

export default App
