---
layout: page
title: "Q232845: LoadBarState asserts while restoring two/more floating toolbars"
permalink: kb/232/Q232845/
---

## Q232845: LoadBarState asserts while restoring two/more floating toolbars

	Article: Q232845
	Product(s): Microsoft C Compiler
	Version(s): 3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbMFC kbToolbar kbVC500 kbVC600 kbTools kbGrpDSMFCATL kbMFCCtrlBar
	Last Modified: 14-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SYMPTOMS
	========
	
	An application may cause an assertion failure while restoring settings for two
	or more floating toolbars using the LoadBarState method of CToolbar class.
	
	CAUSE
	=====
	
	This problem occurs when two or more floating toolbars have the same child
	window ID. If you do not specify a toolbar?s child window ID as the last
	parameter to CToolBar::Create or CToolBar::CreateEx methods, it defaults to
	AFX_IDW_TOOLBAR.
	
	RESOLUTION
	==========
	
	Pass a unique control ID while calling Create or CreateEx for each toolbar, and
	then change the profile name in the LoadBarState and SaveBarState calls.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a single document interface (SDI) application by using AppWizard.
	
	2. Add an m_wndToolBar2 member variable of type CToolbar to your CMainFrame
	  class.
	
	3. Add the following code to OnCreate method of CMainFrame class:
	
	  	if (!m_wndToolBar2.CreateEx(this, TBSTYLE_FLAT, WS_CHILD | WS_VISIBLE | CBRS_TOP
	  		| CBRS_GRIPPER | CBRS_TOOLTIPS | CBRS_FLYBY | CBRS_SIZE_DYNAMIC) || 
	  		!m_wndToolBar2.LoadToolBar(IDR_MAINFRAME))
	  	{
	  		TRACE0("Failed to create toolbar\n");
	  		return -1;      // Fail to create.
	  	}
	  	m_wndToolBar2.EnableDocking(CBRS_ALIGN_ANY);
	  	DockControlBar(&m_wndToolBar2);
	  	LoadBarState("One");
	
	4. Create a handler WM_CLOSE message in CMainFrame class and add the following
	  line at the beginning of the handler:
	
	  	SaveBarState("One");	
	
	5. Build the project.
	
	6. Run the project and float both the toolbars. Close the application.
	
	7. Run the application again to see the assertion.
	
	To create a new resource ID, on the View menu, click Resource Symbols, and then
	click New in the Symbols dialog box. Pass this resource ID as the last parameter
	to CToolbar's Create or CreateEx member function in CMainFrame's OnCreate
	method. You do not need to do this for the first toolbar, which can have a
	default resource ID (AFX_IDW_TOOLBAR).
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Sreedhar Pelluru, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMFC kbToolbar kbVC500 kbVC600 kbTools kbGrpDSMFCATL kbMFCCtrlBar 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :3.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
