import "./App.css";
import movies from "./assets/listmovies/movies.json";

function App() {
  const moviesdata = movies.map((elem) => {
    console.log(elem);
  });
  return (
    <>
      <header>
        <h1>Netflix</h1>
      </header>
      <section>
        <h2 className="title">{elem.category}</h2>
        <div className="listoffilm">{element.images}</div>
      </section>
    </>
  );
}

export default App;
