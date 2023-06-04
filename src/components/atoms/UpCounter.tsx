"use client"
import { Button } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { increment } from '@/stores/counter';
export const UpCounter = () => {
    const dispatch = useDispatch();
    return (
        <Button onClick={() => dispatch(increment())}>Up</Button>
    )
}