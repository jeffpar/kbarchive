---
layout: page
title: "Q98473: INFO: Updating the Application Status Bar on Demand"
permalink: /kb/098/Q98473/
---

## Q98473: INFO: Updating the Application Status Bar on Demand

	Article: Q98473
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,2.2,4.0
	Operating System(s): 
	Keyword(s): kbMFC kbStatBar KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL kbMFCCtrlBar
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In an application developed with the Microsoft Foundation Classes (MFC), by
	default a status bar updates its panes only during idle processing.
	
	An application can force a status bar to update its panes immediately by
	implementing an alternative to the idle processing mechanism. The application
	sends an update message to the status bar and then instructs the status bar to
	redraw its window. To update the status bar, send the WM_IDLEUPDATECMDUI
	message, discussed in MFC Tech Note #24, to the status bar then call the
	UpdateWindow() function. The sample code below demonstrates the member function
	to add to the CMainFrame window class.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /*
	      * Compile options needed: None
	      */ 
	
	     void CMainFrame::MyUpdatePane()
	     {
	        m_wndStatusBar.SendMessage(WM_IDLEUPDATECMDUI);
	        m_wndStatusBar.UpdateWindow();
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMFC kbStatBar KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL kbMFCCtrlBar 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,2.2,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
