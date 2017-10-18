---
layout: page
title: "Q152074: PRB: COleMessageFilter Doesn't Process WM_PAINT"
permalink: kb/152/Q152074/
---

## Q152074: PRB: COleMessageFilter Doesn't Process WM_PAINT

	Article: Q152074
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbcode kbole kbMFC kbVC400 kbVC410 kbHWx86 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an automation client calls a method of an automation server that brings up a
	modal dialog, the client area below the dialog may not re-paint itself if the
	dialog is moved over it.
	
	CAUSE
	=====
	
	The painting problem occurs because the WM_PAINT messages are in the queue, but
	are not dispatched.
	
	RESOLUTION
	==========
	
	One solution is to retrieve and dispatch all WM_PAINT messages when
	IMessageFilter::MessagePending is called. The sample code below demonstrates one
	way for this resolution to be implemented.
	
	MORE INFORMATION
	================
	
	To fix the problem with MFC, create a new class that overrides
	COleMessageFilter::OnMessagePending() as described below. Then revoke the old
	message filter and register this new one.
	
	Sample Code
	-----------
	
	     // 
	     // Definition of new COleMessageFilter-derived class.
	     // 
	     class CMyMessageFilter : public COleMessageFilter
	     {
	     public:
	        virtual BOOL OnMessagePending(const MSG* pMsg);
	     };
	
	     // 
	     // Add a member variable to the CWinApp-derived class.
	     // 
	     public:
	        CMyMessageFilter MMF;
	
	     // 
	     // Add to the CWinApp::InitInstance after calling AfxOleInit.
	     // 
	        COleMessageFilter* OldFilter = AfxOleGetMessageFilter();
	        OldFilter->Revoke();
	        MMF.Register();
	
	     // 
	     // Definition of OnMessageFilter.
	     // 
	     BOOL CMyMessageFilter::OnMessagePending(const MSG* pMsg)
	
	     {
	        MSG msg;
	
	        while (PeekMessage(&msg, NULL, WM_PAINT, WM_PAINT,
	                           PM_REMOVE | PM_NOYIELD))
	        {
	           DispatchMessage(&msg);
	        }
	
	        if (pMsg->message == WM_PAINT) return TRUE;
	
	        return FALSE;
	
	     }
	
	     // 
	     // Add to CWinApp::ExitInstance.
	     // 
	        MMF.Revoke();
	        return CWinApp::ExitInstance();
	
	Additional query words: 2.00 2.10 2.20 4.00 4.10
	
	======================================================================
	Keywords          : kbcode kbole kbMFC kbVC400 kbVC410 kbHWx86 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1
	Issue type        : kbprb
	
	=============================================================================
	
