import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editName } from "./../../store/PassengerSlice";
import { ApiUrl } from "./../../config";
import { debounce } from "../../utils/Debounce";
import { useParams } from "react-router-dom";

function EditName() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const param = useParams();

  const editNameHandler = (event) => {
    setName(event.target.value);
  };

  const nameHandler = debounce(editNameHandler, 500);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      editName({
        ApiUrl,
        reqConfiq: {
          id: param.id,
          name,
        },
      })
    );
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-20rem)]">
        <div className="w-1/4 mx-12 my-4">
          <label
            className="block text-sm font-bold text-gray-700"
            htmlFor="username"
          >
            Full Name
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            onChange={nameHandler}
          />
        </div>
        <button> Save </button>
      </div>
    </form>
  );
}

export default EditName;
