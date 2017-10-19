---
layout: page
title: "Q125309: PRB: AllocMemoryDebug Gives Assertion or Trace Error on New&#91;0&#93;"
permalink: /kb/125/Q125309/
---

## Q125309: PRB: AllocMemoryDebug Gives Assertion or Trace Error on New&#91;0&#93;

	Article: Q125309
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbVC100 kbVC150 kbVC600 kbDSupport kbGrpDSMFCATL kbNoUpdate
	Last Modified: 29-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.51 
	   - Microsoft Visual C++, 32-bit Editions, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If new is called to allocate an array whose size is determined by a variable
	that has a value of zero (0), the program terminates with the following message
	in a debug build:
	
	  Assertion Failed! <name> Windows Application:File Afxmem.cpp, Line
	  <line>
	
	The <line> value depends on the version of MFC that you have:
	
	- In MFC 2.0 <line> = 275
	
	- In MFC 2.1 <line> = 267
	
	- In MFC 2.5 <line> = 277
	
	- In MFC 2.51 <line> = 286
	
	In MFC 3.x, the code generates a TRACE message similar to this:
	
	  Warning: Allocating zero length memory block.
	
	RESOLUTION
	==========
	
	This behavior changed with the introduction of Visual C++ version 2.0. In the
	MFC that shipped with version 2.0, a TRACE is output to the Debug Window in
	Debug mode.
	
	If you encounter the assertion failure, you can work around it by simply not
	calling new for a zero-length array. Check for a zero value before calling new.
	If you need to have a valid address for the memory block, allocate an array of
	size 1 as in new[1].
	
	STATUS
	======
	
	This behavior is by design. It is intended to help programmers detect logic
	errors in programs.
	
	MORE INFORMATION
	================
	
	The run-time operator new() can be called with the argument zero. A distinct
	(non-null) pointer to an object will be returned. (See Section 5.3.3, third
	paragraph of the ARM - M.A.Ellis, B.Stroustrup.) This is the behavior of Visual
	C++ versions 2.x and 4.0. However, Visual C++ version 4.0 does not warn when
	new() is called with a zero size. It is the programmer's responsibility to
	ensure the pointer returned by new() is of the appropriate size.
	
	Sample Code
	-----------
	
	  /* Compile options needed:
	          Default MFC App.
	  */ 
	
	  int size=0;
	  char * p = new char[size];
	
	  // With MFC 2.51 or earlier, this causes an Assert to be thrown
	  // With MFC 3.x this causes a TRACE warning
	
	Additional query words: 1.00 1.50 2.00 2.10 2.50 2.51
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbVC100 kbVC150 kbVC600 kbDSupport kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.0,1.5,1.51
	Issue type        : kbprb
	
	=============================================================================
	
