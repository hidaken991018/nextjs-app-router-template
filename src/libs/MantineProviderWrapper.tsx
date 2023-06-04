"use client";
import { MantineProvider } from '@mantine/core';
interface Props {
    children: React.ReactNode;
}
export const MantineProviderWrapper = ({ children }: Props) => {
    return (
        <MantineProvider>
            {children}
        </MantineProvider>
    )
}