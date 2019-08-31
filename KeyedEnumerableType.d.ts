import {RecordType} from "./RecordType";
import {OrderedEnumerableType} from "./OrderedEnumerableType";

export type KeyedEnumerableType<V, K = unknown> = RecordType<K, V> | OrderedEnumerableType<V>
