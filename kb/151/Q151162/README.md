---
layout: page
title: "Q151162: PRB: CToolBarCtrl Styles Fail with CToolBar"
permalink: /kb/151/Q151162/
---

## Q151162: PRB: CToolBarCtrl Styles Fail with CToolBar

	Article: Q151162
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbMFC kbToolbar KbUIDesign kbVC400 kbVC410 kbGrpDSMFCATL kbMFCCtrlBar
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	CToolBarCtrl styles such as CCS_ADJUSTABLE are ignored by CToolBar::Create(),
	and do not have any affect on the CToolBar that is created.
	
	The Common Control Toolbar controls styles that are ignored include
	CCS_ADJUSTABLE, CCS_BOTTOM, CCS_NOHILITE, CCS_TOP, and the Toolbar styles
	TBSTYLE_ALTDRAG, TBSTYLE_TOOLTIPS and TBSTYLE_WRAPABLE.
	
	CAUSE
	=====
	
	CToolBar is an implementation of the Common Control Toolbar and requires
	specific flags. Before calling CWnd::Create() to create the Toolbar control,
	CToolBar removes all styles in the range of 0 to 0xFFFF. This includes all of
	the CControlBar (CBRS_X) styles as well as the Common Control styles.
	
	The following Common Control styles are then set:
	
	  CCS_NOPARENTALIGN, CCS_NOMOVEY, CCS_NODIVIDER, and CCS_NORESIZE
	
	RESOLUTION
	==========
	
	One solution is to use ModifyStyle in the handler for WM_NCCREATE to set the
	styles needed.
	
	CToolBarCtrl may also be used instead of CToolBar when modifying the toolbar
	using the Common Control styles, but the CToolBarCtrl does not support all of
	the functionality of CToolBar, such as docking, automatic CFrameWnd layout and
	CmdUI updates. The CToolBarCtrl notifications arising due to these styles also
	have to be handled.
	
	It is possible to set the Common Control styles in CToolBar by deriving a class
	from CToolBar and overriding the virtual function CToolBar::PreCreateWindow().
	This may cause problems because some of the CCS_X styles have the same value as
	some of the CBRS_X styles. For example, CBRS_FLYBY and CCS_ADJUSTABLE are both
	0x0020L.
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kbCmnCtrls kbMFC kbToolbar KbUIDesign kbVC400 kbVC410 kbGrpDSMFCATL kbMFCCtrlBar 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1
	Issue type        : kbprb
	
	=============================================================================
	
