import {MapperFunctionType} from "./MapperFunctionType"
import {EnumerableType} from "./EnumerableType"

export type FoldFunctionType<A, B> = (a: MapperFunctionType<A>) => (b: EnumerableType<A>) => B
