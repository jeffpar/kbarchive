---
layout: page
title: "Q120923: Visual C++ Vers 2.0 README.WRI, Part 7 Run-Time Library Routines"
permalink: /kb/120/Q120923/
---

## Q120923: Visual C++ Vers 2.0 README.WRI, Part 7 Run-Time Library Routines

	Article: Q120923
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is based on the Visual C++ version 2.0 README.WRI file:
	
	New Multithreading Routines
	---------------------------
	
	The Microsoft Run-Time Library for Visual C++ contains many new routines. Among
	these are _beginthreadex and _endthreadex, which are extensions to _beginthread
	and _endthread, respectively. Using _beginthreadex and _endthreadex can provide
	advantages over using the Win32 APIs CreateThread and ExitThread, especially in
	preventing loss of memory resources. See the Run-Time Library Reference for more
	information about these new routines.
	
	Other Notes
	-----------
	
	The following routines do not behave properly under the conditions cited.
	
	assert
	------
	
	The assert function is not compatible with non-console applications. It causes
	the application to exit with exit code 0x03 but does not display a diagnostic
	message "Assertion Failed" in a pop-up window.
	
	_mbsnbcmp, _mbsnbicmp
	---------------------
	
	Each of these functions may return a random value when the value specified for
	the third argument causes a terminating NULL character ('\0') to be included in
	a string comparison. For example,
	
	  _mbsnbcmp ( "ABC", "ABC", n )
	  where n<=3, returns 0. However,
	  _mbsnbcmp ( "ABC", "ABC", n )
	  where n => 4, returns a random value.
	
	_mbscmp, _mbsncmp, _mbsnbcmp
	----------------------------
	
	When comparing an uppercase letter to the corresponding lowercase letter, each of
	these functions evaluates the uppercase letter as greater than the lowercase
	letter. For example, 'A' is evaluated as greater than 'a.' strcmp and strncmp
	correctly exhibit the opposite behavior.
	
	Additional query words: 2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	
	=============================================================================
	
