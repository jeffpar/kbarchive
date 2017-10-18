---
layout: page
title: "Q142243: PRB: Cannot Create an MFC Thread During DLL Startup"
permalink: kb/142/Q142243/
---

## Q142243: PRB: Cannot Create an MFC Thread During DLL Startup

	Article: Q142243
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbDLL kbMFC kbThread kbVC400 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An MFC DLL that creates a new MFC thread during startup hangs when loaded by an
	application. This includes whenever a thread is created by calling
	AfxBeginThread or CWinThread::CreateThread inside:
	
	- the InitInstance of a CWinApp-derived object in a Regular DLL.
	
	- a supplied DllMain or RawDllMain function in a Regular DLL.
	
	- a supplied DllMain or RawDllMain function in an Extension DLL.
	
	CAUSE
	=====
	
	For Regular DLLs, which have a CWinApp-derived object, the CWinApp::InitInstance
	override is called from MFC's supplied DllMain when a process is attaching to
	the DLL. That is, DllMain is entered with a Reason For Call of
	DLL_PROCESS_ATTACH, and in handling this, MFC calls in to InitInstance before
	cleaning up and leaving DllMain.
	
	For Extension DLLs, the startup of the DLL is the same, except Extension DLLs do
	not have a CWinApp-derived object and therefore have no InitInstance.
	
	Whenever new threads are created that use code in the DLL, DllMain is called with
	a Reason For Call of DLL_THREAD_ATTACH to announce to the DLL that a new thread
	is attaching to it. If a new thread is created in the InitInstance of an MFC
	Regular DLL or in the DllMain of any MFC DLL during DLL_PROCESS_ATTACH, this
	second thread will attempt to re-enter the DllMain, which has not yet been
	exited from in an effort to announce DLL_THREAD_ATTACH.
	
	DllMain, however, is not re-entrant. That means that the second thread will not
	start executing until the initial creating thread has finished its work in
	InitInstance, returned to and left DllMain.
	
	In versions of MFC included with 32-bit Visual C++ versions 2.2 and earlier, MFC
	allowed threads to be created during startup, and usually DLLs that did this
	would work acceptably. The second thread would get created without problem but
	would not start executing until the first thread left DllMain. However, it has
	never been a good idea to create threads in DllMain during DLL_PROCESS_ATTACH.
	
	As of MFC 4.0, the CWinThread::CreateThread function, which is called by
	AfxBeginThread, now waits on the created thread to start up and initialize MFC
	specific data before it returns control to the calling thread. Because the
	second thread is waiting on the first thread to leave DllMain, both threads
	crash headlong into deadlock and the application hangs.
	
	Note that this information is equally valid for the RawDllMain function.
	Moreover, MFC DLLs should not use a RawDllMain function at all.
	
	RESOLUTION
	==========
	
	Regular DLLs that create threads should only do so in functions exported from
	the DLL and called by client applications. Furthermore, no MFC DLL -- neither
	Extension nor Regular -- should create an MFC thread in the DllMain or
	RawDllMain function. This ensures that the thread will not be created in the
	middle of any critical startup code.
	
	The recommended solution for MFC DLLs that need to create a thread when the DLL
	starts is to add a specific exported initialization function and create the
	thread in it. Applications that use the DLL would need to call this function
	sometime during startup, most likely during the application's InitInstance if it
	uses MFC. Or, if the application is loading the DLL explicitly, the application
	should call the initialization function immediately after the call to load the
	library.
	
	The practice of exporting an initialization function for a DLL is not uncommon.
	Nevertheless, there may be situations where DLLs created with earlier versions
	of MFC are being ported but the client application cannot be changed to include
	a call to an initialization function. The alternative to an initialization
	function is to create the thread in one of the pre- existing exported functions.
	Any of the DLL's exported functions that require a running thread should be
	responsible for first checking to see if that thread exists and then creating it
	if it does not.
	
	STATUS
	======
	
	This behavior is by design.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jason Strayer, Microsoft Corporation
	
	
	Additional query words: 4.0 InitInstance AfxBeginThread CreateThread CWinThread DllMain RawDllMain
	
	======================================================================
	Keywords          : kbDLL kbMFC kbThread kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
