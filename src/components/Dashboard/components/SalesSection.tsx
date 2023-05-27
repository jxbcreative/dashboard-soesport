import Link from "next/link";

const dataSales = [
    {
        name_product: "Air Force 1 Mid",
        merek: "Nike",
        size: "42",
        qty: "2",
        price: "1.200.000",
        date: "25 Mei 2023"
    },
    {
        name_product: "Air Force 1 Mid",
        merek: "Nike",
        size: "42",
        qty: "2",
        price: "1.200.000",
        date: "25 Mei 2023"
    },
    {
        name_product: "Air Force 1 Mid",
        merek: "Nike",
        size: "42",
        qty: "2",
        price: "1.200.000",
        date: "25 Mei 2023"
    },
    {
        name_product: "Air Force 1 Mid",
        merek: "Nike",
        size: "42",
        qty: "2",
        price: "1.200.000",
        date: "25 Mei 2023"
    },
    
]

const SalesSection = () => {
  return (
    <div className="mt-5 bg-white p-5 rounded-md">
      <div className="flex items-center">
        <h2 className="text-lg font-semibold">Sales</h2>
        <button className="bg-blue-500 ml-auto font-medium text-white py-2.5 px-6 rounded-full">
        <Link href={'/sales'}>
          View All
        </Link>
        </button>
      </div>
      <table className="w-full mt-5">
        <thead className="text-left text-sm capitalize bg-blue-500 text-white">
          <tr>
            <th scope="col" className="py-4 px-3 font-medium">No</th>
            <th scope="col" className="py-4 px-3 font-medium">Product</th>
            <th scope="col" className="py-4 px-3 font-medium">Merek</th>
            <th scope="col" className="py-4 px-3 font-medium">Size</th>
            <th scope="col" className="py-4 px-3 font-medium">Qty</th>
            <th scope="col" className="py-4 px-3 font-medium">Price</th>
            <th scope="col" className="py-4 px-3 font-medium">Date</th>
          </tr>
        </thead>
        <tbody>
            {
                dataSales.map((val, index) => (
                <tr key={index} className={`${index%2 === 1 ?"bg-blue-100" : "bg-white"} rounded-xl text-left`}>
                <td className="py-4 px-3 text-[13px] ">
                    {index + 1}
                </td>
                <td className="py-4 px-3 text-[13px] ">
                    {val.name_product}
                </td>
                <td className="py-4 px-3 text-[13px]">
                    {val.merek}
                </td>
                <td className="py-4 px-3 text-[13px]">
                    {val.size}
                </td>
                <td className="py-4 px-3 text-[13px]">
                    {val.qty}
                </td>
                <td className="py-4 px-3 text-[13px]">
                    Rp {val.price}
                </td>
                <td className="py-4 px-3 text-[13px]">
                    {val.date}
                </td>
            </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  );
};

export default SalesSection;
