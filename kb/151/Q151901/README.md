---
layout: page
title: "Q151901: PRB: StatusBar Pane Enabled by Default"
permalink: /kb/151/Q151901/
---

## Q151901: PRB: StatusBar Pane Enabled by Default

{% raw %}

	Article: Q151901
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbMFC KbUIDesign kbVC400 kbVC410 kbGrpDSMFCATL kbMFCCtrlBar
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ 32-bit Edition, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a non-default pane is added to the StatusBar, this pane is automatically
	enabled even if it does not have an Update UI handler.
	
	CAUSE
	=====
	
	This behavior is different than the behavior in earlier versions of MFC where
	the pane was automatically disabled if there was no Update UI handler.
	
	RESOLUTION
	==========
	
	To disable the pane, unless it is enabled by a handler, add an Update UI handler
	for the pane to the CMainFrame class of the application that disables the pane.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In certain situations the pane can be disabled by default, such as when the pane
	is displaying the status associated with a Document or the View. In these
	situations, you should disable the pane if no Document/View is open.
	
	To disable the pane by default, add an Update UI handler for this pane to
	CMainFrame. Add an update UI handler in the Document or View that updates the
	pane depending on the status.
	
	When a Document/View is open, then the update UI handler in the Document/View
	will update the pane depending on its state. When all documents are closed, the
	Update handler in CMainFrame will disable the pane.
	
	Sample Code
	-----------
	
	      /* Compile options needed: default
	     */ 
	     // Following code disables a pane in the StatusBar with ID,
	     // ID_MYPANE in the CMainFrameClass.
	
	     // MainFrm.h : interface of the CMainFrame class
	     ...
	     class CMainFrame : public CMDIFrameWnd
	     {
	     ...
	         //}}AFX_MSG
	         afx_msg void OnUpdateMypane(CCmdUI* pCmdUI);
	         DECLARE_MESSAGE_MAP()
	     };
	
	     // MainFrm.cpp : implementation of the CMainFrame class
	     ...
	
	     BEGIN_MESSAGE_MAP(CMainFrame, CMDIFrameWnd)
	         //{{AFX_MSG_MAP(CMainFrame)
	     ...
	         //}}AFX_MSG_MAP
	         ON_UPDATE_COMMAND_UI(ID_MYPANE, OnUpdateMypane)
	     END_MESSAGE_MAP()
	
	     static UINT indicators[] =
	     {
	         ID_SEPARATOR,           // status line indicator
	         ID_MYPANE,             //String resource with this ID in resources
	         ID_INDICATOR_CAPS,
	         ID_INDICATOR_NUM,
	         ID_INDICATOR_SCRL,
	     };
	
	     ...
	     void CMainFrame::OnUpdateMypane(CCmdUI* pCmdUI)
	     {
	         pCmdUI->Enable(FALSE);
	
	     }
	
	Additional query words: 4.00 4.10 CStatusBar enable
	
	======================================================================
	Keywords          : kbMFC KbUIDesign kbVC400 kbVC410 kbGrpDSMFCATL kbMFCCtrlBar 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
