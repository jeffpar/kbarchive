---
layout: page
title: "Q262954: HOWTO: Create a Resizeable Dialog Box with Scroll Bars"
permalink: /kb/262/Q262954/
---

## Q262954: HOWTO: Create a Resizeable Dialog Box with Scroll Bars

	Article: Q262954
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDlg kbMFC kbScrollBar kbGrpDSMFCATL
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create a resizeable dialog box with scroll bars.
	The process consists of four basic parts:
	
	- In Resource Editor, select the Horizontal Scroll and Vertical Scroll styles
	  in the properties of the dialog box.
	
	- Select the Resizing Border style to make the dialog box resizeable.
	
	- Override the WM_VSCROLL and WM_HSCROLL message handlers.
	
	- Override the WM_SIZE message handler to set the scroll bar range if the size
	  is reduced to smaller than the original size.
	
	MORE INFORMATION
	================
	
	To create a resizeable dialog box with a vertical scroll bar, perform the
	following steps:
	
	1. Use App Wizard to create a Microsoft Foundation Classes (MFC) dialog-based
	  application.
	
	2. In Resource Editor, add some controls to the dialog resource template, select
	  Vertical Scroll in the properties of the dialog box, and choose Resizing as
	  the Border style.
	
	3. Add the following protected member variables to your dialog class:
	
	  int m_nCurHeight;
	  int m_nScrollPos;
	  CRect m_rect;
	
	  Use m_nScrollPos to store the current vertical scroll position. Use
	  m_nCurHeight to store the current height of the dialog box, and to handle the
	  scrolling in the OnVScroll method.
	
	4. To get the original window size, add the following line to the OnInitDialog
	  method:
	
	  GetWindowRect(m_rect);
	  m_nScrollPos = 0;
	
	5. Add a message handler to the OnSize method for the WM_SIZE message to set the
	  scroll bar range. Set the range to 0 if the size is increased to more than
	  the original size.
	
	  void CTestDlg::OnSize(UINT nType, int cx, int cy) 
	  {
	  	CDialog::OnSize(nType, cx, cy);
	
	  	// TODO: Add your message handler code here.
	  	m_nCurHeight = cy;
	  	int nScrollMax;
	  	if (cy < m_rect.Height())
	  	{
	  	     nScrollMax = m_rect.Height() - cy;
	  	}
	  	else
	  	     nScrollMax = 0;
	
	  	SCROLLINFO si;
	  	si.cbSize = sizeof(SCROLLINFO);
	  	si.fMask = SIF_ALL; // SIF_ALL = SIF_PAGE | SIF_RANGE | SIF_POS;
	  	si.nMin = 0;
	  	si.nMax = nScrollMax;
	  	si.nPage = si.nMax/10;
	  	si.nPos = 0;
	          SetScrollInfo(SB_VERT, &si, TRUE); 
	  }
	
	6. Add a message handler for the WM_VSCROLL message to the OnVScroll method:
	
	  void CTestDlg::OnVScroll(UINT nSBCode, UINT nPos, CScrollBar* pScrollBar) 
	  {
	  	// TODO: Add your message handler code here and/or call default.
	  	int nDelta;
	  	int nMaxPos = m_rect.Height() - m_nCurHeight;
	
	  	switch (nSBCode)
	  	{
	  	case SB_LINEDOWN:
	  		if (m_nScrollPos >= nMaxPos)
	  			return;
	  		nDelta = min(nMaxPos/100,nMaxPos-m_nScrollPos);
	  		break;
	
	  	case SB_LINEUP:
	  		if (m_nScrollPos <= 0)
	  			return;
	  		nDelta = -min(nMaxPos/100,m_nScrollPos);
	  		break;
	
	           case SB_PAGEDOWN:
	  		if (m_nScrollPos >= nMaxPos)
	  			return;
	  		nDelta = min(nMaxPos/10,nMaxPos-m_nScrollPos);
	  		break;
	
	  	case SB_THUMBPOSITION:
	  		nDelta = (int)nPos - m_nScrollPos;
	  		break;
	
	  	case SB_PAGEUP:
	  		if (m_nScrollPos <= 0)
	  			return;
	  		nDelta = -min(nMaxPos/10,m_nScrollPos);
	  		break;
	  	
	           default:
	  		return;
	  	}
	  	m_nScrollPos += nDelta;
	  	SetScrollPos(SB_VERT,m_nScrollPos,TRUE);
	  	ScrollWindow(0,-nDelta);
	  	CDialog::OnVScroll(nSBCode, nPos, pScrollBar);
	  }
	
	7. Build and run the application. Resize the dialog box to show the vertical
	  scroll bar.
	
	For horizontal scrolling, add the WM_HSCROLL message handler in a similar way,
	and add the necessary code to the OnSize and OnInitDialog methods.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDlg kbMFC kbScrollBar kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
