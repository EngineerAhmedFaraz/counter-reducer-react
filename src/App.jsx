import React, { useReducer } from "react";

const reducer = (state, action) => {
  // Step - 1 :
  // if (action.type == "INC") {
  //   return state + 1;
  // } else if (action.type == "ZERO") {
  //   return 0;
  // } else if (action.type == "DEC") {
  //   return state - 1;
  // } else if (action.type == "MUL") {
  //   return state * 2;
  // }

  // Step - 2 :
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "MUL":
      return state * 2;
    case "ZERO":
      return 0;
  }

  // Step - 2: Please try yourself, I can do it hurry up Mr-Nobody :P
};

// You can try with different way like a Switch() Case: Ternary Operator;

export default function App() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <div className=" h-[70px] uppercase text-5xl text-center font-bold flex justify-center items-center bg-black text-[#f96300]">
        Counter Reducer
      </div>
      <div className=" h-[585px]   flex justify-center items-center gradient-background">
        <div className="gradient-background w-[33rem] h-[22rem] bg-black flex flex-col justify-center rounded-md items-center gap-10">
          <h1 className="text-5xl font-medium text-[#f96300] ">{state}</h1>
          <div className=" flex gap-5">
            <button
              onClick={() => dispatch({ type: "INC" })}
              className="px-[2rem] py-[1rem] uppercase bg-slate-800 text-[#f96300] font-medium text-2xl border-0 outline-none rounded-md cursor-pointer ease-linear duration-500 hover:bg-blue-700"
            >
              +
            </button>
            <button
              onClick={() => dispatch({ type: "ZERO" })}
              className="px-[2rem] py-[1rem] uppercase bg-slate-800 text-[#f96300] font-medium text-2xl border-0 outline-none rounded-md cursor-pointer ease-linear duration-500 hover:bg-blue-700"
            >
              0
            </button>
            <button
              onClick={() => dispatch({ type: "DEC" })}
              className="px-[2rem] py-[1rem] uppercase bg-slate-800 text-[#f96300] font-medium text-2xl border-0 outline-none rounded-md cursor-pointer ease-linear duration-500 hover:bg-blue-700"
            >
              -
            </button>
            <button
              onClick={() => dispatch({ type: "MUL" })}
              className="px-[2rem] py-[1rem] uppercase bg-slate-800 text-[#f96300] font-medium text-2xl border-0 outline-none rounded-md cursor-pointer ease-linear duration-500 hover:bg-blue-700"
            >
              *
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
