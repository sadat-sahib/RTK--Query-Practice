

import './App.css'
import AddNewProduct from './components/AddNewProduct'
import AllProducts from './components/AllProducts'
import Counter from './components/Counter'
import DeleteProduct from './components/DeleteProduct'
import SingleProduct from './components/SingleProduct'
import UpdateProduct from './components/UpdateProduct'

function App() {


  return (
    <>
    <Counter/>
    {/* <AllProducts/> */}
    <p>------------------</p>
    <SingleProduct/>
    <p>------------------</p>
    <AddNewProduct/>
    <p>------------------</p>
    <UpdateProduct productId={4}/>
    <p>------------------</p>
    <DeleteProduct productId={5}/>
    </>
  )
}

export default App
