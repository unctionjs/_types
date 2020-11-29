import {MapperFunctionType} from "./MapperFunctionType";

export type FoldFunctionType<A, B> = (a: MapperFunctionType<A, B>) => (b: Array<B> | Set<B> | Record<string | number | symbol, B> | Map<unknown, B> | string) => B
