import  { createTestClient }  from 'apollo-server-testing'

const { query, mutate } = createTestClient(server);