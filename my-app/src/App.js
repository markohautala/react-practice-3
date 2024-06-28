import css from './App.module.css';  // Import the CSS file
import Sidebar from "./components/Sidebar"; // Import the Sidebar component
import NavBarSimple from "./components/NavBarSimple"; // Import the NavBarSimple component

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Sidebar />
      <br />
      <NavBarSimple />
    </div>
  );
}

export default App;