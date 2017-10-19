---
layout: page
title: "Q122236: PRB: Add() Member Function Consuming Large Amount of Memory"
permalink: /kb/122/Q122236/
---

## Q122236: PRB: Add() Member Function Consuming Large Amount of Memory

	Article: Q122236
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,4.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbString kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL kbCollectionCl
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After calling CStringArray::Add() many times, unusually large amounts of memory
	become allocated to the application and not freed until the application
	terminates. This behaviour may be seen in the other array collection classes
	such as CObArray and CPtrArray as well.
	
	CAUSE
	=====
	
	Each time a call to Add() is made, the array may grow. Memory needs to be
	allocated to accommodate the new size of the array. The array is copied to the
	new block of memory and the old memory is freed for re-use. The Visual C++
	run-time heap allocator doesn't return freed memory to the system but instead
	marks the memory block as unused so that it can re-use the memory later.
	
	For each call to Add() that causes the array to be re-allocated, the old block is
	marked as unused. The sections marked as unused won't get re-used by the next
	call to Add() because the array is too large to fit into the unused section.
	Other allocations (such as the CString) prevent adjacent free unused blocks of
	memory from being combined into a bigger block of unused memory.
	
	RESOLUTION
	==========
	
	A developer using an array data structure typically knows the size of the array
	before allocating memory for it. However, if you don't know the size, you must
	re-allocate the array as it grows. This means that a new memory block must be
	allocated and the data from the old memory block must be copied to the new block
	before the old memory block is freed. This can cost time.
	
	To work around the problem, call the member function SetSize() with the
	approximate size of the array. If you are uncertain about the size of the array,
	minimize the amount of memory reallocations by specifying a larger size to allow
	room to grow. The first parameter to SetSize() allows you to change the size of
	the array and the second parameter allows you to change the grow size. For
	example:
	
	     CStringArray array;
	        array.SetSize(100,100);
	
	Here the array will be allocated an original 100 elements. When the 100 elements
	have been used and Add() is called for the 101st element, the array memory block
	will be reallocated to handle an additional 100 elements for a total of 200
	elements.
	
	Alternatively, SetSize(0, 100) would cause the initial size for the array to be
	zero and an Add() would have to be done before any elements could be filled.
	This first Add() in this scenario would cause 100 elements to be allocated for
	use by the array.
	
	
	Additional query words: 1.00 1.50 1.51 2.00 2.10 2.50 3.00 4.00 fragment leak heap
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbString kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL kbCollectionClass 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
