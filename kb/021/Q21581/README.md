---
layout: page
title: "Q21581: Shrinking Heap Space"
permalink: /kb/021/Q21581/
---

## Q21581: Shrinking Heap Space

{% raw %}

	Article: Q21581
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an application calls LocalAlloc() and there is not enough memory within the
	application's data segment, Windows will use memory from the global heap to
	append this to the application's data segment. Releasing the memory that was
	temporarily requested then becomes an issue to the programmer.
	
	For example, an initial HEAPWALK shows 12000 bytes free. After a 4K LocalAlloc()
	and LocalLock(), HEAPWALK shows 4000 bytes locked and 8000 free. Then the
	program allocates and locks another 10K piece; HEAPWALK shows 4000 bytes locked,
	8000 free, and 10000 locked. If the program then deallocates the 4K and 10K
	blocks with unlock and free, HEAPWALK shows a free 12000 bytes and a free 10000
	bytes. The programmer then has the problem of releasing the second free 10K
	block.
	
	Using the LocalShrink() function will compact and shrink the data segment to the
	smallest size possible. LocalShrink() cannot move FIXED or locked blocks when
	compacting the local heap. Therefore, there may still be free space in the heap,
	and the size of the heap may not be as small as requested after calling
	LocalShrink(). However, this function will compact as much as possible, given
	this constraint.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
