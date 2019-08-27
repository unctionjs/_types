import {StringObjectType} from "./StringObjectType"

export type RecordType<K, V> = StringObjectType<V> | Map<K, V>
