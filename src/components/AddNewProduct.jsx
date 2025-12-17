import { useAddNewProductMutation } from "../services/dummyData"

const AddNewProduct = () => {

    const [addNewProduct, {data,isError, isLoading}] = useAddNewProductMutation()
    if(isError) {
        return <p>ERROR</p>
    }
    if(isLoading) {
        return <p>LOADING...</p>
    }

    const handleAddNewProduct = async () => {
        try{
            const newProduct = {
                id: 1,
                name: 'Amazing',
                description: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
            }
            await addNewProduct(newProduct)
        }catch (error){
            console.log(error)
        }
    }
  return (
    <div> 
        <h1>{data?.id}</h1>
        <p>{data?.title}</p>
        <p>{data?.description}</p>
      <button onClick={handleAddNewProduct} disabled={isLoading}>Add New Product</button>
    </div>
  )
}

export default AddNewProduct
