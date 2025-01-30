import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./state/store";
import { decrement, increment, reset } from "./state/counter/counterSlice";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <div className="flex flex-col items-center">
        <h1 className="text-9xl font-bold mb-4">{count}</h1>

        <div className="flex flex-col gap-1">
          <div className="flex gap-2">
            <button className="bg-green-500 text-white h-12 w-32 rounded-sm text-lg font-semibold" onClick={() => dispatch(increment())}>Increment</button>
            <button className="bg-red-500 text-white h-12 w-32 rounded-sm text-lg font-semibold" onClick={() => dispatch(decrement())}>Decrement</button>
          </div>

          <button className="bg-yellow-500 text-white h-12 w-full rounded-sm text-lg font-semibold" onClick={() => dispatch(reset())}>Reset</button>
        </div>
      </div>
    </div>
  )
};