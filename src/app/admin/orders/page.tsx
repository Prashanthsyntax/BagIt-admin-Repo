import { getOrdersWithProducts } from "@/actions/orders";
import React from "react";

const Orders = async () => {
  const ordersWithProducts = await getOrdersWithProducts();

  if (!ordersWithProducts)
    return (
      <div className="text-center font-bold text-2xl">No orders found</div>
    );

//   console.log(ordersWithProducts);

  return <div>Orders Page</div>;
};

export default Orders;
