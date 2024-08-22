import { useState } from "react";
import { postData } from "../../apis/fetch";
import { useMutation } from "@tanstack/react-query";

const AddCards = () => {
  const [cardTitle, setCardTitle] = useState();
  const [cardBody, setCardBody] = useState();

  const { isLoading, isError, isSuccess, data, error, mutate } = useMutation({
    mutationFn: (newData) => {
      return postData(newData);
    },
  });

  const handleAddCard = () => {
    const items = { title: cardTitle, body: cardBody };
    mutate(items);
  };
  return (
    <>
      {isLoading ? (
        "Adding todo..."
      ) : (
        <>
          {isError ? <div>An error occurred: {error.message}</div> : null}
          {isSuccess ? (
            <div
              key={data.id}
              className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3"
            >
              <div className="p-6 bg-white rounded-lg shadow-md ">
                <h3 className="mb-4 text-xl font-bold">{cardBody}</h3>
                <p>{cardTitle}</p>
              </div>
            </div>
          ) : null}
        </>
      )}
      <div className="flex flex-col m-auto w-80">
        <input
          type="text"
          placeholder="add title"
          className="p-3 m-2 bg-slate-500"
          onChange={(e) => setCardTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="add body"
          className="p-3 m-2 bg-slate-500"
          onChange={(e) => setCardBody(e.target.value)}
        />

        <button 
        className="px-4 py-2 mx-3 font-bold text-white bg-blue-500 rounded-full"
        onClick={handleAddCard}>Create Card</button>
      </div>
    </>
  );
};
export default AddCards;
