---
layout: page
title: "Q189485: HOWTO: Debug MFC Module and Thread State Problems"
permalink: kb/189/Q189485/
---

## Q189485: HOWTO: Debug MFC Module and Thread State Problems

	Article: Q189485
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbDebug kbDLL kbMFC kbThread kbVC400 kbVC500 kbGrpDSMFCATL kbArchitecture
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MFC maintains three different types of data: process specific data, module
	specific data, and thread specific data. Because there can be more than one MFC
	module or thread in a process, MFC maintains state variables to keep track of
	the current module and thread instance data.
	
	Many ASSERTs can occur when objects are created in the context of one module or
	thread state, and used or destructed in another. Following are a few common
	ASSERTs in Visual C++, version 5.0, Service Pack 3:
	
	     AFXWIN1.INL line 19,  ASSERT(afxCurrentInstanceHandle != NULL)
	     AFXWIN1.INL line 22,  ASSERT(afxCurrentResourceHandle != NULL)
	     WINCORE.CPP line 871, ASSERT(pMap != NULL)
	     WINCORE.CPP line 874, ASSERT((p = pMap->LookupPermanent(m_hWnd)) != NULL
	                              || (p = pMap->LookupTemporary(m_hWnd)) != NULL)
	     WINCORE.CPP line 876, ASSERT((CWnd*)p == this)
	
	MORE INFORMATION
	================
	
	Each MFC module state is tied to an initialization of the shared MFC DLL. The
	application, as well as each regular MFC DLL and MFC ActiveX control, maintains
	a separate initialization of MFC. MFC extension DLLs use the module state of the
	calling application or DLL.
	
	To correctly switch between module states, MFC requires that each entry point
	contain an AFX_MANAGE_STATE macro that sets and restores the current module
	state. If an entry point is missing this macro, the current module state can be
	corrupted. This can result in an ASSERT, general protection fault, or invalid
	resource being loaded from somewhere else in the process, including inside
	another MFC DLL.
	
	While thread state is stored in Thread Local Storage (TLS) and is always correct
	for the running thread, it's still possible to see problems when MFC objects are
	passed between threads. MFC objects that use Windows or Graphics Device
	Interface (GDI) handles are stored in thread specific handle maps. When these
	objects are passed between threads, problems occur.
	
	Below are two macros that you can use to find these problems. You can place them
	in the stdafx.h file, and use them anywhere in the application or DLL to compare
	module or thread states:
	
	     #ifdef _DEBUG
	     #define MODULE_TRACE()  TRACE("%s(%d) : Module State nInst = 0x%X\n", \ 
	           __FILE__, __LINE__, AfxGetModuleState()->m_hCurrentInstanceHandle)
	     #define THREAD_TRACE()  TRACE("%s(%d) : Thread State Address = 0x%X\n",\ 
	           __FILE__, __LINE__, AfxGetThreadState())
	     #else
	     #define MODULE_TRACE()
	     #define THREAD_TRACE()
	     #endif  //_DEBUG
	
	Each of these macros prints out a message in the output window, identifying the
	current module or thread state. Double-clicking on the message takes you to the
	source line where they appear.
	
	NOTE: you may need to run the MFC Tracer utility from the DevStudio Tools menu,
	and turn off support for "Multiple application debugging," as this prepends the
	module name to the debug string sent to the output window.
	
	MODULE_TRACE() is most useful when you place it in every CWinApp::InitInstance()
	in the process, as well as where the object that is causing the ASSERTs is being
	created and destroyed. THREAD_TRACE() works like MODULE_TRACE(), but you should
	also place it in the CWinThread::InitInstance() of secondary threads.
	
	MODULE_TRACE() returns the same value in every function in the same DLL or .exe
	file. THREAD_TRACE() returns the same value in every method for a CWnd, or
	CGdiObject-derived class. If not, there is a problem. You can call the macros
	more often to help isolate the problem.
	
	Once the problem has been isolated, see the following references on how to fix or
	resolve the problem.
	
	REFERENCES
	==========
	
	For more information on MFC Module State, please see:
	
	  Visual C++ Online Documentation: Microsoft Foundation Class Reference; MFC
	  Technical Notes; TN058: MFC Module State Implementation.
	
	  For more information on MFC thread handle maps, please see:
	
	  Visual C++ Online Documentation: Visual C++ Programmer's Guide; Adding Program
	  Functionality; Details; Multithreading Topics; click on:
	
	  Programming tips for MFC multithreaded programming
	
	For more information on AFX_MANAGE_STATE, search on AFX_MANAGE_STATE in the VC++
	5.0 Online Documentation.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q127074 How to Use AFX_MANAGE_STATE in an OLE Control
	
	  Q140850 HOWTO: Converting DLLTRACE to Use MFC in Shared Library
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Kelly Marie
	Ward, Microsoft Corporation.
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Kelly Marie Ward, Microsoft Corporation
	
	
	Additional query words: Afx AfxModuleState ModuleState AfxThreadState ThreadState
	
	======================================================================
	Keywords          : kbDebug kbDLL kbMFC kbThread kbVC400 kbVC500 kbGrpDSMFCATL kbArchitecture 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
