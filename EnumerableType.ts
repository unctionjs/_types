import {ListType} from "./ListType"
import {RecordType} from "./RecordType"
import {TextType} from "./TextType"

export type EnumerableType<V> = ListType<V> | RecordType<unknown, V> | TextType
