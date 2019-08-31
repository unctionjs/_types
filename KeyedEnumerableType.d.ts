import {RecordType} from "./RecordType";
import {OrderedEnumerableType} from "./OrderedEnumerableType";

export type KeyedEnumerableType<V> = RecordType<unknown, V> | OrderedEnumerableType<V>
