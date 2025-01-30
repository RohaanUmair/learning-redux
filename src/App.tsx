import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./state/store";
import { decrement, increment, incrementByAmount, reset, setNumberAsync } from "./state/counter/counterSlice";
import { useState } from "react";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const loading = useSelector((state: RootState) => state.counter.loading);
  const dispatch = useDispatch<AppDispatch>();

  const [incrementBy, setIncrementBy] = useState<number>(10);

  const [num, setNum] = useState<number>(0);

  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">

      <div className="h-40 w-56 flex items-center justify-center">
        {
          loading ? (
            <div className="flex justify-center items-center">
              <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
            </div>
          ) : (
            <h1 className="text-9xl font-bold mb-4">{count}</h1>
          )
        }
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex gap-2">
          <button className="bg-green-500 text-white h-12 w-32 rounded-sm text-lg font-semibold hover:bg-green-400 active:bg-green-300" onClick={() => dispatch(increment())}>Increment</button>
          <button className="bg-red-500 text-white h-12 w-32 rounded-sm text-lg font-semibold hover:bg-red-400 active:bg-red-300" onClick={() => dispatch(decrement())}>Decrement</button>
        </div>

        <button className="bg-yellow-500 text-white h-12 w-full rounded-sm text-lg font-semibold hover:bg-yellow-400 active:bg-yellow-300" onClick={() => dispatch(reset())}>Reset</button>

        <div className="flex">
          <input
            type="number"
            value={incrementBy}
            onChange={(e) => setIncrementBy(parseInt(e.target.value))}
            className="outline-none border border-blue-500 px-2 w-44 rounded-l-sm font-semibold text-lg"
          />
          <button className="bg-blue-500 text-white h-12 w-full rounded-r-sm text-lg font-semibold hover:bg-blue-400 active:bg-blue-300" onClick={() => dispatch(incrementByAmount(incrementBy))}>Add {incrementBy}</button>
        </div>

        <div className="flex">
          <input
            type="number"
            value={num}
            onChange={(e) => setNum(parseInt(e.target.value))}
            className="outline-none border border-purple-500 px-2 w-44 rounded-l-sm font-semibold text-lg"
          />
          <button className="bg-purple-500 text-white h-12 w-full rounded-r-sm text-lg font-semibold hover:bg-purple-400 active:bg-purple-300" onClick={() => dispatch(setNumberAsync(num))}>Set Num</button>
        </div>
      </div>
    </div>
  )
};