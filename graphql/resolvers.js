const resolvers = {
    Query: {
        movie(){
            return { id:1,title:"End Game",year:"2019",rating:5.8 }
        }
    },
   Movie: {
        actors(){
            
        }
   }

}

export default resolvers