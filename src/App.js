
import './App.css';
import CenterPage from './components/CenterPage';
import NavBar from './components/NavBar';
import SideDisplay from './components/SideDisplay';

function App() {
  return (
    <div className="App">
      <NavBar />
      <section className='sideContainer'>
        <SideDisplay/>
        <main>
          <CenterPage />
        </main>
      </section>
      
    </div>
  );
}

export default App;
