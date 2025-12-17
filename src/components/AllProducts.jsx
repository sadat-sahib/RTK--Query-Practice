import { useGetAllProductsQuery } from "../services/dummyData";

const AllProducts = () => {
  const { data, isLoading, error } = useGetAllProductsQuery();


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <ul>
      {data.products.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
};

export default AllProducts;
