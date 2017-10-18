---
layout: page
title: "Q131324: Use New Flags to Speed Up C Run-time Low-Level I/O Functions"
permalink: kb/131/Q131324/
---

## Q131324: Use New Flags to Speed Up C Run-time Low-Level I/O Functions

	Article: Q131324
	Product(s): Microsoft C Compiler
	Version(s): 1.00 2.00 2.10 4.00
	Operating System(s): 
	Keyword(s): kbCRT kbVC
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The low-level file open functions in the C Run-time library for the 32-bit
	Edition of Visual C++ accept some additional flags to allow you to take
	advantage of Win32-specific file system features. These flags are not available
	in the 16-bit version of Visual C++.
	
	The low-level file open functions are: _open, _wopen, _sopen, and _wsopen. The
	new flags (and others) can be combined together with the bitwise OR operator and
	passed as the 'oflag' argument to the file open functions.
	
	The file open functions call the Win32 function 'CreateFile' to actually open the
	file with the specified options. The following table relates these new C
	Run-time flags to the equivalent flags that are passed to CreateFile.
	
	C Run-time Flag     CreateFile Flag
	_O_SHORT_LIVED      FILE_ATTRIBUTE_TEMPORARY
	_O_TEMPORARY        FILE_FLAG_DELETE_ON_CLOSE
	_O_RANDOM           FILE_FLAG_RANDOM_ACCESS
	_O_SEQUENTIAL       FILE_FLAG_SEQUENTIAL_SCAN
	
	MORE INFORMATION
	================
	
	You can use these flags to improve file I/O performance in some cases. For
	example, if you need to read from a large file sequentially, and do not need to
	jump to different parts of the file, you most likely will improve the
	performance of your application by using the _O_SEQUENTIAL flag when opening the
	file. This translates to the FILE_FLAG_SEQUENTIAL_SCAN flag for CreateFile.
	
	For more information, please refer to the following sources:
	
	Microsoft Knowledge Base: Read these articles
	
	  Q98756Increased Performance Using FILE_FLAG_SEQUENTIAL_SCAN
	
	  Q103237Using Temporary File Can Improve Application Performance
	
	
	Visual C++ Books Online: Read the descriptions of the _open/_wopen and
	
	  _sopen/_wsopen functions.  Search on "_open" and "_sopen."
	
	Visual C++ Run-Time Library Reference, Part 2, Run-Time Reference: Read the
	descriptions of _open/_wopen and _sopen/_wsopen.
	
	Win32 Programmer's Reference, Volume 3, Function Reference: Read the description
	of WIN32 API CreateFile.
	
	Additional query words: kbinf 1.00 2.00 2.10 4.00 open sopen option speed up faster
	
	======================================================================
	Keywords          : kbCRT kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : 1.00 2.00 2.10 4.00
	
	=============================================================================
	
