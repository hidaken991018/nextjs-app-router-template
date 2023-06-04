"use client"

import { useSelector } from "react-redux"

import { RootState } from "@/libs/ReduxProvider"

/**
 * カウントを表示するコンポーネント
 */
export const ViewCount = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    return <>カウント：{count}</>
}