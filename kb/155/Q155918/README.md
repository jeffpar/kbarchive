---
layout: page
title: "Q155918: HOWTO: How To Scroll a CFormView to See the Controls"
permalink: /kb/155/Q155918/
---

## Q155918: HOWTO: How To Scroll a CFormView to See the Controls

{% raw %}

	Article: Q155918
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbcode kbDocView kbMFC kbScrollBar KbUIDesign kbVC400 kbVC420 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a CFormView is resized to something smaller than the size of the dialog box
	template that it contains and users need to manipulate a control that is not in
	the visible view area, they must use the scroll bars to get the control into the
	visible area. This sample code demonstrates how to scroll the CFormView
	automatically if users tab to a control that is not in view.
	
	MORE INFORMATION
	================
	
	The code sample below works with a CFormView-derived class that contains a
	dialog box template with more than one control in it (typically an edit
	control). To see its effect, you must resize the view so that at least one of
	the controls is not in the current visible client area, then press the TAB key
	to change focus to that control.
	
	This code works by handling WM_CTLCOLOR messages, checking to see if the control
	being draw has focus, and scrolling the CFormView to make sure it is visible.
	WM_CTLCOLOR messages are sent by most controls to their parent before they
	redraw themselves. The WM_CTLCOLOR message is used instead of the obvious
	choice, WM_SETFOCUS, because it is sent to the CFormView, not to the actual
	control. Using WM_SETFOCUS requires subclassing each control.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	     The class 'CScrollFormView' is derived from CFormView
	  */ 
	
	  HBRUSH CScrollFormView::OnCtlColor(CDC* pDC, CWnd* pWnd, UINT nCtlColor)
	  {
	     HBRUSH hbr = CFormView::OnCtlColor(pDC, pWnd, nCtlColor);
	
	     if (GetFocus()->m_hWnd == pWnd->m_hWnd)
	     {
	        CRect rcChild, rcParent, rcTemp;
	
	        pWnd->GetWindowRect(&rcChild);
	        GetWindowRect(&rcParent);
	
	       //Get document size. Assume mapping mode is MM_TEXT and ViewPort
	       //and Window origins have not been set so we can also assume LP==DP.
	        CSize size = GetTotalSize();
	
	        // Determine if scroll bars are visible
	        // and subtract their size from the view.
	        if (size.cx > rcParent.right - rcParent.left)
	           rcParent.bottom -= GetSystemMetrics(SM_CYHSCROLL);
	        if (size.cy > rcParent.bottom - rcParent.top)
	           rcParent.right -= GetSystemMetrics(SM_CXVSCROLL);
	
	        // Succeed only if no part of the child appears in the parent.
	        rcTemp.IntersectRect(rcChild, rcParent);
	
	        if (rcTemp != rcChild)
	        {
	           POINT pt;
	
	           pt.x = GetDeviceScrollPosition().x;
	           pt.y = GetDeviceScrollPosition().y;
	
	           if (rcChild.top < rcParent.top)
	           {
	              TRACE("control is above the client area\n");
	              pt.y -= rcParent.top - rcChild.top +
	                 GetSystemMetrics(SM_CXEDGE);
	           }
	           else if (rcChild.bottom > rcParent.bottom)
	           {
	              TRACE("control is below the client area\n");
	              // If the control is taller than the current view
	              // scroll up, sacrificing the bottom of the control.
	              pt.y += min(rcChild.top - rcParent.top,
	                 rcChild.bottom - rcParent.bottom +
	                 GetSystemMetrics(SM_CYHSCROLL) +
	                 GetSystemMetrics(SM_CXEDGE));
	           }
	
	           if (rcChild.left < rcParent.left)
	           {
	              TRACE("control is left of the client area\n");
	              pt.x -= rcParent.left - rcChild.left +
	                 GetSystemMetrics(SM_CYEDGE);
	           }
	           else if (rcChild.right > rcParent.right)
	           {
	              TRACE("control is right of the client area\n");
	              // If the control is wider than the current view
	              // scroll right, sacrificing the right edge of the control.
	              pt.x += min(rcChild.left - rcParent.left,
	                 rcChild.right - rcParent.right +
	                 GetSystemMetrics(SM_CXVSCROLL) +
	                 GetSystemMetrics(SM_CYEDGE));
	           }
	
	           ScrollToPosition(pt);  //Assume mapping mode is MM_TEXT.
	        }
	     }
	
	     // TODO: Return a different brush if the default is not desired.
	     return hbr;
	  }
	
	Additional query words: 4.00 4.10 4.20 kbdsi
	
	======================================================================
	Keywords          : kbcode kbDocView kbMFC kbScrollBar KbUIDesign kbVC400 kbVC420 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
