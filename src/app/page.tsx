'use client'
import { RootState } from "@/state/store";
import { useDispatch, useSelector } from "react-redux"

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <h1>{count}</h1>
  )
};