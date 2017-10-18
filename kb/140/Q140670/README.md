---
layout: page
title: "Q140670: FIX: Using Run-Time Type Info May Cause Memory Leak Report"
permalink: kb/140/Q140670/
---

## Q140670: FIX: Using Run-Time Type Info May Cause Memory Leak Report

	Article: Q140670
	Product(s): Microsoft C Compiler
	Version(s): 4.00 4.10
	Operating System(s): 
	Keyword(s): kbCRT kbVC
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When exiting a debug application that uses run-time type information (RTTI) and
	calls the 'name' member function of the type_info class, Visual C++ reports
	"Detected memory leaks!" in the output window.
	
	CAUSE
	=====
	
	When you call the 'name' member function of the type_info class, it incorrectly
	allocates a _NORMAL_BLOCK buffer to hold the type name. This can cause a memory
	leak to be reported incorrectly when you run a debug version of the program.
	
	RESOLUTION
	==========
	
	The reported memory leak can be ignored.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++, 32-bit
	Edition, version 4.2.
	
	MORE INFORMATION
	================
	
	When you call the 'name' member function of the type_info and then later call
	_CrtDumpMemoryLeaks, memory leaks are incorrectly reported. The following sample
	code demonstrates the problem.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /D_DEBUG
	  */ 
	
	  #include <typeinfo.h>
	  #include <iostream.h>
	  #include <crtdbg.h>
	
	  struct test {};
	
	  void main()
	  {
	      test t;
	      typeid(t).name();
	      _CrtDumpMemoryLeaks();
	  }
	
	You would see messages similar to the following in the debug tab of the output
	window:
	
	  
	
	  Loaded symbols for 'E:\WINNT35\system32\MSVCR40D.DLL'
	  Detected memory leaks!
	  Dumping objects ->
	  {44} normal block at 0x002D2390, 12 bytes long.
	  Data: <struct test > 73 74 72 75 63 74 20 74 65 73 74 00
	  Object dump complete.
	  The program 'E:\temp\Text1.exe' has exited with code 1 (0x1).
	
	NOTE: If you are using the 'name' member function within an MFC application, the
	leaks will be reported even if you do not explicitly call _CrtDumpMemoryLeaks.
	MFC calls this function automatically when the application terminates.
	
	Additional query words: kbVC400bug 4.00 4.10 vcfixlist420
	
	======================================================================
	Keywords          : kbCRT kbVC 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410
	Version           : 4.00 4.10
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
