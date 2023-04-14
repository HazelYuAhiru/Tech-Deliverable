import "./App.css";
import DisplayQuote from "./components/DisplayQuote";
import AddQuote from "./components/AddQuote";
import Header from "./components/Header";

function App() {
	return (
		<div className="App">
			{/* TODO: include an icon for the quote book */}
			<Header />

			{/* TODO: implement custom form submission logic to not refresh the page */}
			<AddQuote />

			{/* TODO: Display the actual quotes from the database */}
			<DisplayQuote />
		</div>
	);
}

export default App;
