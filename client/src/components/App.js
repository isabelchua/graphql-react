import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "../App.css";
import BookList from "./BookList";

const client = new ApolloClient({ uri: "http://localhost:4000/graphql" });

function App() {
	return (
		<div className="App">
			<ApolloProvider client={client}>
				<BookList />
			</ApolloProvider>
		</div>
	);
}

export default App;
