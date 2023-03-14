import logo from './logo.svg';
import './App.css';

function App() {
  const productos = ["Remera", "Pantalón", "Zapatilla"]
  return (
    <div className="App">  
        <div>


            {
            productos.map((el)=>{
             <p>
              {el}
             </p>

            })
            }
          
        </div>
        </div>
  
  );
}

export default App;
