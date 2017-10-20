---
layout: page
title: "Q133034: FIX: CSpinButtonCtrl Causes Assertion in viewscrl.cpp line 698"
permalink: /kb/133/Q133034/
---

## Q133034: FIX: CSpinButtonCtrl Causes Assertion in viewscrl.cpp line 698

{% raw %}

	Article: Q133034
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbMFC kbVC210fix kbVC220fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, versions 2.1, 2.2, on platform(s):
	      - the operating system: Microsoft Windows NT, on platform(s):
	         - the operating system: Microsoft Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a CSpinButtonCtrl is created as a child of a view derived from CScrollView,
	user interaction (clicking with the mouse or pressing an arrow key) with the
	Up-Down Control's arrow buttons causes an assertion in the viewscrl.cpp file on
	line 698.
	
	CAUSE
	=====
	
	A WM_VSCROLL message (or a WM_HSCROLL message if the style is UDS_HORZ) is sent
	as a notification when the user interacts with the Up-Down Control's arrow
	buttons, either by clicking them or by pressing an arrow key.
	
	The problem is that CScrollView has implemented handlers for messages sent by its
	own scrollbars, so even when CSpinButtonCtrl is the source of the message, the
	first opportunity to handle the message occurs in the parent's (CScrollView)
	implementation of the handler. CScrollView's handler makes sure the message was
	sent by its own scrollbars, or the assertion occurs.
	
	Here is the code for default implementation of CScrollView::OnVScroll from
	viewscrl.cpp:
	
	     void CScrollView::OnVScroll(UINT nSBCode, UINT nPos,
	                                  CScrollBar* pScrollBar)
	     {
	       ASSERT(pScrollBar == GetScrollBarCtrl(SB_VERT));
	   
	       UNUSED pScrollBar;  // unused in release builds
	   
	       OnScroll(MAKEWORD(-1, nSBCode), nPos);
	     }
	
	Because the message originated from the Up-Down Control and not the parent's
	scrollbar, the assertion in the first line fails.
	
	RESOLUTION
	==========
	
	Add a handler for the WM_VSCROLL or WM_HSCROLL message in the Up-Down control's
	parent class. Test to see if the message originated from the Up- Down control or
	the scrollbar of the parent. If it originated from the Up- Down control, perform
	operations intended for the control, otherwise, pass the call to the parent's
	default handler as in this example:
	
	  // Here CMyFormView is derived from CFormView, which itself is
	  // derived from CScrollView
	
	  void CMyFormView::OnVScroll(UINT nSBCode, UINT nPos,
	                               CScrollBar* pScrollBar)
	  {
	           // IDC_SPINCONTROL is the ID of the Up-Down Control
	    if ((pScrollBar != NULL) &&
	              (pScrollBar->GetDlgCtrlID() == IDC_SPINCONTROL))
	    {
	      // Do whatever you want to do when Up-Down control buttons are
	      // pressed
	
	        TRACE("spin button\r\n"); // for debugging..
	        return;
	    }
	
	    CFormView::OnVScroll(nSBCode, nPos, pScrollBar);
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	Additional query words: 2.10 2.20 3.10 3.20 spin control CFormView
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbMFC kbVC210fix kbVC220fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
