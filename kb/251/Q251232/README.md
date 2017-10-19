---
layout: page
title: "Q251232: BUG: MFC Dockable Toolbars Do Not Paint Correctly"
permalink: /kb/251/Q251232/
---

## Q251232: BUG: MFC Dockable Toolbars Do Not Paint Correctly

	Article: Q251232
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbMFC kbToolbar KbUIDesign kbVC500bug kbVC600bug kbDSupport kbGrpDSMFCATL kb
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a toolbar using the MFC CToolBar class and if you used the
	CBRS_ALIGN_TOP style, then the toolbar may not paint properly. You see dark
	spots on the right most and left most edges of the toolbar. This repainting
	problem is more obvious if you undock the toolbar and dock it again.
	
	RESOLUTION
	==========
	
	Use the CBRS_TOP style instead of CBRS_ALIGN_TOP. CBRS_TOP is defined as the
	following:
	
	  #define CBRS_TOP            (CBRS_ALIGN_TOP|CBRS_BORDER_BOTTOM)
	
	Thus, if you use CBRS_TOP or use CBRS_ALIGN_TOP along with CBRS_BORDER_BOTTOM, it
	works correctly and as expected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Note that the CreateEx member function of CToolBar, takes the CBRS_ALIGN_TOP
	style as the default. Therefore, if you had code like the following then you see
	this behavior.
	
	  	if (!m_wndToolBar.CreateEx(this) ||
	  		!m_wndToolBar.LoadToolBar(IDR_MAINFRAME))
	  	{
	  		TRACE0("Failed to create toolbar\n");
	  		return -1;      // fail to create
	  	}
	
	In an AppWizard generated application, you do not see this behavior because it
	uses the CBRS_TOP style.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Generate a new MFC SDI or MDI application.
	
	2. Go to Mainfrm.cpp, CMainFrame::OnCreate and replace the CToolBar::CreateEx
	  call to look like the following:
	
	  	if (!m_wndToolBar.CreateEx(this, TBSTYLE_FLAT, WS_CHILD | WS_VISIBLE | CBRS_ALIGN_TOP
	  		| CBRS_GRIPPER | CBRS_TOOLTIPS | CBRS_FLYBY | CBRS_SIZE_DYNAMIC) ||
	  		!m_wndToolBar.LoadToolBar(IDR_MAINFRAME))
	  	{
	  		TRACE0("Failed to create toolbar\n");
	  		return -1;      // fail to create
	  	}
	
	  Replace CBRS_TOP with CBRS_ALIGN_TOP.
	
	3. Build and run the application. Drag the toolbar out, move it around and dock
	  it back. Observe that it does not paint properly.
	
	REFERENCES
	==========
	
	- CToolBar::CreateEx
	
	- CBRS_TOP
	
	- CBRS_ALIGN_TOP
	
	- Q141675 How to Save and Restore State of Dockable Toolbars
	
	- Q232845 LoadBarState asserts while restoring two/more floating toolbars
	
	Additional query words: CToolBarCtrl CControlBar painting poor incorrect docking
	
	======================================================================
	Keywords          : kbCmnCtrls kbMFC kbToolbar KbUIDesign kbVC500bug kbVC600bug kbDSupport kbGrpDSMFCATL kbMFCCtrlBar 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
