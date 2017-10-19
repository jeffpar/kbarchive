---
layout: page
title: "Q148860: HOWTO: Show Container's Toolbar During Inplace Activation"
permalink: /kb/148/Q148860/
---

## Q148860: HOWTO: Show Container's Toolbar During Inplace Activation

	Article: Q148860
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2,4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbCOMt kbContainer kbInplaceAct kbMFC kbToolbar KbUIDesign kbVC200 kbVC
	Last Modified: 10-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ .NET (2002) supports both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. Part or all of the information in this article applies to managed Visual C++ code and may be applied only by using the .NET Framework.
	
	SUMMARY
	=======
	
	This article illustrates how to make an OLE Container's toolbar visible when the
	user is editing an inplace active object. The technique makes both the container
	and the server toolbars visible during inplace editing.
	
	MORE INFORMATION
	================
	
	During inplace activation, MFC shows and hides control bars that have the
	CBRS_HIDE_INPLACE style used in the COleClientItem::OnShowControlBars()
	function, which can be found in the MFC source code (Olecli2.cpp).
	
	MFC automatically adds the CBRS_HIDE_INPLACE style to toolbars that are created
	with the ID AFX_IDW_TOOLBAR, which is the default value for the toolbar created
	by AppWizard in the MainFrame window (m_wndToolBar). You can see this in the
	CToolBar::Create() function in the MFC source code (Bartool.cpp). To remove the
	CBRS_HIDE_INPLACE style from m_wndToolBar, add the following line of code to the
	CMainFrame::OnCreate function after m_wndToolBar is created:
	
	     m_wndToolBar.SetBarStyle(m_wndToolBar.GetBarStyle()
	                              ^ CBRS_HIDE_INPLACE);
	
	The SetBarStyle() call removes the CBRS_HIDE_INPLACE style by performing a
	bitwise XOR operation with the existing style for the toolbar.
	
	NOTE: The resulting behavior depends on the server's implementation. For example,
	Word 6.0 always puts its toolbar at position (0,0). In this case, Word's toolbar
	will be placed in front of the container's toolbar. Most servers place their
	toolbar beneath the container's toolbar as expected.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbActiveX kbCOMt kbContainer kbInplaceAct kbMFC kbToolbar KbUIDesign kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL kbMFCCtrlBar 
	Technology        : kbAudDeveloper kbMFC
	Version           : :2.0,2.1,2.2,4.0,4.1,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
