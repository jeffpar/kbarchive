---
layout: page
title: "Q148791: HOWTO: How to Provide Your Own DllMain in an MFC Regular DLL"
permalink: kb/148/Q148791/
---

## Q148791: HOWTO: How to Provide Your Own DllMain in an MFC Regular DLL

	Article: Q148791
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbDLL kbMFC kbVC400 kbGrpDSMFCATL kbArchitecture
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By design, MFC Regular DLLs have a default DllMain function provided
	automatically by MFC. Regular DLLs should not provide their own DllMain. Any
	initialization which is necessary when the DLL is loaded should be done in the
	InitInstance member function of the one CWinApp-derived class in the Regular
	DLL. Deinitialization and termination code should go in the ExitInstance member
	function.
	
	However, InitInstance is only called by MFC's DllMain when a process attaches
	(DLL_PROCESS_ATTACH) to the DLL and ExitInstance is called only when a process
	detaches (DLL_PROCESS_DETACH) from the DLL. If it is necessary to handle thread
	attachment to and detachment from (DLL_THREAD_ATTACH and DLL_THREAD_DETACH) in
	MFC Regular DLL, the Regular DLL will need to provide its own DllMain. This
	article explains how to do it.
	
	MORE INFORMATION
	================
	
	When a Regular DLL is created, the MFC source forcibly links in the code for the
	source file \Msdev\Mfc\Src\Dllmodul.cpp. Dllmodul.cpp contains most of the code
	added to a Regular DLL to support MFC in that DLL. One of the most important
	functions in Dllmodul.cpp is the DllMain function.
	
	To add code to MFC's DllMain, copy the \Msdev\Mfc\Src\Dllmodul.cpp source file to
	your project directory, and include the copy in your project. This copy of
	Dllmodul.cpp will be compiled and linked into your DLL instead of the
	Dllmodul.cpp in the Mfc\Src directory, so changes to the DllMain in it will show
	up in the final DLL.
	
	The primary caveat is that this is not a recommended solution and should only be
	used when absolutely necessary. Any changes to the code in Dllmodul.cpp will
	undoubtedly have unpredictable results. Add code only, do not remove or modify
	the existing code.
	
	For regular DLLs that use MFC in the Shared Lib, the module state should be set
	at the beginning of any added code and restored before returning from DllMain.
	Refer to the sample code in this article for an example of a DllMain that
	handles the DLL_THREAD_ATTACH and DLL_THREAD_DETACH notifications and properly
	switches the module state as necessary.
	
	Additional care must be taken when relying on DllMain being called with
	DLL_THREAD_ATTACH and DLL_THREAD_DETACH because of the following conditions:
	
	- When a thread is created in a process, the system calls DllMain with a value
	  of DLL_THREAD_ATTACH for each of the DLLs mapped into into the process.
	  However, if a process has several threads running in it when a new DLL is
	  mapped into it, DllMain isn't called with a DLL_THREAD_ATTACH value for any
	  of the existing threads.
	
	- DllMain is not called with a value DLL_THREAD_ATTACH for the process's
	  primary thread.
	
	- On thread termination (by a call to ExitThread), DllMain is called with a
	  value of DLL_THREAD_DETACH for each of the DLLs. DllMain is not called with
	  DLL_THREAD_DETACH for any thread unless a thread terminates by calling
	  ExitThread.
	
	- If a thread terminates due to a call to TerminateThread, DllMain isn't called
	  with a value DLL_THREAD_DETACH.
	
	- It is possible for a thread in a process to call LoadLibrary to load a DLL
	  causing a call to DllMain with DLL_PROCESS_ATTACH, and then on thread
	  termination, cause a call to dllMain with DLL_THREAD_DETACH without ever
	  calling DLL_THREAD_ATTACH. It is therefore best that the thread that calls
	  LoadLibrary also call FreeLibrary.
	
	NOTE: MFC CWnd objects, CDC objects, CMenu objects, GDI objects, and CImageList
	objects are restricted to a per-thread, per-module basis. In other words, MFC
	objects created in one module or thread cannot be passed to and/or used in a
	different module or thread. This has special relevance for any code added to
	handle DLL_THREAD_ATTACH or DLL_THREAD_DETACH in DllMain because DllMain is
	called for these reasons with different threads. CWnd objects, for instance,
	created in DllMain during DLL_PROCESS_ATTACH or in InitInstance will not be
	valid during DLL_THREAD_ATTACH.
	
	Sample Code
	-----------
	
	  //////////////////////////////////////////////////////////////////// 
	  // export DllMain for the DLL
	  // Add code in the specified sections only.
	  // Remove code at your own risk.
	  extern "C"
	  BOOL WINAPI DllMain(HINSTANCE hInstance, DWORD dwReason, LPVOID
	  /*lpReserved*/)
	  {
	     if (dwReason == DLL_PROCESS_ATTACH)
	     {
	  // ... Code abbreviated from DLLMODUL.CPP
	     }
	     else if (dwReason == DLL_PROCESS_DETACH)
	     {
	  // ... Code abbreviated from DLLMODUL.CPP
	     }
	  // NEW CODE ADDED HERE
	  // -------------------
	     else if (dwReason == DLL_THREAD_ATTACH)
	     {
	  #ifdef _AFXDLL
	        // set module state
	        ASSERT(AfxGetThreadState()->m_pPrevModuleState == NULL);
	        AfxGetThreadState()->m_pPrevModuleState =
	           AfxSetModuleState(AfxGetStaticModuleState());
	  #endif
	        // ADD DLL_THREAD_ATTACH CODE HERE
	        // Remember that this won't necessarily be called for
	        // every thread in the process into which this DLL is mapped
	        // Threads created by the process BEFORE the DLL
	        // was loaded will not call into DLL_THREAD_ATTACH.
	
	  #ifdef _AFXDLL
	        // restore previously-saved module state
	       VERIFY(AfxSetModuleState(AfxGetThreadState()->m_pPrevModuleState)
	               == AfxGetStaticModuleState());
	          DEBUG_ONLY(AfxGetThreadState()->m_pPrevModuleState = NULL);
	  #endif
	
	     }
	     else if (dwReason ==DLL_THREAD_DETACH)
	     {
	  #ifdef _AFXDLL
	        // set module state
	        ASSERT(AfxGetThreadState()->m_pPrevModuleState == NULL);
	        AfxGetThreadState()->m_pPrevModuleState =
	           AfxSetModuleState(AfxGetStaticModuleState());
	  #endif
	        // ADD DLL_THREAD_DETACH CODE HERE
	
	  #ifdef _AFXDLL
	        // restore previously-saved module state
	     VERIFY(AfxSetModuleState(AfxGetThreadState()->m_pPrevModuleState)
	            == AfxGetStaticModuleState());
	        DEBUG_ONLY(AfxGetThreadState()->m_pPrevModuleState = NULL);
	  #endif
	     }
	
	     return TRUE;
	  }
	
	REFERENCES
	==========
	
	For more information on MFC objects being thread local, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q147578 CWnd Derived MFC Objects and Multi-threaded Applications
	
	For more information on module state information, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q140850 How to Convert DLLTRACE to Use MFC in Shared Library
	
	For more information on why you shouldn't create a thread in DllMain, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q142243 PRB: Cannot Create an MFC Thread During DLL Startup
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jason Strayer, Microsoft Corporation
	
	
	Additional query words: DllMain DLL_THREAD_ATTACH DLL_THREAD_DETACH DLLMODUL.CPP RegDLL 4.00
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbDLL kbMFC kbVC400 kbGrpDSMFCATL kbArchitecture 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
