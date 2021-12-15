import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Home from "./pages/Home/index.jsx";

function App() {
  const name = "Feisbrut";
  const nav= [
    {link:"/", label: "Home"},
    {link:"/Friends", label: "Friends"},
    {link:"/Messages", label: "Messages"},
];

  return (
    <div>
      <Header name={name} links={nav} />
      <Home />
      <Footer />
      
    </div>
  );
}

export default App;
