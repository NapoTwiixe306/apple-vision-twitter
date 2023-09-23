import './scss/App.scss';
import Header from "./views/Header";

function App() {
  return (
    <>
        <Header/>
        <div className="copyright">
            <h2><span>Maquettes Figma</span>: <a href="https://twitter.com/ln_dev7" rel="noopener noreferrer" target="_blank">Ln_Dev7</a></h2>
            <h2><span>Code</span>: <a href="https://twitter.com/JulienMl3" rel="noopener noreferrer" target="_blank">Julien_Mlnts</a></h2>
        </div>
    </>
  );
}

export default App;
