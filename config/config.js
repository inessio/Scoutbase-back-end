const config =  {
    environment: process.env.APP_ENV || 'production',
    port: process.env.PORT || 8090,
    url: process.env.APP_URL || 'http://localhost',
    graphQL: process.env.GRAPHQL_URL || '/graphql'
}

export default config
