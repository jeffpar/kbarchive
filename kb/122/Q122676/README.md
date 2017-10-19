---
layout: page
title: "Q122676: INFO: Multiple Threads and MFC _USRDLLs"
permalink: /kb/122/Q122676/
---

## Q122676: INFO: Multiple Threads and MFC _USRDLLs

	Article: Q122676
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,4.0,4.1
	Operating System(s): 
	Keyword(s): kbDLL kbMFC kbThread kbVC200 kbVC400 kbVC410 kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	While the Microsoft Foundations Classes versions 3.0 and later that ship with
	Visual C++ versions 2.0 and later do support multiple threads, only one external
	thread may be attached to a _USRDLL.
	
	MORE INFORMATION
	================
	
	_USRDLLs are MFC DLLs that are built as stand-alone DLLs. They can be used with
	non-MFC applications. They are not closely tied to the application that calls
	them and contain their own CWinApp derived class.
	
	During the initialization of a _USRDLL, MFC allocates per-thread local data using
	Thread Local Storage (TLS). Because this is done only during the
	DLL_PROCESS_ATTACH, only data for the attaching thread is allocated. MFC
	_USRDLLs do not handle the DLL_THREAD_ATTACH case where additional threads are
	created, or existing threads other than the one that originally attached to the
	DLL.
	
	Because most MFC 3.0 objects end up using TLS, accessing most MFC objects from a
	secondary thread created outside the _USRDLL will cause access violations. This
	is because each thread that uses MFC must be started with AfxBeginThread so that
	this TLS data can be initialized.
	
	This is a change from MFC version 2.0 that shipped with Visual C++ version 1.0
	for Windows NT, where no TLS data was used by MFC. It was possible in MFC
	version 2.0 to access _USRDLLs with multiple threads, as long as only one thread
	accessed the DLL at a time. (This could be accomplished by using
	EnterCriticalSection() or a semaphore.)
	
	It is still possible to access the _USRDLL from multiple threads created in the
	application if only one thread accesses the _USRDLL at a time and each thread
	loads and unloads the _USRDLL. TLS data will be created for the current thread
	each time the DLL is loaded.
	
	Threads created inside the _USRDLL by creating CWinThread derived objects will
	correctly create TLS data for those threads and work correctly.
	
	_AFXDLL, which is closely tied to the executable, does not have these
	restrictions.
	
	REFERENCES
	==========
	
	For more information on _USRDLLs and _AFXDLLs, please see MFC technotes in Books
	Online : TN011 "Using MFC as Part of a DLL", and TN033 "DLL version of MFC".
	
	Additional query words: kbinf 2.00 3.00 4.00 4.10
	
	======================================================================
	Keywords          : kbDLL kbMFC kbThread kbVC200 kbVC400 kbVC410 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,4.0,4.1
	Issue type        : kbprb
	
	=============================================================================
	
