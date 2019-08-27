import {ListType} from "./ListType"
import {RecordType} from "./RecordType"

export type TreeType<V> = ListType<V> | RecordType<unknown, V>
