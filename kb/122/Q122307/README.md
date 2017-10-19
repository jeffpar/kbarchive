---
layout: page
title: "Q122307: HOWTO: Tracking Down Memory Leaks with _afxBreakAlloc"
permalink: /kb/122/Q122307/
---

## Q122307: HOWTO: Tracking Down Memory Leaks with _afxBreakAlloc

	Article: Q122307
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1
	Operating System(s): 
	Keyword(s): kbnokeyword kbCodeView kbDebug kbide kbMFC kbVC100 kbVC150 kbVC200 kbVC210 kbGrpDSMFCAT
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is currently no documentation for the _afxBreakAlloc symbol defined by
	MFC. However it can be extremely useful in finding the cause of memory leaks in
	an application. This article explains how to use it.
	
	Note: In Visual C++ 32-bit Edition, version 4.0, the method described below is
	obsolete. For information on diagnosing memory leaks in this version of Visual
	C++, refer to the Visual C++ 4.0 Books Online topic "Diagnostics: Detecting
	Memory Leaks" in the "Programming with MFC: Encyclopedia."
	
	MORE INFORMATION
	================
	
	The Microsoft Foundation Classes have memory leak detection capabilities. When
	you execute a debug build of your application and you have used the AFX Trace
	Options Tool to Enable Tracing, MFC will report memory leaks when an object has
	been allocated (using operator new) but not deleted before the application
	exits. The default output in the debug window will look similar to this:
	
	  MDI16: Detected memory leaks!
	  MDI16: Dumping objects ->
	  MDI16: {6} str.cpp(82):non-object block at $24D76B72,5 bytes long
	  MDI16: {5} non-object block at $24D76B4E, 6 bytes long
	  MDI16: Object dump complete.
	
	The number found in the braces ({n}) indicates the allocation number that has
	occured. In the first object dump, it is obvious where the allocation occured.
	But the second object dump does not give the file and line number information,
	so it might be more difficult to track down the leak. However, MFC has the
	capability of breaking on a particular allocation number by using the
	_afxBreakAlloc symbol.
	
	The _afxBreakAlloc variable is not available programmatically because it is
	defined as a static variable in the MFC source code module AFXMEM.CPP. However
	it can be set/modified using the debugger. We can find the point in our code in
	which memory allocation number 5 occured by setting _afxBreakAlloc equal to 5
	before we get to that point in the code. To do so, follow these steps:
	
	1. Open the file AFXMEM.CPP (by default it is located in the directory
	  \MSVC20\MFC\SRC\). Find the function AfxAllocMemoryDebug (in VC 1.x the
	  function is named just AllocMemoryDebug). Set a breakpoint on the first line
	  of this function (the opening { ).
	
	2. Run the program until it breaks at this new breakpoint. Remove the
	  breakpoint.
	
	3. Open the Watch Window by selecting Window.Watch.
	
	4. Type in _afxBreakAlloc and press enter. The watch window should now display:
	
	  _afxBreakAlloc = -1
	
	5. Change the -1 to the number of the object leak indicated in the curly braces
	  of the object dump. In this example, change the -1 to a 5.
	
	6. Continue executing the program by pressing the F5 key.
	
	When the allocation of the object occurs, your program will break in the
	debugger. You can identify which line of code caused the allocation by looking
	at the Call Stack (select Debug.Show Call Stack).
	
	Additional query words: kbinf 1.00 1.50 2.00 2.10 2.50 3.00 kbNoDupate
	
	======================================================================
	Keywords          : kbnokeyword kbCodeView kbDebug kbide kbMFC kbVC100 kbVC150 kbVC200 kbVC210 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1
	Issue type        : kbhowto
	
	=============================================================================
	
