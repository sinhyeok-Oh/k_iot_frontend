import React from 'react'

// https://cdn.pixabay.com/photo/2023/12/08/05/38/cat-8436843_1280.jpg

const cat = {
  catUrl: 'https://cdn.pixabay.com/photo/',
  description: '2023/12/08/05/38/',
  imageId: 'cat-8436843_1280.jpg',
  name: 'ㅈ냥이',
  imageTheme: {
    width: '200px',
    height: '150px'
  },
  theme: {
    backgroundColor: 'black',
    color: 'white'
  }
}

function E_JSX() {
  return (
    <>
      <div style={cat.theme}>
        <p>{cat.name}'s Picture</p>
        <img 
        src={cat.catUrl + cat.description + cat.imageId}
        alt={cat.name}
        width={cat.imageTheme.width}
        height={cat.imageTheme.height}
        />
      </div>
    </>
  )
}

export default E_JSX