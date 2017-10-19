---
layout: page
title: "Q129479: PRB: _searchenv() Does Not Check the Buffer Size"
permalink: /kb/129/Q129479/
---

## Q129479: PRB: _searchenv() Does Not Check the Buffer Size

	Article: Q129479
	Product(s): Microsoft C Compiler
	Version(s): 2.1 4.0 5.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.1, 4.0, 5.0, 6.0, on platform(s):
	      - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If _searchenv() is called with a pathname buffer (third parameter) that has a
	length shorter than the length of the fully qualified path name returned, the
	function will overwrite the buffer.
	
	CAUSE
	=====
	
	As the documentation states, "You must ensure that there is sufficient space for
	the constructed path." A number of CRT routines, including _searchenv(), do not
	take a size parameter and cannot check to see if the buffer passed is big enough
	to hold the data. It is up to the programmer to make sure the buffer is large
	enough for the data.
	
	RESOLUTION
	==========
	
	To avoid potential access violations that occur because of the overwrite, do one
	of the following:
	
	- Before calling _searchenv(), check to see that the sum of the length of the
	  filename and the length of any directory in the environment variable to be
	  used (for example, the PATH) does not exceed _MAX_PATH. If it does, give an
	  error message to the user.
	
	  -or-
	
	- Increase the length of buffer (pathname) passed to _searchenv() so that it is
	  at least as big as the sum of the length of the filename and the length of
	  the longest directory in the environment variable to be used.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : 2.1 4.0 5.0
	Issue type        : kbprb
	
	=============================================================================
	
