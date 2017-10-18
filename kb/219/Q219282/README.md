---
layout: page
title: "Q219282: BUG: ScrollToPosition() Fails to Scroll CFormView"
permalink: kb/219/Q219282/
---

## Q219282: BUG: ScrollToPosition() Fails to Scroll CFormView

	Article: Q219282
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbMFC kbVC500bug kbVC600bug kbOSWinCEsearch kbGrpDSMFCATL kbNoUpdate
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Windows CE Toolkit for Visual C++, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create an MFC Windows CE application that has its view derived from
	CFormView, and call CFormView::ScrollToPosition(), the function will move the
	scroll bars but not the window. A good time to call this function is when a
	control on the CFormView's dialog is outside of the view, and the user presses
	Tab. The new control should come into view by calling
	CFormView::ScrollToPosition(), but unfortunately it does not.
	
	CAUSE
	=====
	
	This is caused by the implementation of ::ScrollWindowEx() not moving the window
	correctly. ::ScrollWindowEx() is eventually called when
	CFormView::ScrollToPosition() is called, and is part of the Windows CE API.
	
	RESOLUTION
	==========
	
	In order to get the CFormView window to move correctly, each child control on
	the dialog of the CFormView is moved to a new position to make it look like the
	window has been moved.
	
	The following external function must be defined, because it is used by the helper
	functions added to the CFormView derived class.
	
	  extern HWND WINAPI    wce_GetNextWindow(HWND hWnd, UINT nDirection);
	
	The following two functions are helper functions that will move each control on
	the dialog of the CFormView derived class to a new position.
	
	  void CMyFormViewView::ScrollToPos(POINT pt)
	  {
	  #if defined(_WIN32_WCE)
	  	ASSERT(m_nMapMode == MM_TEXT);
	  #else
	  	ASSERT(m_nMapMode > 0);     // not allowed for shrink to fit
	  	if (m_nMapMode != MM_TEXT)
	  	{
	  		CWindowDC dc(NULL);
	  		dc.SetMapMode(m_nMapMode);
	  		dc.LPtoDP((LPPOINT)&pt);
	  	}
	  #endif 
	
	  	// now in device coordinates - limit if out of range
	  	int xMax = GetScrollLimit(SB_HORZ);
	  	int yMax = GetScrollLimit(SB_VERT);
	  	if (pt.x < 0)
	  		pt.x = 0;
	  	else if (pt.x > xMax)
	  		pt.x = xMax;
	  	if (pt.y < 0)
	  		pt.y = 0;
	  	else if (pt.y > yMax)
	  		pt.y = yMax;
	
	  	ScrollToDevicePos(pt);
	  }
	
	  void CMyFormViewView::ScrollToDevicePos(POINT ptDev)
	  {
	  	ASSERT(ptDev.x >= 0);
	  	ASSERT(ptDev.y >= 0);
	
	  	// Note: ScrollToDevicePosition can and is used to scroll out-of-range
	  	//  areas as far as CScrollView is concerned -- specifically in
	  	//  the print-preview code.  Since OnScrollBy makes sure the range is
	  	//  valid, ScrollToDevicePosition does not vector through OnScrollBy.
	
	  	int xOrig = GetScrollPos(SB_HORZ);
	  	SetScrollPos(SB_HORZ, ptDev.x);
	  	int yOrig = GetScrollPos(SB_VERT);
	  	SetScrollPos(SB_VERT, ptDev.y);
	
	  	HWND hWndChild = ::GetWindow(m_hWnd, GW_CHILD);
	  	if (hWndChild != NULL)
	  	{
	  		for (; hWndChild != NULL;
	  			hWndChild = ::wce_GetNextWindow(hWndChild, GW_HWNDNEXT))
	  		{
	  			CRect rect;
	  			::GetWindowRect(hWndChild, &rect);
	  			ScreenToClient(&rect);
	  			::SetWindowPos(hWndChild, NULL,	rect.left-(ptDev.x-xOrig), rect.top-(ptDev.y-yOrig),
	  				0, 0, SWP_NOSIZE|SWP_NOACTIVATE|SWP_NOZORDER);
	  		}
	  	}
	  }
	
	The function ScrollToPos() can be called when the tab key is pressed. The
	following implementation for the override of CFormView::PreTranslateMessage()
	calls this function in order to move all the controls, so that it looks like the
	window was moved.
	
	  BOOL CMyFormViewView::PreTranslateMessage(MSG* pMsg) 
	  {
	  	if(pMsg->message == WM_KEYUP)
	  	{
	  		if(pMsg->wParam == VK_TAB)
	  		{
	  			CWnd* pWnd = GetFocus();
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
	  					TRACE(_T("control is above the client area\n"));
	  					pt.y -= rcParent.top - rcChild.top +
	  					GetSystemMetrics(SM_CXEDGE);
	  				}
	  				else if (rcChild.bottom > rcParent.bottom)
	  				{
	  					TRACE(_T("control is below the client area\n"));
	  					// If the control is taller than the current view
	  					// scroll up, sacrificing the bottom of the control.
	  					pt.y += min(rcChild.top - rcParent.top,
	  					rcChild.bottom - rcParent.bottom +
	  					GetSystemMetrics(SM_CYHSCROLL) +
	  					GetSystemMetrics(SM_CXEDGE));
	  				}
	
	  				if (rcChild.left < rcParent.left)
	  				{
	  					TRACE(_T("control is left of the client area\n"));
	  					pt.x -= rcParent.left - rcChild.left +
	  					GetSystemMetrics(SM_CYEDGE);
	  				}
	  				else if (rcChild.right > rcParent.right)
	  				{
	  					TRACE(_T("control is right of the client area\n"));
	  					// If the control is wider than the current view
	  					// scroll right, sacrificing the right edge of the control.
	  					pt.x += min(rcChild.left - rcParent.left,
	  					rcChild.right - rcParent.right +
	  					GetSystemMetrics(SM_CXVSCROLL) +
	  					GetSystemMetrics(SM_CYEDGE));
	  				}
	  				ScrollToPos(pt);  //Assume mapping mode is MM_TEXT.
	
	  			}
	  		}	//  Tab Key
	  	}	//  Key Down
	  	return CFormView::PreTranslateMessage(pMsg);
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an MFC Windows CE application with the view class derived from
	  CFormView.
	
	2. Make the dialog resource long enough so it is bigger than the screen on the
	  Windows CE device.
	
	3. Put an Edit control on the far left and far right of the dialog resource.
	
	4. Add the following code to the PreTranslateMessage handler in the CFormView
	  derived class.
	
	  BOOL CMyFormViewView::PreTranslateMessage(MSG* pMsg) 
	  {
	  	if(pMsg->message == WM_KEYUP)
	  	{
	  		if(pMsg->wParam == VK_TAB)
	  		{
	  			CWnd* pWnd = GetFocus();
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
	  					TRACE(_T("control is above the client area\n"));
	  					pt.y -= rcParent.top - rcChild.top +
	  					GetSystemMetrics(SM_CXEDGE);
	  				}
	  				else if (rcChild.bottom > rcParent.bottom)
	  				{
	  					TRACE(_T("control is below the client area\n"));
	  					// If the control is taller than the current view
	  					// scroll up, sacrificing the bottom of the control.
	  					pt.y += min(rcChild.top - rcParent.top,
	  					rcChild.bottom - rcParent.bottom +
	  					GetSystemMetrics(SM_CYHSCROLL) +
	  					GetSystemMetrics(SM_CXEDGE));
	  				}
	
	  				if (rcChild.left < rcParent.left)
	  				{
	  					TRACE(_T("control is left of the client area\n"));
	  					pt.x -= rcParent.left - rcChild.left +
	  					GetSystemMetrics(SM_CYEDGE);
	  				}
	  				else if (rcChild.right > rcParent.right)
	  				{
	  					TRACE(_T("control is right of the client area\n"));
	  					// If the control is wider than the current view
	  					// scroll right, sacrificing the right edge of the control.
	  					pt.x += min(rcChild.left - rcParent.left,
	  					rcChild.right - rcParent.right +
	  					GetSystemMetrics(SM_CXVSCROLL) +
	  					GetSystemMetrics(SM_CYEDGE));
	  				}
	  				ScrollToPosition(pt);  //Assume mapping mode is MM_TEXT.
	
	  			}
	  		}	//  Tab Key
	  	}	//  Key Down
	  	return CFormView::PreTranslateMessage(pMsg);
	  }
	
	5. Build the application and run it on the device.
	
	6. Set focus to the edit control on the left, and press Tab.
	
	7. Notice that the horizontal scroll bar moves but the view does not.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Bret Bentzinger, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMFC kbVC500bug kbVC600bug kbOSWinCEsearch kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
