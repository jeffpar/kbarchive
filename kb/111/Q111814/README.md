---
layout: page
title: "Q111814: HOWTO: Get the Current Document in an MDI Application"
permalink: kb/111/Q111814/
---

## Q111814: HOWTO: Get the Current Document in an MDI Application

	Article: Q111814
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbDocView kbMFC kbVC kbDSupport kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To get a pointer to the currently active document from an MDI application, use
	the CMDIFrameWnd::MDIGetActive() function. MDIGetActive() returns a pointer to
	the active CMDIChildWnd. This CMDIChildWnd * enables you to get a valid pointer
	to the currently active document via GetActiveDocument().
	
	See the online help and "Class Libraries Reference" for more information about
	these functions.
	
	MORE INFORMATION
	================
	
	The sample below shows how to get a valid pointer to the currently active
	document anywhere within an MDI application.
	
	Sample Code
	-----------
	
	     /* Compile options needed:
	     */ 
	     void Some_Function()
	     {
	       CMyDoc   *pActiveDoc;      // CMyDoc derived from CDocument
	       CMyFrame *pActiveFrame;    // CMyFrame derived from CMDIChildWnd
	       pActiveFrame =(CMyFrame*)
	                 ((CMainFrame*)(AfxGetApp()-<m_pMainWnd))-<MDIGetActive();
	      // MFC 2.5 and later versions contain AfxGetMainWnd(), which
	      // can be used to gain access to the main window instead of
	      // "AfxGetApp()->m_pMainWnd
	       pActiveDoc = (CMyDoc*)pActiveFrame->GetActiveDocument();
	     }
	
	Additional query words: MFC CDocument kbSweptVC600
	
	======================================================================
	Keywords          : kbDocView kbMFC kbVC kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
