const typeDefinitions = `
type Movie {
    id: Int!
    title: String!
    year: String
    rating: Float
    actors:[Actor]
}

type Actor {
    id: Int!
    name: String!
    birthday: String!
    country:Country
    directors: [Director]
}

type Country {
   id: Int!
   name:String!
   code:String
}

type Director {
    id: Int!
    name: String!
    birthday: String!
    country:Country
}

type Query {
    movie(title:String,year:String,rating:Float): Movie
    actor(name:String,birthday:String): Actor
}

schema {
    query: Query
}
`

export default [typeDefinitions]