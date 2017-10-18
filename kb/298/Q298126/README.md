---
layout: page
title: "Q298126: PRB: MFC Vertical Toolbar Buttons Missing After Customization"
permalink: kb/298/Q298126/
---

## Q298126: PRB: MFC Vertical Toolbar Buttons Missing After Customization

	Article: Q298126
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbATL kbDSupport kbGrpDSMFCATL kbIDL kbMIDL kbgrpdsvc
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Foundation Classes (MFC) toolbar is positioned vertically,
	customization of the toolbar may result in one or more of the buttons failing to
	appear. The customization may be the result of adding or removing buttons
	through the use of the Customize() function of CToolBarCtrl or similar
	programmatic methods.
	
	CAUSE
	=====
	
	Originally, MFC provided all details of objects such as toolbars, but starting
	with version 4.0, MFC began wrapping the common control implementations of
	toolbars, status bars, and so forth. This can result in a need to compensate for
	minor differences in the implementation of MFC controlbar classes.
	
	RESOLUTION
	==========
	
	The following code can correctly resize and redraw an MFC vertical toolbar,
	whether docked or floating, after buttons have been added or removed. The
	OnToolBarChange handler below is called in response to the TBN_TOOLBARCHANGE
	notification. The code essentially takes three steps. First, CalcDynamicLayout
	is called with the proper parameters for docked/floating/vertical/horizontal
	states. Second, DockControlBar (or FloatControlBar) is called, primarily to
	leverage the calls these functions make to SetWindowPos. Finally, DrawBorders is
	called to complete the redraw.
	
	Add the following entry to your CMainFrame's message map manually
	(AFX_IDW_TOOLBAR is the ID of the toolbar).
	
	      ON_NOTIFY(TBN_TOOLBARCHANGE, AFX_IDW_TOOLBAR, OnToolBarChange)
	
	Add the OnToolBarChange member function to CMainFrame class and add the following
	code:
	
	  void CMainFrame::OnToolBarChange(NMHDR *notify, LRESULT *result) 
	  {	
	  	// Update the toolbar icons.	
	  	CFrameWnd* pFrame;	 
	  	if (m_wndToolBar.IsFloating()) 
	  		pFrame = m_wndToolBar.GetParentFrame(); 
	  	else		
	  		pFrame = m_wndToolBar.GetDockingFrame(); 	
	
	  	CRect rectActualSize;	
	  	CRect rectActualFrameSize;	
	  	CRect rect; 	
	  	CSize size; 	
	
	          // Get the ToolBar's rectangle
	  	m_wndToolBar.GetWindowRect(&rect);	
	          // Are we horizontal?
	  	BOOL bHorz = (m_wndToolBar.m_dwStyle & CBRS_ORIENT_HORZ) != 0; 
	  	if ((m_wndToolBar.m_dwStyle & CBRS_FLOATING) &&	
	  		(m_wndToolBar.m_dwStyle & CBRS_SIZE_DYNAMIC)) 
	  		size = m_wndToolBar.CalcDynamicLayout(0, LM_HORZ | LM_MRUWIDTH |
	                                              LM_COMMIT); 
	  	else if (bHorz) 	
	  		size = m_wndToolBar.CalcDynamicLayout(0, LM_HORZ | LM_HORZDOCK |
	                                              LM_COMMIT); 	
	  	else		
	  		size = m_wndToolBar.CalcDynamicLayout(0, LM_VERTDOCK | LM_COMMIT);	
	
	          // Use the result to calculate a new size
	  	rectActualSize = CRect(rect.TopLeft(), size);	
	  	rectActualFrameSize = CRect(rect.TopLeft(), size);		
	
	  	// Calculate frame rectangle	
	  	CMiniFrameWnd::CalcBorders(rectActualFrameSize);	
	
	          // Leave room for the window's border. The values used here
	          // for m_cxBorder and m_cyBorder are 2 and 2 as a result of
	          // calling GetSystemMetrics for SM_CXBORDER and SM_CYBORDER
	          // (these should return 1) and multiplying the result by 2
	          // to accommodate the modern shell's wider borders.
	  	rectActualFrameSize.InflateRect(-m_cxBorder, -m_cyBorder);  
	  	if (m_wndToolBar.IsFloating()) 
	  	{ 
	  		pFrame->FloatControlBar(&m_wndToolBar,
	                              rectActualFrameSize.TopLeft()); 
	  	} 
	  	else		
	  		pFrame->DockControlBar(&m_wndToolBar);	
	
	  	// force the frame window to recalculate the size	
	  	m_wndToolBar.GetParentFrame()->RecalcLayout();	
	
	  	CDC* pDC = GetDC(); 	
	  	rectActualFrameSize.OffsetRect(-rectActualFrameSize.left,
	                                         -rectActualFrameSize.top);	
	  	m_wndToolBar.DrawBorders(pDC, rectActualFrameSize);	
	  	ReleaseDC(pDC);
	  } 
	
	Add the following data members to CMainFrame class and initialize them in
	CMainFrame's OnCreate member function:
	
	  int m_cyBorder;
	  int m_cxBorder;
	
	  int CMainFrame::OnCreate(LPCREATESTRUCT lpCreateStruct)
	  {
	          m_cxBorder = GetSystemMetrics(SM_CXBORDER);
	          m_cyBorder = GetSystemMetrics(SM_CYBORDER);
	          .....
	  }
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In order to access the toolbar's customize feature you must set the
	CCS_ADJUSTABLE style to the toolbar control, as shown here:
	
	      m_wndToolBar.GetToolBarCtrl().ModifyStyle(0, CCS_ADJUSTABLE);
	
	After this change, at least one ToolBar notification must be handled for the
	ToolBar customization dialog box to appear correctly. This notification is
	TBN_QUERYINSERT, and it can be handled in the CMainFrame class with a handler
	such as the following:
	
	  void CMainFrame::OnQueryInsert( NMHDR * pNotifyStruct, LRESULT * result )
	  {
	  	*result = TRUE;
	  }
	
	The NMHDR structure is actually a NMTOOLBAR notification structure. Another
	notification that should be handled is TBN_GETBUTTONINFO. This is important
	because the notification is sent to request button information for those buttons
	that are available to be added to the toolbar. To properly handle this
	notification, the NMTOOLBAR structure's iItem member should be compared to the
	index of the original TBBUTTON structure array, and the handler should fill the
	structure with button information and set the result to TRUE.
	
	REFERENCES
	==========
	
	For additional information on how to keep the customize dialog visible, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q241850 PRB: Call to CToolBarCtrl::Customize() Does Not Keep the Customize
	  Dialog Box Visible
	
	MFC "Toolbar Topics" in the "Adding User Interface Features" section of the
	Visual C++ Programmer's Guide:
	
	  http://msdn.microsoft.com/library/en-us/vccore98/html/_core_toolbar_topics.asp
	
	The Microsoft Platform SDK Documentation has extensive information on the ToolBar
	common control in its "User Interface Services" section under "Windows Common
	Controls":
	
	  http://msdn.microsoft.com/library/en-us/shellcc/shellcc/CommCtls/ToolBar/ToolBar.asp
	
	Additional query words: CToolBar CToolBarCtrl TBN_CUSTOMIZE
	
	======================================================================
	Keywords          : kbATL kbDSupport kbGrpDSMFCATL kbIDL kbMIDL kbgrpdsvc 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
