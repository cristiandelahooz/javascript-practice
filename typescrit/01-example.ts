#!/usr/bin/env tsx
const add = (a: number, b: number): number => a + b
add(5, "10") // Error en tiempo de compilación

console.log(add(5, "10"))
