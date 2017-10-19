---
layout: page
title: "Q123809: FIX: Development Environment Doesn't Unload DLL on Termination"
permalink: /kb/123/Q123809/
---

## Q123809: FIX: Development Environment Doesn't Unload DLL on Termination

	Article: Q123809
	Product(s): Microsoft C Compiler
	Version(s): 2.00
	Operating System(s): 
	Keyword(s): kbide kbVC600fix kbGrpDSToolskbbuglist
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual C++ development environment may fail to unload a DLL from memory if
	an abnormal program termination occurs.
	
	CAUSE
	=====
	
	The Visual C++ development environment loads the DLLs into memory when the
	application starts in the debugger. An abnormal program termination may cause
	the debugger to fail to remove the DLLs from memory.
	
	RESOLUTION
	==========
	
	When this happens, you need to exit the development environment and possibly
	even log off Windows NT to force the DLL to be removed from memory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	version 6.0.
	
	
	MORE INFORMATION
	================
	
	To reproduce this problem, it is necessary to create a Win32-based application
	that calls a Win32-based DLL. That DLL should call another DLL. You can use the
	SELECT example from the Win32 SDK samples, and add another DLL with a single
	function. Call it from one of the SELECT.DLL functions.
	
	Once this is set up, remove the secondary DLL from your hard drive. Then attempt
	to debug the program in the Visual C++ development environment. An error message
	will appear saying it could not find the secondary DLL, and the executable will
	terminate.
	
	Now, attempt to delete the primary DLL being called. Windows will generate an
	error message saying that the primary DLL is still in use, even though the
	application calling the DLL was terminated.
	
	Additional query words: IDE
	
	======================================================================
	Keywords          : kbide kbVC600fix kbGrpDSTools kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC200 kbVC32bitSearch
	Version           : 2.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
