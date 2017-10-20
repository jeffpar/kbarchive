---
layout: page
title: "Q12159: HOWTO: Use malloc() and _fmalloc() in an Application"
permalink: /kb/012/Q12159/
---

## Q12159: HOWTO: Use malloc() and _fmalloc() in an Application

{% raw %}

	Article: Q12159
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,4.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC kbhowto
	Last Modified: 10-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 5.1, 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The text below provides information about using the _fmalloc() and malloc()
	functions in an application.
	
	An application can use both the malloc() and _fmalloc() functions without
	restriction. Each function separately tracks its memory allocations. The
	application must use the free() and _ffree() functions, respectively, to free
	memory allocated by these functions.
	
	The malloc() functions do not perform any "garbage collection" activity to
	reclaim free memory between allocations. The application must explicitly free
	memory when appropriate.
	
	The malloc() functions can fragment memory. However, when an application frees a
	block of memory that is adjacent to another block of free memory, the
	appropriate free() function consolidates the blocks to reduce the damage caused
	by fragmentation.
	
	The _fmalloc() function does not allocate memory that crosses a segment boundary
	and fails any allocation request for more than 64K of memory. To allocate a
	larger memory block, use the halloc() function (the huge memory model memory
	allocation function). Your application must deal with segment boundaries in a
	huge memory block.
	
	Windows NT uses a flat 32-bit memory model; every address requires 32 bits.
	Because Windows NT does not use segments, far and huge versions of malloc() and
	free() are not required. Therefore, the C runtime library that supports Windows
	NT does not include the _fmalloc(), _ffree(), halloc(), and _hfree() functions.
	The elimination of segments also removes the 64K maximum allocation limit; an
	application can request up to 2 GB with malloc().
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC kbhowto 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:1.0,2.0,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
