---
layout: page
title: "Q155141: HOWTO: How To Add a Toolbar in an MDI Child Window"
permalink: /kb/155/Q155141/
---

## Q155141: HOWTO: How To Add a Toolbar in an MDI Child Window

{% raw %}

	Article: Q155141
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbDocView kbMDI kbMFC kbToolbar KbUIDesign kbVC kbGrpDSMFCATL kbMFCCtrlBar
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, an AppWizard-generated MDI application has a toolbar in its main
	application window (CMDIFrameWnd-derived class). This toolbar is shared by all
	the MDI child windows (CMDIChildWnd-derived class) in the application. In some
	cases, it would be useful to have a toolbar appear in each MDI child window.
	This is demonstrated in the following sample code.
	
	Because CMDIChildWnd is a CFrameWnd-derived class, the toolbar in an MDI child
	window may be dockable. This can be easily achieved by calling such functions as
	EnableDocking() and DockControlBar().
	
	Sample Code
	-----------
	
	Steps to create a toolbar in an MDI child window:
	
	1. Create a CMDIChildWnd-derived class using ClassWizard if one is missing.
	  Remember to use this derived class in the CMultiDocTemplate statement in the
	  CWinApp::InitInstance() function.
	
	2. Add a member variable of type CToolBar to the CMDIChildWnd-derived class.
	
	     class CChildFrame : public CMDIChildWnd
	     {
	     ...
	         CToolBar    m_wndToolBar;
	     }
	
	3. Override the OnCreate() function in your CMDIChildWnd-derived class using
	  ClassWizard.
	
	4. Add the following code to the OnCreate() function of your CMDIChildWnd-
	  derived class:
	
	     int CChildFrame::OnCreate(LPCREATESTRUCT lpCreateStruct)
	     {
	         if (CMDIChildWnd::OnCreate(lpCreateStruct) == -1)
	             return -1;
	
	         // Create a toolbar window.  IDR_CHILDFRAME is the resource name
	         // of the toolbar to be loaded.
	         if (!m_wndToolBar.Create(this) ||
	             !m_wndToolBar.LoadToolBar(IDR_CHILDFRAME))
	         {
	             TRACE0("Failed to create toolbar\n");
	             return -1;      // fail to create
	         }
	
	         // TODO: Remove this if you don't want tool tips or a
	         // resizeable toolbar
	         m_wndToolBar.SetBarStyle(m_wndToolBar.GetBarStyle() |
	             CBRS_TOOLTIPS | CBRS_FLYBY | CBRS_SIZE_DYNAMIC);
	
	         // TODO: Delete these three lines if you don't want the toolbar
	         // to be dockable
	         m_wndToolBar.EnableDocking(CBRS_ALIGN_ANY);
	         EnableDocking(CBRS_ALIGN_ANY);
	         DockControlBar(&m_wndToolBar);
	
	         return 0;
	     }
	
	REFERENCES
	==========
	
	For information on using ClassWizard, please refer to VC++ Books Online.
	
	Additional query words: 4.00 4.10 4.20 kbdse
	
	======================================================================
	Keywords          : kbDocView kbMDI kbMFC kbToolbar KbUIDesign kbVC kbGrpDSMFCATL kbMFCCtrlBar 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
