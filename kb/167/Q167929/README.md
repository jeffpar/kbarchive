---
layout: page
title: "Q167929: PRB: Memory Leaks Reported When Using Multiple MFC DLLs"
permalink: /kb/167/Q167929/
---

## Q167929: PRB: Memory Leaks Reported When Using Multiple MFC DLLs

{% raw %}

	Article: Q167929
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDLL kbMFC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you debug a project that contains MFC regular (USRDLL) DLLs or ActiveX
	Controls (OCX), you may see memory leaks similar to the following reported in
	the debugger:
	
	  a CDynLinkLibrary object at $00410F70, 64 bytes long
	  a CDynLinkLibrary object at $00410F70, 64 bytes long
	  {38} client block at 0x00410D80, subtype 0, 64 bytes long.
	  a CDynLinkLibrary object at $00410D80, 64 bytes long
	  a CDynLinkLibrary object at $00410D80, 64 bytes long
	  {36} client block at 0x00410C60, subtype 0, 64 bytes long.
	  a CDynLinkLibrary object at $00410C60, 64 bytes long
	  a CDynLinkLibrary object at $00410C60, 64 bytes long
	
	CAUSE
	=====
	
	These memory leaks are reported when multiple versions of the MFC DLL are loaded
	in the same process. Since MFC extension (AFXDLL) DLLs require the exact same
	MFC DLL as the call application, this problem can only occur when using MFC
	regular (USRDLL) DLLs or ActiveX Controls (OCX) that use the shared version of
	MFC.
	
	The most common case is mixing ANSI (MFC4xd.DLL) and UNICODE (MFC4xxUd.DLL)
	versions of MFC in the same process. This can also occur when mixing MFC42d.DLL
	and MFC40d.DLL.
	
	RESOLUTION
	==========
	
	These memory leak notifications are false, and can be ignored. Since neither
	copy of MFC knows about the other ones, it's not easy to stop these false leaks
	from being reported. However, it is possible to separate the false leaks from
	the potential real leaks. This can be done by overriding CWinApp::ExitInstance()
	in both the EXE and DLL and placing TRACE() statements in them:
	
	     int CTestDllApp::ExitInstance()
	     {
	        TRACE(_T("ExitInstance() for regular DLL: TESTDLL\n"));
	
	        return CWinApp::ExitInstance();
	     }
	
	Only the memory leaks that are detected after the last CWinApp::ExitInstance() is
	called are true memory leaks.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Consider the following application/DLLs:
	
	    -------------               --------------
	    =           =               =            =
	    =   MFC     =    Calls      =    MFC     =
	    =   APP     = ------------> =   USRDLL   =
	    =           =               =            =
	    =           =               =            =
	    -------------               --------------
	          |                           |
	          |                           |
	          | Calls                     | Calls
	          |                           |
	          \/                         \/ 
	    -------------               --------------
	    =           =               =            =
	    =           =               =            =
	    =   MFC40d  =               =   MFC40Ud  =
	    =    DLL    =               =    DLL     =
	    =           =               =            =
	    -------------               --------------
	               \                 / 
	                \               / 
	                 \ Calls       / Calls
	                  \           / 
	                  \/         \/ 
	                  -------------
	                  =           =
	                  =           =
	                  =  MSVCR40d =
	                  =   (CRT)   =
	                  =           =
	                  -------------
	
	The MFC Application that is built with the ANSI (MFC40d.DLL) version of MFC calls
	the MFC USRDLL, which is built with the UNICODE (MFC40Ud.DLL) version of MFC.
	Both MFC versions use the same C run-time (CRT) DLL, MSVCR40d.DLL. Since MFC
	USRDLLs are "black-boxes", there should be no problems with calling a UNICODE
	MFC USRDLL from an ANSI MFC Application.
	
	However, since the UNICODE (MFC40ud.DLL) and ANSI (MFC40d.DLL) MFC DLLs both use
	the same CRT DLL, false memory leaks are reported on all the objects allocated
	in the MFC USRDLL. This occurs because MFC relies on the CRT DLL to allocate and
	track all memory. It does not separate the memory allocations from the different
	versions of MFC. When one of the MFC DLLs unloads, it calls the CRT to do a
	memory dump, assuming everything left in the heap is a memory leak. However,
	this assumption is incorrect since there are two multiple copies of MFC in
	memory.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Kelly Marie
	Ward, Microsoft Corporation.
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Kelly Marie Ward, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDLL kbMFC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
