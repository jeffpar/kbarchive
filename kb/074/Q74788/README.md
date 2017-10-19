---
layout: page
title: "Q74788: Using Near and Far Pointers with C Run-Time Functions"
permalink: /kb/074/Q74788/
---

## Q74788: Using Near and Far Pointers with C Run-Time Functions

	Article: Q74788
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In an application designed for the Microsoft Windows graphical environment, many
	C run-time functions do not work with memory allocated by the GlobalAlloc()
	function when the application is developed in the small or medium memory model.
	
	MS-DOS (non-Windows) applications written in the small or medium memory model
	assume the presence of only one data segment (DS). Therefore, the C Run-time
	functions assume that DS will not change.
	
	However, an application can store data in a block of memory allocated with the
	GlobalAlloc() function and locked with the GlobalLock() function. The segment
	returned from GlobalLock() will be different from the application's data
	segment. Specifying the alternate data segment in a C run-time function that
	assumes a near pointer results in the following C compiler warning:
	
	  WARNING: Segment Lost in Conversion
	
	For example, the following code passes far pointers to a Run-time function
	incorrectly:
	
	     hMem = GlobalAlloc (...);
	     lpMem = GlobalLock (hMem);
	
	     strcpy (szBuffer, lpMem);
	
	     GlobalUnlock (hMem);
	
	This section of incorrect code produces one of two results.
	
	1. If the offset of lpMem extends past the end of application's data segment
	  (DS), the application experiences an unrecoverable application error (UAE).
	
	2. The function copies information from some random portion of the application's
	  DS into the buffer.
	
	If the following line of code is used, the function overwrites data in the
	application's data segment, which causes the application to crash or run
	incorrectly:
	
	     strcpy (lpMem, szBuffer);
	
	Four ways to work around this situation are:
	
	1. For the most common C run-time functions, Windows provides equivalent
	  functions that use far pointers. These functions include:
	
	     lstrcat()
	     lstrcmp()
	     lstrcmpi()
	     lstrcpy()
	     lstrlen()
	
	2. Use the far pointer versions of these functions (_fstrcat(), _fstrcmp(), and
	  so on) provided by the Microsoft C Optimizing Compiler versions 6.0 and
	  later.
	
	3. For the less common C Run-time functions, write a far-pointer version as part
	  of the application code. Most of the Microsoft C Run-time library source code
	  is available from Microsoft.
	
	4. Use the large memory model.
	
	  NOTE: Using the large memory model in Windows 3.0 had many disadvantages and
	  doing so was not encouraged. These problems were corrected in Windows 3.1 and
	  Microsoft C/C++ compiler. Hence, using the large memory model is not a
	  problem.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
