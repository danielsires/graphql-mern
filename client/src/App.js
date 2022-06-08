import Header from "./components/Header";
import AddClientsModal from "./components/AddClientsModal";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Clients from "./components/Clients";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming
          }
        }
      }
    }
  }
})


const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: cache,
})


function App() {
  return (
    <>
      <ApolloProvider client={client}>

        <Header />
        <div className="container">
          <AddClientsModal />
          <Clients />
        </div>
      </ApolloProvider>

    </>
  );
}

export default App;
