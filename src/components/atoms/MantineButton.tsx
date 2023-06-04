"use client";
import { Button } from '@mantine/core';

interface Props {
    onClick: () => void;
}
export const SampleMantineButton = ({ onClick }: Props) => {
    return (
        <Button onClick={onClick}>Hello</Button>
    )
}