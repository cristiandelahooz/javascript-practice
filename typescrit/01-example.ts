#!/usr/bin/env tsx
const add = (a: number, b: number): number => a + b

console.log(add(5, 10))

export function numberToString(num: number): string{
    return num.toString()
}

console.log(numberToString(5));
