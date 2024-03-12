import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ProductPage from './components/ProductPage';
import EditPage from './components/EditPage';

function App() {
  return (
    <div className="App">
      <h1> Product Manager</h1>

      <Routes>
        <Route path="/" element={[<ProductForm />,<ProductList />]}/>
        <Route path="/products/:id" element={<ProductPage />}/>
        <Route path="/:id/edit" element={<EditPage />}/>
      </Routes>

      {/* <ProductForm />
      <ProductList /> */}

    </div>
  );
}

export default App;
