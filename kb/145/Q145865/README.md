---
layout: page
title: "Q145865: FIX: Cannot Receive WM_HELP for a Subclassed Control"
permalink: kb/145/Q145865/
---

## Q145865: FIX: Cannot Receive WM_HELP for a Subclassed Control

	Article: Q145865
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbMFC KbUIDesign kbVC400 kbVC410fix kbDSupport kbGrpDSMFCATL kbArchitecture kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	WM_HELP is not received by the parent window of a control that has been
	subclassed by MFC.
	
	CAUSE
	=====
	
	CWnd, the base class of all MFC windows, has a handler for WM_HELP. This handler
	intercepts the WM_HELP message in the control itself and thus the message will
	not be sent to the parent window as expected.
	
	RESOLUTION
	==========
	
	Subclass all the controls in the CDialog, CFormView, CPropertyPage, or other
	CWnd derived class that contains the controls which have been subclassed by MFC.
	The "Sample Code" below iterates through the child windows of a given parent
	window and checks their WindowProc. If their WindowProc is AfxWndProc (MFC's
	WindowProc), it subclasses the controls again so that another window procedure
	is called first. In this WindowProc, we check for WM_HELP and call DefWindowProc
	instead of passing the message to MFC's AfxWndProc.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	MORE INFORMATION
	================
	
	CWnd::OnHelpInfo (handler for WM_HELP) sends a WM_COMMAND with ID_HELP to the
	application's main frame window. This message can be intercepted in the main
	frame, but at this point, the HELPINFO structure has been lost. The main frame
	will not have any way of determining which help context should be used.
	
	REFERENCES
	==========
	
	- Win32 SDK documentation for WM_HELP
	
	- MFC source code for CWnd::OnHelpInfo().
	
	The following code demonstrates how to work around this problem. In your class'
	OnInitDialog() or OnInitialUpdate(), call the FixHelp() function with the this
	pointer:
	
	      FixHelp(this);
	
	Sample Code
	-----------
	
	  /* Compile options needed:  Default
	  */ 
	
	  //////////////////////////////////////////////////////////////////////// 
	  // FixHelp.h - Include this file in your dialog's or form view's .CPP
	
	  void FixHelp(CWnd* pWnd); // Call this from your OnInitDialog() for a
	                            // dialog or OnInitialUpdate() for a CFormView
	
	  //////////////////////////////////////////////////////////////////////// 
	  // FixHelp.cpp - Insert this file into your project
	
	  #include "stdafx.h"
	
	  LRESULT CALLBACK ControlFixProc( HWND  hwnd, UINT  uMsg, WPARAM wParam,
	                                                          LPARAM  lParam);
	
	  void FixHelp(CWnd* pWnd)
	  {
	      // search all child windows.  If their window proc
	      // is AfxWndProc, then subclass with our window proc
	      CWnd* pWndChild = pWnd->GetWindow(GW_CHILD);
	      while(pWndChild != NULL)
	      {
	          if (GetWindowLong(pWndChild->GetSafeHwnd(),
	                                      GWL_WNDPROC) == (LONG)AfxWndProc)
	          {
	              SetWindowLong(pWndChild->GetSafeHwnd(), GWL_WNDPROC,
	                                                  (LONG)ControlFixProc);
	          }
	          pWndChild = pWndChild->GetWindow(GW_HWNDNEXT);
	      }
	  }
	
	  LRESULT CALLBACK ControlFixProc(HWND  hwnd, UINT  uMsg, WPARAM wParam,
	                                                          LPARAM  lParam)
	  {
	      if (uMsg == WM_HELP)
	      {
	          // bypass MFC's handler, message will be sent to parent
	          return DefWindowProc(hwnd, uMsg, wParam, lParam);
	      }
	      return AfxWndProc(hwnd,uMsg,wParam,lParam);
	  }
	
	  //////////////////////////////////////////////////////////////////////// 
	
	Additional query words: kbVC400bug 4.00 4.10 SubclassWindow SubclassDlgItem kbSweptVC600
	
	======================================================================
	Keywords          : kbMFC KbUIDesign kbVC400 kbVC410fix kbDSupport kbGrpDSMFCATL kbArchitecture kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
