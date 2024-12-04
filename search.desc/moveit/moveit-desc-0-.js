searchState.loadedDescShard("moveit", 0, "A library for safe, in-place construction of Rust (and …\nA type which has the ability to create heap storage space …\nSupport for the <code>alloc</code> crate, when available.\nAllocates heap space for this type in C++ and return a …\nSupport for <code>cxx</code> types.\nDrop flags.\nFrees a C++ allocation which has not yet had a constructor …\nMove references.\nPerforms an emplacement operation.\nIn-place constructors.\nExplicit stack slots, which can be used for stack …\nConstructs a new <code>Slot</code>.\nA type which has the ability to create heap storage space …\nAllocates heap space for this type in C++ and return a …\nFrees a C++ allocation which has not yet had a constructor …\nA drop flag, for tracking successful destruction.\nA wrapper for managing when a value gets dropped via a …\nA <code>DropFlag</code> source that doesn’t do anything with it.\nAn RAII trap that ensures a drop flag is correctly cleared.\nSplits this slot into a reference to the wrapped value …\nSplits this slot into a reference to the wrapped value …\nPreemptively checks that this flag has been cleared.\nDecrements the internal counter and returns true if it …\nGets a reference to the drop flag.\nReturns a reference to the <code>DropFlag</code>.\nReturns a reference to the <code>DropFlag</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nIncrements the internal counter.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns whether the internal counter is zero.\nLengthens the lifetime of <code>self</code>.\nWraps a new value to have its drop state managed by a …\nCreates a new trap with a dead flag.\nCreates a new dead flag.\nA trait for getting a pinned <code>MoveRef</code> for some pointer type …\nMoving dereference operations.\nA <code>MoveRef&lt;&#39;a, T&gt;</code> represents an owned <code>T</code> whose storage …\nThe “pure storage” form of <code>Self</code>, which owns the …\nGets a pinned <code>MoveRef</code> out of <code>Self</code>.\nReturns this <code>MoveRef&lt;T&gt;</code> as a raw mutable pointer, without …\nReturns this <code>MoveRef&lt;T&gt;</code> as a raw pointer, without creating …\nConsumes <code>self</code>, blindly casting the inner pointer to <code>U</code>.\nMoves out of <code>self</code>, producing a <code>MoveRef</code> that owns its …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nConsume the <code>MoveRef&lt;T&gt;</code>, returning the wrapped value.\nConverts a <code>MoveRef&lt;T&gt;</code> into a <code>Pin&lt;MoveRef&lt;T&gt;&gt;</code>.\nCreates a new <code>MoveRef&lt;T&gt;</code> out of a mutable reference.\nA copy constructible type: a destination-aware <code>Clone</code>.\nA pointer type that may be “emplaced” as a stable …\nThe error the construction operation may return.\nA move constructible type: a destination-aware <code>Clone</code> that …\nAn in-place constructor for a particular type.\nThe type to construct.\nThe type to construct.\nThe stable address type within which a value of type <code>T</code> is …\nA swappable type, which is able to efficiently swap the …\nAn in-place constructor for a particular type, which can …\nReturns a <code>New</code> that uses the provided closure for …\nReturns a <code>New</code> that uses the provided closure for …\nReturns a new <code>New</code> that uses a copy constructor.\nCopy-construct <code>src</code> into <code>this</code>, effectively re-pinning it at …\nReturns a <code>New</code> calls <code>Default</code> to generate a <code>T</code>.\nConstructs a new smart pointer and emplaces <code>n</code> into its …\nReturns a <code>New</code> that uses a <code>From</code> implementation to generate …\nTrivial impls for <code>std</code> types.\nReturns a <code>New</code> that forwards to <code>MoveNew</code>.\nMove-construct <code>src</code> into <code>this</code>, effectively re-pinning it at …\nConstruct a new value using the arguments stored in <code>self</code>.\nReturns a <code>New</code> that simply returns the given value.\nSwaps the contents of <code>self</code> and <code>src</code> without running any …\nReturns a <code>TryNew</code> that uses the provided closure for …\nReturns a <code>TryNew</code> that uses the provided closure for …\nConstructs a new smart pointer and tries to emplace <code>n</code> into …\nReturns a <code>TryNew</code> that uses a <code>TryFrom</code> implementation to …\nTry to construct a new value using the arguments stored in …\nAdds a post-construction operation.\nAdds a post-construction operation.\nA copy constructible type: a destination-aware <code>Clone</code>.\nReturns a new <code>New</code> that uses a copy constructor.\nCopy-construct <code>src</code> into <code>this</code>, effectively re-pinning it at …\nReturns a <code>New</code> that uses the provided closure for …\nReturns a <code>New</code> that uses the provided closure for …\nReturns a <code>New</code> calls <code>Default</code> to generate a <code>T</code>.\nReturns a <code>New</code> that uses a <code>From</code> implementation to generate …\nReturns a <code>New</code> that simply returns the given value.\nReturns a <code>TryNew</code> that uses the provided closure for …\nReturns a <code>TryNew</code> that uses the provided closure for …\nReturns a <code>TryNew</code> that uses a <code>TryFrom</code> implementation to …\nA move constructible type: a destination-aware <code>Clone</code> that …\nReturns a <code>New</code> that forwards to <code>MoveNew</code>.\nMove-construct <code>src</code> into <code>this</code>, effectively re-pinning it at …\nSimilar to a <code>Slot</code>, but able to drop its contents.\nAn empty slot on the stack into which a value could be …\nConverts this <code>Slot</code> from being a slot for a <code>T</code> to being a …\nEmplace <code>new</code> into this slot, returning a new, pinned <code>MoveRef</code>…\nEmplace <code>new</code> into this slot, returning a reference to it.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts this into a slot for a pinned <code>T</code>.\nConverts this into a slot for an unpinned <code>T</code>.\nCreates a new <code>Slot</code> with the given pointer as its basis.\nCreates a new <code>DroppingSlot</code> with the given pointer as its …\nPin <code>val</code> into this slot, returning a new, pinned <code>MoveRef</code>.\nPin <code>val</code> into this slot, returning a reference to it.\nPut <code>val</code> into this slot, returning a new <code>MoveRef</code>.\nPut <code>val</code> into this slot, returning a reference to it.\nTry to emplace <code>new</code> into this slot, returning a new, pinned …\nTry to emplace <code>new</code> into this slot, returning a reference …")