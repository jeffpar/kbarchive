---
layout: page
title: "Q145996: FIX: _setmaxstdio Causes Access Violation"
permalink: kb/145/Q145996/
---

## Q145996: FIX: _setmaxstdio Causes Access Violation

	Article: Q145996
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbCRT kbVC kbVC410fix
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The CRT function _setmaxstdio does not work properly. The function sets the
	maximum number of files an application can open with the stream I/O functions,
	like fopen. It is documented in the README book in the online documentation, and
	in the Vcread.wri file.
	
	Using _setmaxstdio results in the following error when you exit the program or
	call the fopen function:
	
	  Unhandled exception in <Project>.exe: 0xC0000005: Access Violation
	
	RESOLUTION
	==========
	
	Do not use the _setmaxstdio function. Here are two workarounds:
	
	- Keep track of the number of files opened with fopen, and do not open more
	  than 512.
	
	-or-
	
	- If the application needs to open more than 512 files, use the low-level I/O
	  functions: _open, _read, and _write. These allow up to 2048 files to be
	  opened.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <stdio.h>
	
	  void main()
	  {
	      _setmaxstdio(511);
	      FILE *text = fopen("textfile.txt","w");
	      fclose(text);
	  }
	
	Additional query words: kbVC400bug 4.00 4.10
	
	======================================================================
	Keywords          : kbCRT kbVC kbVC410fix 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
