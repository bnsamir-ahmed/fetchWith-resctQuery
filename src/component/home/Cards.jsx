import { useState, useRef } from "react";
import { getData  , deleteData} from "../../apis/fetch";
import { useQuery } from "@tanstack/react-query";
// import DeleteCard from "./DeleteCard";
const Cards = () => {
  const { status, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getData,
  });

  const inputRef = useRef();
  const [search, setSearch] = useState("");
  const [items, setItems] = useState(6);
  const handleSearch = () => {
    setSearch(inputRef.current.value);
  };

  const filterData = data?.filter((item) =>
    item?.title?.toLowerCase().includes(search?.toLowerCase())
  );

  // const Delete = DeleteCard()
  const page = filterData?.slice(0, items);

  const handleMore = () => {
    setItems(items + 3);
  };
  if (status === "pending") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }
  const delteItems = async () =>{
    const fetch = data;
    const response = await deleteData(fetch.id);
    console.log("DELETE", data.id);
    
    return response.data;
  }

  return (
    <>
     
      <input
        className="w-full p-2 my-10 border-gray-300 rounded-md bg-slate-500"
        ref={inputRef}
        onChange={handleSearch}
        placeholder="search"
      />

      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
        {page?.map((i) => {
          return (
            <>
              <div key={i.id} className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold">{i.title}</h3>
                <p>{i.body}</p>
              </div>
            </>
          );
        })}
      </div>
      <div className="flex items-center justify-center mt-10 ">
        <button
          className="px-4 py-2 mx-3 font-bold text-white bg-blue-500 rounded-full "
          onClick={handleMore}
        >
          view more
        </button>

        <button
          className="px-4 py-2 mx-3 font-bold text-white bg-blue-500 rounded-full "
          onClick={delteItems}
        >
          Delete
        </button>
      </div>
    </>
  );
};
export default Cards;
