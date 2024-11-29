searchState.loadedDescShard("indexmap", 0, "<code>IndexMap</code> is a hash table where the iteration order of the …\nKey equivalence trait.\nHash value newtype. Not larger than usize, since anything …\nCompare self to <code>key</code> and return <code>true</code> if they are equal.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate an <code>IndexMap</code> from a list of key-value pairs\nCreate an <code>IndexSet</code> from a list of values\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\n<code>IndexMap</code> is a hash table where the iteration order of the …\nFunctions to serialize and deserialize an <code>IndexMap</code> as an …\nA hash set implemented using <code>IndexMap</code>\nKey equivalence trait.\nCompare self to <code>key</code> and return <code>true</code> if they are equal.\nA draining iterator over the entries of a <code>IndexMap</code>.\nEntry for an existing key-value pair or a vacant location …\nA hash table where the iteration order of the key-value …\nAn owning iterator over the entries of a <code>IndexMap</code>.\nAn owning iterator over the keys of a <code>IndexMap</code>.\nAn owning iterator over the values of a <code>IndexMap</code>.\nAn iterator over the entries of a <code>IndexMap</code>.\nA mutable iterator over the entries of a <code>IndexMap</code>.\nAn iterator over the keys of a <code>IndexMap</code>.\nOpt-in mutable access to keys.\nExisting slot with equivalent key.\nA view into an occupied entry in a <code>IndexMap</code>. It is part of …\nVacant slot (no equivalent key in the map).\nA view into a vacant entry in a <code>IndexMap</code>. It is part of …\nAn iterator over the values of a <code>IndexMap</code>.\nA mutable iterator over the values of a <code>IndexMap</code>.\nThis method is not useful in itself – it is there to …\nComputes in <strong>O(1)</strong> time.\nRemove all key-value pairs in the map, while preserving …\nReturn <code>true</code> if an equivalent to <code>key</code> exists in the map.\nThis is the core implementation that doesn’t depend on …\nReturn an empty <code>IndexMap</code>\nClears the <code>IndexMap</code> in the given index range, returning …\nGet the given key’s corresponding entry in the map for …\nExtend the map with all key-value pairs in the iterable.\nExtend the map with all key-value pairs in the iterable.\nGet the first key-value pair\nGet the first key-value pair, with mutable access to the …\nReturns the argument unchanged.\nExamples\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate an <code>IndexMap</code> from the sequence of key-value pairs in …\nReturn a reference to the value stored for <code>key</code>, if it is …\nReturn item index, key and value\nReturn item index, mutable reference to key and value\nGet a key-value pair by index\nGet a key-value pair by index\nReturn item index, if it exists in the map\nReturn references to the key-value pair stored for <code>key</code>, if …\nReturn a reference to the map’s <code>BuildHasher</code>.\nReturns a reference to the value corresponding to the …\nReturns a reference to the value at the supplied <code>index</code>.\nReturns a mutable reference to the value corresponding to …\nReturns a mutable reference to the value at the supplied …\nInsert a key-value pair in the map.\nInsert a key-value pair in the map, and get their index.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturn an owning iterator over the keys of the map, in …\nReturn an owning iterator over the values of the map, in …\nReturns true if the map contains no elements.\nReturn an iterator over the key-value pairs of the map, in …\nReturn an iterator over the key-value pairs of the map, in …\nReturn an iterator over the keys of the map, in their order\nGet the last key-value pair\nGet the last key-value pair, with mutable access to the …\nReturn the number of key-value pairs in the map.\nMoves the position of a key-value pair from one index to …\nCreate a new map. (Does not allocate.)\nRemove the last key-value pair\nRemove the key-value pair equivalent to <code>key</code> and return its …\nRemove and return the key-value pair equivalent to <code>key</code>.\nReserve capacity for <code>additional</code> more key-value pairs.\nScan through each key-value pair in the map and keep those …\nScan through each key-value pair in the map and keep those …\nReverses the order of the map’s key-value pairs in place.\nRemove the key-value pair equivalent to <code>key</code> and return its …\nRemove and return the key-value pair equivalent to <code>key</code>.\nRemove the key-value pair equivalent to <code>key</code> and return it …\nRemove the key-value pair by index\nShrink the capacity of the map with a lower limit.\nShrink the capacity of the map as much as possible.\nSort the map’s key-value pairs in place using the …\nSort the map’s key-value pairs by the default ordering …\nSort the map’s key-value pairs in place using the …\nSort the map’s key-value pairs by the default ordering …\nSort the key-value pairs of the map and return a by-value …\nSort the key-value pairs of the map and return a by-value …\nSplits the collection into two at the given index.\nSwaps the position of two key-value pairs in the map.\nRemove the key-value pair equivalent to <code>key</code> and return its …\nRemove and return the key-value pair equivalent to <code>key</code>.\nRemove the key-value pair equivalent to <code>key</code> and return it …\nRemove the key-value pair by index\nShortens the map, keeping the first <code>len</code> elements and …\nReturn an iterator over the values of the map, in their …\nReturn an iterator over mutable references to the values …\nCreate a new map with capacity for <code>n</code> key-value pairs. …\nCreate a new map with capacity for <code>n</code> key-value pairs. …\nCreate a new map with <code>hash_builder</code>.\nEntry for an existing key-value pair or a vacant location …\nCore of the map that does not depend on S\nExisting slot with equivalent key.\nVacant slot (no equivalent key in the map).\nA view into a vacant entry in a <code>IndexMap</code>. It is part of …\nModifies the entry if it is occupied.\nDecrement all indices in the range <code>start..end</code>.\nentries is a dense vec of entries in their order.\nErase <code>start..end</code> from <code>indices</code>, and shift <code>end..</code> indices …\nSweep the whole table to erase indices start..end\nReturn the raw bucket for the given index\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturn the index in <code>entries</code> where an equivalent key can be …\nIncrement all indices in the range <code>start..end</code>.\nReturn the index where the key-value pair exists or will …\nReturn the index where the key-value pair will be inserted.\nindices mapping from the entry hash to its index.\nInserts the entry’s key and the given value into the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTakes ownership of the key, leaving the entry vacant.\nGets a reference to the entry’s key, either within the …\nGets a reference to the key that was used to find the …\nInserts a default-constructed value in the entry if it is …\nInserts the given default value in the entry if it is …\nInserts the result of the <code>call</code> function in the entry if it …\nInserts the result of the <code>call</code> function with a reference …\nRemove the last key-value pair\nAppend a key-value pair, <em>without</em> checking whether it …\nThis module encapsulates the <code>unsafe</code> access to …\nReserve capacity for <code>additional</code> more key-value pairs.\nReserve entries capacity to match the indices\nRemove an entry by shifting all entries that follow it\nRemove an entry by shifting all entries that follow it\nRemove an entry by shifting all entries that follow it\nShrink the capacity of the map with a lower bound\nFinish removing an entry by swapping it with the last\nRemove an entry by swapping it with the last\nRemove an entry by swapping it with the last\nA view into an occupied entry in a <code>IndexMap</code>. It is part of …\nReturns the argument unchanged.\nReturns the argument unchanged.\nGets a reference to the entry’s value in the map.\nGets a mutable reference to the entry’s value in the map.\nReturn the index of the key-value pair\nSets the value of the entry to <code>value</code>, and returns the entry…\nInserts many entries into a raw table without reallocating.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts into a mutable reference to the entry’s value …\nGets a reference to the entry’s key in the map.\nRemove the key, value pair stored in the map for this …\nRemove and return the key, value pair stored in the map …\nPut the new key in the occupied entry’s key slot\nRemove the key, value pair stored in the map for this …\nRemove and return the key, value pair stored in the map …\nRemove the key, value pair stored in the map for this …\nRemove and return the key, value pair stored in the map …\nOpt-in mutable access to keys.\nThis method is not useful in itself – it is there to …\nReturns the argument unchanged.\nReturn item index, mutable reference to key and value\nCalls <code>U::from(self)</code>.\nScan through each key-value pair in the map and keep those …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nVisitor to deserialize a <em>sequenced</em> <code>IndexMap</code>\nDeserializes an <code>IndexMap</code> from an ordered sequence.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nSerializes an <code>IndexMap</code> as an ordered sequence.\nA lazy iterator producing elements in the difference of …\nA draining iterator over the items of a <code>IndexSet</code>.\nA hash set where the iteration order of the values is …\nA lazy iterator producing elements in the intersection of …\nAn owning iterator over the items of a <code>IndexSet</code>.\nAn iterator over the items of a <code>IndexSet</code>.\nA lazy iterator producing elements in the symmetric …\nA lazy iterator producing elements in the union of <code>IndexSet</code>…\nReturns the set intersection, cloned into a new set.\nReturns the set union, cloned into a new set.\nReturns the set symmetric-difference, cloned into a new …\nComputes in <strong>O(1)</strong> time.\nRemove all elements in the set, while preserving its …\nReturn <code>true</code> if an equivalent to <code>value</code> exists in the set.\nReturn an empty <code>IndexSet</code>\nReturn an iterator over the values that are in <code>self</code> but …\nClears the <code>IndexSet</code> in the given index range, returning …\nGet the first value\nReturns the argument unchanged.\nExamples\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturn a reference to the value stored in the set, if it …\nReturn item index and value\nGet a value by index\nReturn item index, if it exists in the set\nReturn a reference to the set’s <code>BuildHasher</code>.\nReturns a reference to the value at the supplied <code>index</code>.\nInsert the value into the set.\nInsert the value into the set, and get its index.\nReturn an iterator over the values that are in both <code>self</code> …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if <code>self</code> has no elements in common with <code>other</code>.\nReturns true if the set contains no elements.\nReturns <code>true</code> if all elements of <code>self</code> are contained in <code>other</code>…\nReturns <code>true</code> if all elements of <code>other</code> are contained in <code>self</code>…\nReturn an iterator over the values of the set, in their …\nGet the last value\nReturn the number of elements in the set.\nMoves the position of a value from one index to another by …\nCreate a new set. (Does not allocate.)\nRemove the last value\nRemove the value from the set, and return <code>true</code> if it was …\nAdds a value to the set, replacing the existing value, if …\nAdds a value to the set, replacing the existing value, if …\nReserve capacity for <code>additional</code> more values.\nScan through each value in the set and keep those where the\nReverses the order of the set’s values in place.\nRemove the value from the set, and return <code>true</code> if it was …\nRemove the value from the set return it and the index it …\nRemove the value by index\nRemoves and returns the value in the set, if any, that is …\nShrink the capacity of the set with a lower limit.\nShrink the capacity of the set as much as possible.\nSort the set’s values by their default ordering.\nSort the set’s values in place using the comparison …\nSort the set’s values by their default ordering.\nSort the set’s values in place using the comparison …\nSort the values of the set and return a by-value iterator …\nSort the values of the set and return a by-value iterator …\nSplits the collection into two at the given index.\nReturns the set difference, cloned into a new set.\nSwaps the position of two values in the set.\nRemove the value from the set, and return <code>true</code> if it was …\nRemove the value from the set return it and the index it …\nRemove the value by index\nRemoves and returns the value in the set, if any, that is …\nReturn an iterator over the values that are in <code>self</code> or …\nRemoves and returns the value in the set, if any, that is …\nShortens the set, keeping the first <code>len</code> elements and …\nReturn an iterator over all values that are in <code>self</code> or …\nCreate a new set with capacity for <code>n</code> elements. (Does not …\nCreate a new set with capacity for <code>n</code> elements. (Does not …\nCreate a new set with <code>hash_builder</code>.")