---
layout: page
title: "Q147578: CWnd Derived MFC Objects and Multi-threaded Applications"
permalink: kb/147/Q147578/
---

## Q147578: CWnd Derived MFC Objects and Multi-threaded Applications

	Article: Q147578
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbMFC kbThread kbVC kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbG
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In a multi-threaded application written using MFC, you should not pass MFC
	objects across thread boundaries. As a general rule, a thread should access only
	those MFC objects that it creates. Failure to do so may cause run-time problems
	including assertions or unexpected program behavior.
	
	MORE INFORMATION
	================
	
	In a Win32 process, all the threads running in the process address space can
	view all global and static data. A thread can use thread-local-storage (TLS) to
	store any thread-specific data.
	
	In a multi-threaded environment because windows are owned by threads, MFC keeps
	the temporary and permanent window handle map in thread local storage. The same
	is true for other handle maps like those for GDI objects and device contexts.
	Keeping the window handle maps in thread local storage ensures protection
	against simultaneous access by several threads.
	
	The behavior of the functions CHandleMap::LookupPermanent() and
	CHandleMap::LookupTemporary() is a direct consequence of these facts. Given a
	window handle, these functions check the permanent and temporary window handle
	maps of the current thread for the existence of an associated CWnd derived MFC
	object. This means that if calls to these functions are made from a thread to
	search for MFC objects that represent windows created in other threads, these
	calls will fail.
	
	There are several functions that call CHandleMap::LookupPermanent() and
	CHandleMap::LookupTemporary(). CWnd::AssertValid() (and hence the macro
	ASSERT_VALID for a CWnd object) is one such function. This function is called to
	make validity checks on an object. If AssertValid() fails to find an entry for
	the MFC object's m_hWnd member in any of the handle maps or finds an incorrect
	entry, it fires an assertion. In Visual C++ 2.1, these assertions are in file
	Wincore.cpp, lines 797 and 798. In Visual C++ 2.2, they are in Wincore.cpp,
	lines 804 and 805. In Visual C++ 4.0, they are in Wincore.cpp, lines 871 and
	872.
	
	Calls to the ASSERT_VALID macro are sprinkled all over the MFC source code.
	Hence, from a particular thread, if you end up calling a function that calls
	ASSERT_VALID on MFC window objects that belong to some other thread, you get an
	assertion. If you do not get an assertion, you may still get abnormal behavior
	because you are not allowed to directly manipulate windows created by other
	threads.
	
	The correct approach in such situations is to work with window handles, not MFC
	objects. It is safe to pass window handles across thread boundaries. If thread A
	passes a window handle to thread B, then thread B can use this window handle to
	send or post messages to the window. When these messages are processed, you are
	back in the context of thread A and calls to CWnd::AssertValid() to check thread
	A's window handle maps will succeed.
	
	In this scenario, thread B can also use the CWnd::FromHandle() function to get a
	temporary CWnd object which is placed in thread B's temporary handle map.
	However this object may be of only limited use, because in no way is it in
	synchronization with the MFC object existing in thread A's handle maps.
	
	REFERENCES
	==========
	
	MFC Encyclopedia article "Multithreading:Programming Tips" in the Window Handle
	Maps section.
	
	MFC Tech Note 3 "Mapping of Windows Handles to Objects."
	
	MFC Source File Wincore.cpp, the function CWnd::AssertValid().
	
	Additional query words: kbinf threads assertion
	
	======================================================================
	Keywords          : kbMFC kbThread kbVC kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	
	=============================================================================
	
