import {ListType} from "./ListType";
import {RecordType} from "./RecordType";
import {TextType} from "./TextType";

export type EnumerableType<V, K = unknown> = ListType<V> | RecordType<K, V> | TextType
