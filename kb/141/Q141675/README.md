---
layout: page
title: "Q141675: HOWTO: How to Save and Restore State of Dockable Toolbars"
permalink: /kb/141/Q141675/
---

## Q141675: HOWTO: How to Save and Restore State of Dockable Toolbars

	Article: Q141675
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0
	Operating System(s): 
	Keyword(s): kbMFC kbToolbar KbUIDesign kbVC kbGrpDSMFCATL kbMFCCtrlBar
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MFC's CToolBar class makes it easy to create floating toolbars that can dock to
	your window. Each time you run your application, these toolbars will be
	re-created in the default locations. This article shows how to override this
	behavior to save the toolbar positions and docking state and restore them the
	next time the application is executed.
	
	MORE INFORMATION
	================
	
	When you create a SDI or MDI MFC application with the AppWizard, you can choose
	the Docking Toolbar option (default is selected). This option creates a default
	toolbar that can float and has tooltips. It adds a CToolBar member m_wndToolBar
	to the CMainFrame Class. It also adds code to CMainFrame::OnCreate to create the
	toolbar and set its attributes.
	
	CFrameWnd has member functions that can save and restore the state of all control
	bars. The functions are SaveBarState and LoadBarState. There are two other
	helper functions, GetDockState and SetDockState.
	
	To save the state of your control bars, you need to add a handler for
	CMainFrame::OnClose():
	
	     void CMainFrame::OnClose()
	     {
	                  SaveBarState( "MyDockState" );
	
	                  CFrameWnd::OnClose();
	     }
	
	This saves the docking state in the registry or .ini file under the MyDockState
	profile entry.
	
	LoadBarState must be called to reload the information and set the position of the
	controlbars next time the program is executed. This call has to be added to
	CMainFrame::OnCreate(). The following code illustrates this in the context of
	OnCreate:
	
	     int CMainFrame::OnCreate(LPCREATESTRUCT lpCreateStruct)
	     {
	
	             ...
	
	             //Add this line...
	             LoadBarState( "MyDockState" );
	     }
	
	REFERENCES
	==========
	
	DOCKTOOL sample.
	
	Online help for:
	
	  CFrameWnd::LoadBarState,
	  CFrameWnd::SaveBarState,
	  CFrameWnd::GetDockState,
	  CFrameWnd::SetDockState.
	
	Additional query words: 2.00 2.10 2.20 3.00 3.10 3.20 4.00 kbinf
	
	======================================================================
	Keywords          : kbMFC kbToolbar KbUIDesign kbVC kbGrpDSMFCATL kbMFCCtrlBar 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
