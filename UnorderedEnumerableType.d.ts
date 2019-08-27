import {StringObjectType} from "./StringObjectType"

export type UnorderedEnumerableType<V> = Set<V> | StringObjectType<V> | Map<unknown, V>
