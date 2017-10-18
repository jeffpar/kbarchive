---
layout: page
title: "Q243454: PRB: MFC ActiveX Control Subclassed ComboBox Problems with VB"
permalink: kb/243/Q243454/
---

## Q243454: PRB: MFC ActiveX Control Subclassed ComboBox Problems with VB

	Article: Q243454
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbComboBox kbContainer kbCtrl kbMFC kbVBp kbVC kbVC600 kbDSupport kbVB500 kbGrpDSMFCATL
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An MFC ActiveX control with a subclassed ComboBox with the CBS_DROPDOWNLIST
	style, does not drop down correctly in a Visual Basic container. The control
	drops down and immediately retracts; it drops down correctly only if it is
	double-clicked.
	
	CAUSE
	=====
	
	The COleControl handlers for WM_LBUTTONDOWN and WM_LBUTTONUP call the SetCapture
	and ReleaseCapture functions, respectively. The call to ReleaseCapture in turn
	sends WM_CAPTURECHANGED notification, which in turn causes the list box portion
	of the combo box to hide itself.
	
	RESOLUTION
	==========
	
	Create a message handler for the WM_MOUSEACTIVATE message in your Control class.
	Call OnActivateInPlace in it:
	
	  int CCustomComboCtrl::OnMouseActivate(CWnd* pDesktopWnd, UINT nHitTest, UINT message)  
	  { 	
	       OnActivateInPlace (TRUE, NULL); 	
	       return COleControl::OnMouseActivate(pDesktopWnd, nHitTest, message); 
	  } 
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new MFC ActiveX Control project. In the MFC ActiveX Control Wizard,
	  locate Control Settings. In the Create control based on drop-down list, click
	  to select COMBOBOX to create a new control project that subclasses the
	  ComboBox control. Click Finish to create the project.
	
	2. In the PreCreateWindow of the Control class, add the CBS_DROPDOWNLIST style
	  bit as shown below:
	
	  BOOL CMySubComboCtrl::PreCreateWindow(CREATESTRUCT& cs)
	  {
	  	cs.style |= CBS_DROPDOWNLIST;
	  	cs.lpszClass = _T("COMBOBOX");
	  	return COleControl::PreCreateWindow(cs);
	  }
	
	3. Open Visual Basic and select a new Standard EXE project.
	
	4. Add a TextBox to the form.
	
	5. On the Project menu, click Components, and then select the subclassed
	  ComboBox control from the list. Click OK.
	
	6. From the Controls toolbar, drop the control on the form below the edit
	  control.
	
	7. Run the sample and try to drop down the combo box by clicking the down arrow
	  of the combo box.
	
	The control will not drop down unless you double-click it with the mouse.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Vidyanand Rajpathak, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbComboBox kbContainer kbCtrl kbMFC kbVBp kbVC kbVC600 kbDSupport kbVB500 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
