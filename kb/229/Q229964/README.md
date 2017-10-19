---
layout: page
title: "Q229964: FIX: AfxMessageBox Help Fails to Bring Up Proper Topic"
permalink: /kb/229/Q229964/
---

## Q229964: FIX: AfxMessageBox Help Fails to Bring Up Proper Topic

	Article: Q229964
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCSHelp kbDlg kbMFC kbVC600 kbVC600bug kbDSupport kbBug kbGrpDSMFCATL kbNoUpdate kbISS
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When F1 is pressed to invoke context sensitive help in response to a call to
	AfxMessageBox(), the default help topic is brought up instead of the help topic
	associated with the call to AfxMessageBox(). This problem may be seen when
	MFC42.DLL is updated with a version greater than or equal to 6.0.8168.0.
	
	CAUSE
	=====
	
	The implementation of context sensitive help for AfxMessageBox() was changed for
	Visual C++ version 6.0. A private message WM_HELPPROMPTADDR is sent to retrieve
	the address of m_dwPromptContext from the associated frame window. MFC uses an
	internal helper function CWnd::GetSafeOwner_(), to determine which window to
	send this message to. MFC uses the value returned by the pWndTop parameter of
	CWnd::GetSafeOwner_() for the target window handle. The problem is that in most
	scenarios this value is NULL. The NULL value causes the call
	::SendMessage(hWndTop, WM_HELPPROMPTADDR, 0, 0) to have no affect.
	
	RESOLUTION
	==========
	
	One workaround for this problem is to override the virtual function
	CWinApp::DoMessageBox(), and copy and paste the base class implementation. Next,
	change the SendMessage call to use the HWND returned from
	AfxGetMainWnd()->GetSafeHwnd(), for example:
	
	  #include "afxpriv.h"
	  ...
	
	  int CHelpApp::DoMessageBox(LPCTSTR lpszPrompt, UINT nType, UINT nIDPrompt) 
	  {
	  	// disable windows for modal dialog
	  	EnableModeless(FALSE);
	  	HWND hWndTop;
	  	HWND hWnd = CWnd::GetSafeOwner_(NULL, &hWndTop);
	
	  	// set help context if possible
	  	DWORD* pdwContext = NULL;
	  	HWND hWnd2 = AfxGetMainWnd()->GetSafeHwnd();
	  	if (hWnd2 != NULL)
	  	{
	  		// use app-level context or frame level context
	  		LRESULT lResult = ::SendMessage(hWnd2, WM_HELPPROMPTADDR, 0, 0); // Use "MainWnd" HWND
	  		if (lResult != 0)
	  			pdwContext = (DWORD*)lResult;
	  	}
	  	// for backward compatibility use app context if possible
	  	if (pdwContext == NULL && this != NULL)
	  		pdwContext = &m_dwPromptContext;
	
	  	DWORD dwOldPromptContext = 0;
	  	if (pdwContext != NULL)
	  	{
	  		// save old prompt context for restoration later
	  		dwOldPromptContext = *pdwContext;
	  		if (nIDPrompt != 0)
	  			*pdwContext = HID_BASE_PROMPT+nIDPrompt;
	  	}
	
	  	// determine icon based on type specified
	  	if ((nType & MB_ICONMASK) == 0)
	  	{
	  		switch (nType & MB_TYPEMASK)
	  		{
	  		case MB_OK:
	  		case MB_OKCANCEL:
	  			nType |= MB_ICONEXCLAMATION;
	  			break;
	
	  		case MB_YESNO:
	  		case MB_YESNOCANCEL:
	  			nType |= MB_ICONEXCLAMATION;
	  			break;
	
	  		case MB_ABORTRETRYIGNORE:
	  		case MB_RETRYCANCEL:
	  			// No default icon for these types, since they are rarely used.
	  			// The caller should specify the icon.
	  			break;
	  		}
	  	}
	
	  #ifdef _DEBUG
	  	if ((nType & MB_ICONMASK) == 0)
	  		TRACE0("Warning: no icon specified for message box.\n");
	  #endif
	
	  	TCHAR szAppName[_MAX_PATH];
	  	LPCTSTR pszAppName;
	  	if (this != NULL)
	  		pszAppName = m_pszAppName;
	  	else
	  	{
	  		pszAppName = szAppName;
	  		GetModuleFileName(NULL, szAppName, _MAX_PATH);
	  	}
	
	  	int nResult =
	  		::MessageBox(hWnd, lpszPrompt, pszAppName, nType);
	
	  	// restore prompt context if possible
	  	if (pdwContext != NULL)
	  		*pdwContext = dwOldPromptContext;
	
	  	// re-enable windows
	  	if (hWndTop != NULL)
	  		::EnableWindow(hWndTop, TRUE);
	  	EnableModeless(TRUE);
	
	  	return nResult;
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an AppWizard MFC SDI application with context sensitive help support.
	
	2. Add a menu item called Message Box Help.
	
	3. In the handler for the Message Box Help menu item add the following call:
	  AfxMessageBox("Message Box Help", MB_OK, IDD_ABOUTBOX-0x10000);.
	
	4. Compile and run the program.
	
	5. Invoke Message Box Help menu item.
	
	6. When the message box is displayed, press F1.
	
	NOTE: The default help topic is displayed - not the help topic for the About
	box.
	
	(c) Microsoft Corporation May 25, 1999, All Rights Reserved.
	Contributions by Mike Francis, Microsoft Corporation
	
	
	REFERENCES
	==========
	
	CWnd::GetSafeOwner, AfxMessageBox
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCSHelp kbDlg kbMFC kbVC600 kbVC600bug kbDSupport kbBug kbGrpDSMFCATL kbNoUpdate kbISS 
	Technology        : kbAudDeveloper kbMFC
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
