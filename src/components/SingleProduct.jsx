import { useGetProductByIdQuery } from "../services/dummyData";

const SingleProduct = () => {
  const { data, isLoading, isError } = useGetProductByIdQuery(2);
 

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  if (!data) return null;

  return (
    <div>
      <h2>{data.title}</h2>
      <p>Price: ${data.price}</p>
      <img src={data.thumbnail} alt={data.title} width={200} />
    </div>
  );
};

export default SingleProduct;
