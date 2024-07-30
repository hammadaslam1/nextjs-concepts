"use client";

import { useRouter } from "next/navigation";

const DataMap = ({ data }) => {
  const router = useRouter();
  return (
    <div>
      {data.map((product, index) => (
        <div key={index}>
          <h2>name: {product.name}</h2>
          <p>id: {product.id}</p>
          <p>age: {product.age}</p>
          <button onClick={() => router.push(`/products/${product.id}`)}>
            view
          </button>
        </div>
      ))}
    </div>
  );
};

export default DataMap;
