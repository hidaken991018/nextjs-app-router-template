"use client";
import { Button } from '@mantine/core';
interface Props {
    onClick: any;
}
export const SampleMantineButton = ({ onClick }: Props) => {
    return (
        <Button onClick={onClick}>Hello</Button>
    )
}