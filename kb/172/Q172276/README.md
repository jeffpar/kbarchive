---
layout: page
title: "Q172276: FIX: CToolTipCtrl Not Displaying Text After VS SP1, SP2 Install"
permalink: kb/172/Q172276/
---

## Q172276: FIX: CToolTipCtrl Not Displaying Text After VS SP1, SP2 Install

	Article: Q172276
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0sp1,5.0sp2
	Operating System(s): 
	Keyword(s): kbMFC kbToolTip KbUIDesign kbVC500bug kbVS97sp1bug kbVS97sp2bug kbVS97sp3fix kbGrpDSMFC
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0sp1 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0sp1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0sp2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0sp2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Applications that use CWnd::EnableTooltips to use a default CToolTipCtrl do not
	display the tooltip text for child windows after the Visual Studio Service Pack
	1 (SP1) or Service Pack 2 (SP2) has been installed.
	
	Other CToolTipCtrls and Tooltips inside of CToolBars work correctly.
	
	CAUSE
	=====
	
	The cbSize parameter of the TOOLINFO struct was changed to be of size
	AfxOldTOOLINFO to be compatible with older versions of the COMCTL32.DLL.
	
	CWnd::OnToolHitTest() was not changed, and is dependent on the cbSize to be equal
	to the size of the new TOOLINFO struct. Since cbSize is always set to
	AfxOldTOOLINFO, this function fails.
	
	RESOLUTION
	==========
	
	Override the virtual function CWnd::OnToolHitTest() to take into account the new
	cbSize value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Here is a sample OnToolHitTest() that implements the workaround:
	
	     #include <WTYPES.H>
	     #include "..\src\afximpl.h"
	
	     int CSuperTipFormView::OnToolHitTest(CPoint point, TOOLINFO* pTI) const
	     {
	
	        HWND hWndChild = NULL;
	        // find child window which hits the point
	        // (don't use WindowFromPoint, because it ignores disabled windows)
	        // see _AfxChildWindowFromPoint(m_hWnd, point);
	        ::ClientToScreen(m_hWnd, &point);
	        HWND hChild = ::GetWindow(m_hWnd, GW_CHILD);
	        for (; hChild != NULL; hChild = ::GetWindow(hChild, GW_HWNDNEXT))
	        {
	           if (_AfxGetDlgCtrlID(hChild) != (WORD)-1 &&
	                 (::GetWindowLong(hChild, GWL_STYLE) & WS_VISIBLE))
	           {
	              // see if point hits the child window
	              CRect rect;
	              ::GetWindowRect(hChild, rect);
	              if (rect.PtInRect(point))
	              {
	                 hWndChild = hChild;
	                 break;
	              }
	           }
	        }
	
	        if (hWndChild != NULL)
	        {
	           // return positive hit if control ID isn't -1
	           int nHit = _AfxGetDlgCtrlID(hWndChild);
	
	           // hits against child windows always center the tip
	           if (pTI != NULL && pTI->cbSize >= sizeof(AfxOldTOOLINFO))
	           {
	              // setup the TOOLINFO structure
	              pTI->hwnd = m_hWnd;
	              pTI->uId = (UINT)hWndChild;
	              pTI->uFlags |= TTF_IDISHWND;
	              pTI->lpszText = LPSTR_TEXTCALLBACK;
	
	         // set TTF_NOTBUTTON and TTF_CENTERTIP if it isn't a button
	         if (!(::SendMessage(hWndChild, WM_GETDLGCODE, 0, 0) &
	                    DLGC_BUTTON))
	                 pTI->uFlags |= TTF_NOTBUTTON|TTF_CENTERTIP;
	           }
	           return nHit;
	        }
	        return -1;  // not found
	     }
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q167650 FIX: Problems with ToolTips on Windows 95
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMFC kbToolTip KbUIDesign kbVC500bug kbVS97sp1bug kbVS97sp2bug kbVS97sp3fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0sp1,5.0sp2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
