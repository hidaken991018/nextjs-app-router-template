"use client"
import { Button } from "@mantine/core"
import { useRouter } from "next/navigation"

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