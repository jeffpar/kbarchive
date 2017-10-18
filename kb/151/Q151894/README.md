---
layout: page
title: "Q151894: PRB: CToolBarCtrl::GetToolTips() May Return NULL for a ToolBar"
permalink: kb/151/Q151894/
---

## Q151894: PRB: CToolBarCtrl::GetToolTips() May Return NULL for a ToolBar

	Article: Q151894
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbMFC kbToolbar kbToolTip kbVC400 kbVC410 kbGrpDSMFCATL kbMFCCtrlBar
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Accessing the CToolTipCtrl for a CToolBar with CBRS_TOOLTIPS style, using
	GetToolBarCtrl() and subsequently using that pointer to call GetToolTips(),
	returns a NULL value.
	
	CAUSE
	=====
	
	GetToolTips() returns the pointer to a CToolTipCtrl associated specifically with
	the CToolBar. The CToolTipCtrl created for a CToolBar by setting the
	CBRS_TOOLTIPS style is not specific to the CToolBar, but rather, is MFC's
	CToolTipCtrl common to the entire application.
	
	RESOLUTION
	==========
	
	The common CToolTipCtrl is kept as a part of the MFC thread state information.
	To access the MFC's common CToolTipCtrl, access m_pToolTip public member of the
	current thread state:
	
	     _AFX_THREAD_STATE* pThreadState = AfxGetThreadState();
	      CToolTipCtrl* pToolTip = pThreadState->m_pToolTip;
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In order to provide ToolTip support for a CToolBar, the CBRS_TOOLTIPS style has
	to be set during creation or by using CControlBar::SetBarStyle(). This style
	results in the ToolBar using MFC's thread specific common CToolTipCtrl rather
	than a unique one for the ToolBar. Since the ToolTip is not specific to the
	ToolBar, GetToolTips() returns NULL.
	
	Note that a CToolTipCtrl specific to a CToolBar can be created by overriding the
	CToolBar::PreCreateWindow() and setting the TBSTYLE_TOOLTIPS. In this case, the
	return value of GetToolTips() will be valid.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q151162 PRB: CToolBarCtrl Styles Fail with CToolBar
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kbMFC kbToolbar kbToolTip kbVC400 kbVC410 kbGrpDSMFCATL kbMFCCtrlBar 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1
	Issue type        : kbprb
	
	=============================================================================
	
