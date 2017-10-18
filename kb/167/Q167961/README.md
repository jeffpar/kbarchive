---
layout: page
title: "Q167961: FIX: F1 Help Routed Wrongly for Additional Top-Level Windows"
permalink: kb/167/Q167961/
---

## Q167961: FIX: F1 Help Routed Wrongly for Additional Top-Level Windows

	Article: Q167961
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2
	Operating System(s): 
	Keyword(s): kbDocView kbMFC kbVC152bug kbVC200bug kbVC210bug kbVC220bug kbVC400fix kbGrpDSMFCATL kb
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, version 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you press the F1 key to display help for a window that is not a descendant
	of the application's main window, it does not display the proper help text.
	
	CAUSE
	=====
	
	MFC assumes that the currently active window is a descendant of the main window.
	So, for windows that are children of the desktop, MFC routes WM_COMMANDHELP to
	the mainframe instead of the active window.
	
	RESOLUTION
	==========
	
	Add an ID_HELP command handler in the CMainFrame that searches for the active
	window based on the window with the current focus and walks up the parent tree
	sending the WM_COMMANDHELP message. Use the code shown in the sample code
	section.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been fixed in Visual C++ version
	4.0.
	
	MORE INFORMATION
	================
	
	When you press the F1 key, an ID_HELP command message is generated and is
	usually routed and handled in the application's main frame message map using
	CFrameWnd::OnHelp(). Then, the OnHelp functions (CFrameWnd and CWnd) finds the
	active window using ::GetLastActivePopup(hWnd), thereby passing the handle to
	the application's main frame. Unfortunately, this only returns windows handles
	that are a descendant of hWnd. If another top-level window was active when you
	pressed the F1 key, the main frame window is still used and the subsequent
	WM_COMMANDHELP messages is never sent to the correct active window.
	
	The sample code below fixes this bug by sending the message to the window with
	the current focus before going through the default MFC logic.
	
	Sample Code
	-----------
	
	     ////////////////////////////////////// 
	     // HEADER file
	     class CMainFrame : public CMDIFrameWnd
	     {
	        afx_msg void OnHelp();
	        ...
	
	     ////////////////////////////////////// 
	     // IMPLEMENTATION file
	     #include "afxpriv.h"
	
	     BEGIN_MESSAGE_MAP(CMainFrame, CMDIFrameWnd)
	     ...
	        ON_COMMAND(ID_HELP, CMainFrame::OnHelp)
	     END_MESSAGE_MAP()
	
	     void CMainFrame::OnHelp()
	     {
	        if (m_dwPromptContext != 0)
	        {
	           if (m_dwPromptContext !=
	              HID_BASE_PROMPT + AFX_IDP_FAILED_TO_LAUNCH_HELP)
	              AfxGetApp()->WinHelp(m_dwPromptContext);
	           return;
	        }
	
	        // attempt to get help from whoever has the focus
	        HWND hWnd = ::GetFocus();
	        while (hWnd != NULL)
	        {
	           // attempt to process help
	           if (::SendMessage(hWnd, WM_COMMANDHELP, 0, 0))
	              return;
	
	           // check next parent/owner in the parent/owner chain
	           CWnd* pWnd = CWnd::FromHandlePermanent(hWnd);
	           if (pWnd != NULL)
	              hWnd = pWnd->GetOwner()->GetSafeHwnd();
	           else
	              // otherwise, return parent in the Windows sense
	              hWnd = ::GetParent(hWnd);
	        }
	        CWnd::OnHelp();
	
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Adam Kim, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDocView kbMFC kbVC152bug kbVC200bug kbVC210bug kbVC220bug kbVC400fix kbGrpDSMFCATL kbNoUpdate kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
