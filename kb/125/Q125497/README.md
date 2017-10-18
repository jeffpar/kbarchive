---
layout: page
title: "Q125497: PRB: Win32s Version of MSVCRT20.DLL and the iostream Classes"
permalink: kb/125/Q125497/
---

## Q125497: PRB: Win32s Version of MSVCRT20.DLL and the iostream Classes

	Article: Q125497
	Product(s): Microsoft C Compiler
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC kbOSWin32s
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under Win32s, when you run multiple Win32-based applications that use the
	iostream classes provided by MSVCRT20.DLL, you will get unexpected errors or
	unexpected behavior.
	
	In addition, if the application references the global iostream objects cin, cout,
	cerr, or clog, it will fail at load time with Win32s errors. Win32s will display
	an error message similar to this one:
	
	  
	
	  The procedure entry point "?cerr@@3Vostream_withassign@@E"
	  could not be located in Dynamic Link Library "MSVCRT20.DLL".
	
	where "?cerr@@3Vostream_withassign@@E" is the decorated name for the cerr object.
	The error message may contain one of these decorated names for the other
	iostream objects instead:
	
	  
	
	  "?cin@@3Vistream_withassign@@E"
	  "?cout@@3Vostream_withassign@@E"
	  "?clog@@3Vostream_withassign@@E"
	
	CAUSE
	=====
	
	The Win32s version of the run-time library DLL (MSVCRT20.DLL) does not support
	multiple applications using the iostream classes at the same time. It also does
	not provide the global iostream objects cin, cout, cerr, or clog. A Win32-based
	application that references them can be built without errors, but it will fail
	at load time on Win32s, as described above.
	
	RESOLUTION
	==========
	
	You can continue to use MSVCRT20.DLL as long as there is only one Win32s
	application using the iostream classes in the DLL at one time. If your
	application references the global iostream objects, then you must remove those
	references when you are building the application to run on Win32s.
	
	MORE INFORMATION
	================
	
	The Win32s version of MSVCRT20.DLL is located in the WIN32S\REDIST directory of
	the Visual C++ version 2.0 CD-ROM.
	
	REFERENCES
	==========
	
	"C Run-time Support" section in Chapter 3 of Win32 Programmer's Reference,
	Win32s manual.
	
	Additional query words: 1.20
	
	======================================================================
	Keywords          : kbCRT kbVC kbOSWin32s 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
