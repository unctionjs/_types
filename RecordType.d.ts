import {ObjectType} from "./ObjectType";

export type RecordType<K, V> = ObjectType<V> | Map<K, V>
