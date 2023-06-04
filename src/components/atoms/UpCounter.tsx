"use client"
import { useDispatch } from 'react-redux';

import { Button } from '@mantine/core';

import { increment } from '@/stores/counter';

export const UpCounter = () => {
    const dispatch = useDispatch();
    return (
        <Button onClick={() => dispatch(increment())}>Up</Button>
    )
}