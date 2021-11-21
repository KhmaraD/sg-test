import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <main>
                    <AppRouter />
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
