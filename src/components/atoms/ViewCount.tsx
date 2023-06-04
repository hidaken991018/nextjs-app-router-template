"use client"

import { RootState } from "@/libs/ReduxProvider"
import { useSelector } from "react-redux"

/**
 * カウントを表示するコンポーネント
 */
export const ViewCount = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    return <>カウント：{count}</>
}