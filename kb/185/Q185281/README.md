---
layout: page
title: "Q185281: PRB: OnLButtonDblClk() Not Called in Windows CE"
permalink: /kb/185/Q185281/
---

## Q185281: PRB: OnLButtonDblClk() Not Called in Windows CE

	Article: Q185281
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.0,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++ for Windows CE, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Message handlers for the WM_LBUTTONDBLCLK, WM_RBUTTONDBLCLK and WM_MBUTTONDBLCLK
	messages are not called for a Microsoft Foundation Classes (MFC) application
	running in the Windows CE emulation environment or on a handheld PC (H/PC).
	
	CAUSE
	=====
	
	For a window to receive the WM_LBUTTONDBLCLK, WM_RBUTTONDBLCLK, or
	WM_MBUTTONDBLCLK messages, the class definition of the window must include the
	CS_DBLCLKS style. By default, MFC does not add the CS_DBLCLKS style to the class
	definition that it uses for single document interface (SDI) frame windows and
	views on the Windows CE platform.
	
	RESOLUTION
	==========
	
	To work around this problem, register a new class that includes the CS_DBLCLKS
	style and use this new class when you create the window. You can do this in the
	PreCreateWindow() method of the window that handles the double-click messages,
	as in the following code:
	
	Sample Code
	-----------
	
	     BOOL CtestView::PreCreateWindow(CREATESTRUCT& cs)
	     {
	        if (CView::PreCreateWindow(cs))
	        {
	           WNDCLASS wc;
	           // Get the class information for the default MFC view class.
	           ::GetClassInfo(AfxGetInstanceHandle(),cs.lpszClass,&wc);
	
	           // Register a new class using the attributes of the default
	           // view class, and make it the new default class.
	           cs.lpszClass = AfxRegisterWndClass(wc.style | CS_DBLCLKS,
	              wc.hCursor,wc.hbrBackground,wc.hIcon);
	           return TRUE;
	        }
	        return FALSE;
	     }
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: kbwince100 kbwince200 kbVC500 kbnokeyword
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbZNotKeyword3 kbVC100WinCE kbVC200WinCE
	Version           : WINDOWS:1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	
