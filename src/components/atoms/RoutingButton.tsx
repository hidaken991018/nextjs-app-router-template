"use client"
import { useRouter } from "next/navigation"

import { Button } from "@mantine/core"

interface Props {
    to: string;
    children: React.ReactNode;
}
export const RoutingButton = ({ to, children, }: Props) => {
    const router = useRouter()
    return (
        <Button onClick={() => router.push(to)} >{children}</Button>
    )
}