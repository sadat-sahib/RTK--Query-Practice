import { useUpdateProductMutation } from "../services/dummyData"

const UpdateProduct = ({productId}) => {
    
    const [updateProduct, {data, error, isLoading}] = useUpdateProductMutation()
    if(error){
        <p>ERROR</p>
    }
    if(isLoading){
        <p>Loading...</p>
    }

    const handleUpdateProduct = async() => {
        try{
            const updatedProductData = {
                title: 'my product😉'
            }
            await updateProduct({
                id: productId,
                updateProduct:updatedProductData
            })
        }catch (error){
            console.log(error)
        }
    }
  return (
    <div>
        <p>{data?.title}</p>
      <button onClick={handleUpdateProduct} disabled={isLoading}>Update Product </button>
    </div>
  )
}

export default UpdateProduct
