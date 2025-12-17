import { useDeleteProductMutation } from "../services/dummyData"

const DeleteProduct = ({productId}) => {

    const [deleteProduct, { data, error, isLoading }] = useDeleteProductMutation();

        if(error){
        <p>ERROR</p>
    }
    if(isLoading){
        <p>Loading...</p>
    }

        const handleDeleteProduct = async() => {
        try{
            await deleteProduct(productId)
        }catch (error){
            console.log(error)
        }
    }
  return (
    <div>
        <h1>{data?.title ? `${data.title} successfully deleted`:''}</h1>
        <button onClick={handleDeleteProduct} disabled={isLoading}>Delete Product</button>
    </div>
  )
}

export default DeleteProduct
