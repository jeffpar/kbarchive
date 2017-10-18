---
layout: page
title: "Q193101: FIX: Unhandled Exception Using MFC Sockets in Visual C++ 6.0"
permalink: kb/193/Q193101/
---

## Q193101: FIX: Unhandled Exception Using MFC Sockets in Visual C++ 6.0

	Article: Q193101
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbMFC kbVC600bug kbWinsock kbVS600sp3fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using MFC sockets in secondary threads in a statically linked MFC Visual
	C++ 6.0 application, an unhandled exception occurs.
	
	CAUSE
	=====
	
	The reason for the unhandled exception is that an object of type CMapPtrToPtr
	pointer, pointed to by m_pmapSocketHandle, is never created.
	
	RESOLUTION
	==========
	
	The handle maps used by the sockets need to be created for each thread. The
	following code shows a function to do this:
	
	     void SocketThreadInit()
	     {
	     #ifndef _AFXDLL
	     #define _AFX_SOCK_THREAD_STATE AFX_MODULE_THREAD_STATE
	     #define _afxSockThreadState AfxGetModuleThreadState()
	
	        _AFX_SOCK_THREAD_STATE* pState = _afxSockThreadState;
	        if (pState->m_pmapSocketHandle == NULL)
	           pState->m_pmapSocketHandle = new CMapPtrToPtr;
	        if (pState->m_pmapDeadSockets == NULL)
	           pState->m_pmapDeadSockets = new CMapPtrToPtr;
	        if (pState->m_plistSocketNotifications == NULL)
	           pState->m_plistSocketNotifications = new CPtrList;
	
	     #endif
	     }
	
	This function should be called once in each secondary thread before the first
	socket is created in the new thread.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. You will need to call
	AfxSocketInit() in each thread that uses sockets.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	In MFC socket applications, AfxSocketInit is called once, by default, in the
	primary thread. This function creates the handle maps for the primary thread
	when statically linked to MFC. However, when a secondary thread is created,
	these per-thread handle maps are not created. AfxSocketInit must be called in
	each thread to initialize the socket libraries.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an application that creates a socket in a secondary thread and uses
	  MFC in a static link library. You can use the MultiSoc sample described in
	  the following Knowledge Base article by changing the project settings to use
	  MFC in a static library:
	
	  Q175668 FILE: MultiSoc: Illustrates Using Sockets in Multiple Threads
	
	2. Run the application and create a socket in a secondary thread.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q175668 FILE: MultiSoc: Illustrates Using Sockets in Multiple Threads
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Isaac L. Varon, Microsoft Corporation
	
	
	Additional query words: LookupHandle CAsyncSocket AttachHandle GetValueAt assert wincore.cpp 980 Application Error 0xc0000005 m_pHashTable CSocket access violation debug assertion failed
	
	======================================================================
	Keywords          : kbMFC kbVC600bug kbWinsock kbVS600sp3fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
