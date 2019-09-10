import casual from 'casual'

casual.define('rating', function() {
	return { rating:Math.floor(Math.random() * 5)};
});

const mocks = {
    String: () => "It's working",
    Query: () => ({
        movie: (root,args) => {
            return {title:args.title, year:args.year, rating:args.rating}
        },
        // actors: (root,args) => {
        //     return {name:args.name, birthday: args.birthday}
        // } 
        
    }),
    Movie:()=>({title: casual.title, year: casual.year, rating:casual.rating}),
    Country: () => ({name: casual.country, code: casual.country_code}),
    Director: () => ({name: casual.name, birthday:casual.date()}),
    Actor:() =>  ({name: casual.name, birthday:casual.date()}),
}

export default mocks;