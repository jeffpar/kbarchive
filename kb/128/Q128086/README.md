---
layout: page
title: "Q128086: PRB: Failing to Initialize OLE Generates Out of Memory Error"
permalink: kb/128/Q128086/
---

## Q128086: PRB: Failing to Initialize OLE Generates Out of Memory Error

	Article: Q128086
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbMFC kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbVS600 kbG
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the OLE .DLL files are not initialized with a call to AfxOleInit(),
	subsequent OLE calls will fail. For 32-bit MFC applications, debug output sent
	to a debugging window may show these errors:
	
	  Throwing exception of type COleException
	  sCode = 0x8007000E E_OUTOFMEMORY
	
	  - or -
	
	  sCode = 0x80030008 STG_E_INSUFFICIENTMEMORY
	
	For 16-bit MFC applications, debug output may show:
	
	  Throwing exception of type COleException
	  sCode = 0x80000002 E_OUTOFMEMORY
	
	  - or -
	
	  sCode = 0x80030008 STG_E_INSUFFICIENTMEMORY
	
	RESOLUTION
	==========
	
	AfxOleInit() calls OleInitialize(LPMALLOC), which sets the task memory allocator
	used by OLE. If this is not done, OLE cannot perform memory allocations and any
	OLE calls will fail. Placing a call to AfxOleInit() in the InitInstance() of an
	MFC application will fix this problem. The first few lines from the
	InitInstance() of HIERSVR (MFC OLE sample provided with Visual C++) below, shows
	the proper syntax for calling AfxOleInit().
	
	Sample Code
	-----------
	
	     /* Compile options needed: standard MFC project
	     */ 
	     
	     BOOL CServerApp::InitInstance()
	     {
	         // OLE 2.0 initialization
	         if (!AfxOleInit())
	         {
	             AfxMessageBox(IDP_OLE_INIT_FAILED);
	             return FALSE;
	         }
	     ... function continues ....
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbMFC kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbVS600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,4.0,4.1,5.0,6.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
