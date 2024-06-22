import css from './App.module.css';  // Import the CSS file
import Sidebar from "./components/Sidebar"; // Import the Sidebar component

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Sidebar />
    </div>
  );
}

export default App;