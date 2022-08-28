export const initialState={
    counter:{
      value:0,
      status:"idle"
    },
    movies:{
      totalResults:0,
      data:[]
    },
    nominates:[]
}

export const currState={
    counter:{
      value:0,
      status:'idle'
    },
    movies:{
      totalResults:934,
      data:[
        {
          Title:"I Am Sam",
          Year:"2001",
          imdbID:"tt0277027",
          Type:"movie",
          Poster:"https://m.media-amazon.com/images/M/MV5BYzEyNzc0NjctZjJiZC00MWI1LWJlOTMtYWZkZDAzNzQ0ZDNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          Title:"Summer of Sam",
          Year:"1999",
          imdbID:"tt0162677",
          Type:"movie",
          Poster:"https://m.media-amazon.com/images/M/MV5BNjdjMDQ4ZjctYmQzNS00NjYwLWFhNTQtMGM0YmJjMmE5YmE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          Title:"Play It Again, Sam",
          Year:"1972",
          imdbID:"tt0069097",
          Type:"movie",
          Poster:"https://m.media-amazon.com/images/M/MV5BZTI2ODBiNmQtY2RmZC00Yzg3LWI4MWYtMjE4OTA0NWRmZjY0XkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_SX300.jpg"
        }
      ]
    },
    nominates:[
      {
        Title:"Summer of Sam",
        Year:"1999",
        imdbID:"tt0162677",
        Type:"movie",
        Poster:"https://m.media-amazon.com/images/M/MV5BNjdjMDQ4ZjctYmQzNS00NjYwLWFhNTQtMGM0YmJjMmE5YmE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      },
      {
        Title:"Play It Again, Sam",
        Year:"1972",
        imdbID:"tt0069097",
        Type:"movie",
        Poster:"https://m.media-amazon.com/images/M/MV5BZTI2ODBiNmQtY2RmZC00Yzg3LWI4MWYtMjE4OTA0NWRmZjY0XkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_SX300.jpg"
      }
    ]
  }

export default async function mockFetchState(keyword) {
    // if (keyword == 'sam') {
    //     return 
    // }
}