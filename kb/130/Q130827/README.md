---
layout: page
title: "Q130827: FIX: MFC Reports Memory Leaks When cout and cin Are Used"
permalink: /kb/130/Q130827/
---

## Q130827: FIX: MFC Reports Memory Leaks When cout and cin Are Used

{% raw %}

	Article: Q130827
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbVC kbVC100 kbVC200 kbGrpDSMFCATLkbbuglist kbfixlist
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application that statically links to MFC and uses one of the C++ I/O
	functions (cout, cin, cerr, or clog) generates memory leak messages when it
	exits from the program. The messages look similar to this one:
	
	  Detected memory leaks!
	  Dumping objects ->
	  {3} non-object block at $002F05CC, 512 bytes long
	  {1} non-object block at $002F051C, 84 bytes long
	  Object dump complete.
	
	The second line indicates a loss of 84 bytes for 32-bit editions and 28 bytes for
	16-bit editions of Visual C++.
	
	
	CAUSE
	=====
	
	By referencing cout, cin, cerr, or clog you are causing these objects to do a
	one-time allocation for their file-buffer objects. The file-buffer objects are
	allocated using "operator new," and when you use MFC, these allocations are
	mapped through MFC's debug allocator (an overridden version of "operator new"
	that can be found in \MSVC\MFC\SRC\AFXMEM.CPP). There is also a memory buffer
	512 bytes long allocated by the Run-Time library.
	
	Because these objects are allocated by the Run-Time Library, they are freed by
	the Run-Time Library. However MFC's memory leak detection occurs before the
	Run-Time Library has destroyed its global objects, so it appears to MFC that
	there was an allocation made that has not been properly freed.
	
	NOTE: This problem doesn't occur when the DLL version of the C/C++ Run-Time
	Library is used (MSVCRT20.DLL) because the memory allocations come from within
	the DLL and are not mapped through MFC's diagnostic allocator in the first
	place.
	
	RESOLUTION
	==========
	
	These memory leaks can be safely ignored. The memory is correctly freed by the
	Run-Time Library.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	Additional query words: 1.00 1.50 2.50 1.51 2.51 1.52 2.52 1.10 2.10 2.00 3.00 3.10
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbVC kbVC100 kbVC200 kbGrpDSMFCATL kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
