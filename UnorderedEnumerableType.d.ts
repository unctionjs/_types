import {ObjectType} from "./ObjectType";

export type UnorderedEnumerableType<V, K = unknown> = Set<V> | ObjectType<V> | Map<K, V>
