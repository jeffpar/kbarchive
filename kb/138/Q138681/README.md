---
layout: page
title: "Q138681: PRB: Windows Flash and Disappear in Dialog-Based Applications"
permalink: /kb/138/Q138681/
---

## Q138681: PRB: Windows Flash and Disappear in Dialog-Based Applications

	Article: Q138681
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbDlg kbMFC kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL kbDialog
	Last Modified: 27-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a default dialog-based application, windows created after returning from
	DoModal flash and disappear.
	
	CAUSE
	=====
	
	In an MFC application when the main window associated with the application is
	destroyed, a WM_QUIT message is posted to the application. This message is
	posted by calling AfxPostQuitMessage from CWnd::OnNcDestroy for the main window.
	AfxPostQuitMessage calls PostQuitMessage, which performs some processing and
	then posts the WM_QUIT message to the application.
	
	The PostQuitMessage function indicates to Windows that a thread has made a
	request to terminate. Any window that is created after calling the
	PostQuitMessage function will be immediately destroyed. The effect is that the
	window flashes for a brief moment and then disappears. If DoModal is called to
	display another modal dialog box, control returns immediately from this
	function.
	
	RESOLUTION
	==========
	
	Change the line that sets the m_pMainWnd to point to dialog object, into a
	comment. Or set m_pMainWnd for the CWinApp-derived object to NULL before control
	gets to CWnd::OnNcDestroy for the dialog object. One way of doing this is to
	override OnNcDestroy for the CDialog-derived object. In the overridden function,
	set the m_pMainWnd to NULL before calling the base class.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following code can be implemented in the CDialog-derived class to prevent
	PostQuitMessage() from being called when the dialog box in a default
	dialog-based application is dismissed.
	
	Steps to Resolve Behavior
	-------------------------
	
	1. Place a message map entry for the WM_NCDESTROY message in the CMyDialog class
	  implementation file.
	
	           ON_WM_NCDESTROY()
	
	2. Add the OnNcDestory member function to the CMyDialog class and set the
	  m_pMainWnd member variable of the application object to NULL.
	
	           void CMyDialog::OnNcDestroy()
	           {
	              AfxGetApp()->m_pMainWnd = NULL;
	              CDialog::OnNcDestroy();
	           }
	
	Additional query words: messagebox
	
	======================================================================
	Keywords          : kbcode kbDlg kbMFC kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL kbDialog 
	Technology        : kbAudDeveloper kbMFC kbVCNET
	Version           : :2.0,2.1,2.2,4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
