import { useState } from "react";
import { putData } from "../../apis/fetch";
import { useMutation } from "@tanstack/react-query";

const AddCards = () => {
  const [cardTitle, setCardTitle] = useState();
  const [cardBody, setCardBody] = useState();
  const [Id, setId] = useState();

  const { isLoading, isError, isSuccess, data, error, mutate } = useMutation({
    mutationFn: (newData) => {
      return putData(newData);
    },
  });

  const handleAddCard = () => {
    const items = {id:Id , title: cardTitle, body: cardBody };
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
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold">{cardBody}</h3>
                <p>{cardTitle}</p>
              </div>
            </div>
          ) : null}
          <input
            type="text"
            className="m-3 bg-slate-500"
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="text"
            className="m-3 bg-slate-500"
            onChange={(e) => setCardBody(e.target.value)}
          />
          <input
            type="text"
            className="m-3 bg-slate-500"
            onChange={(e) => setCardTitle(e.target.value)}
          />
          <button onClick={handleAddCard}>Create Todo</button>
        </>
      )}
    </>
  );
};
export default AddCards;
