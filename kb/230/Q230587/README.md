---
layout: page
title: "Q230587: PRB: Focus Not Set in Edit Controls in Inactive Child Window"
permalink: kb/230/Q230587/
---

## Q230587: PRB: Focus Not Set in Edit Controls in Inactive Child Window

	Article: Q230587
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbDlg kbEditCtrl kbMFC kbVC400 kbVC500 kbVC600 kbDSupport kbprb kbGrpDSMFCATL
	Last Modified: 27-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an edit control is in an inactive captioned child window, you cannot set
	focus to it with the mouse. For example, if you have a modeless dialog box with
	the WS_CAPTION and WS_CHILD styles, and it has an edit control, you cannot set
	focus to the edit control with the mouse.
	
	NOTE: All captioned child windows display an inactive caption bar.
	
	CAUSE
	=====
	
	The default WM_LBUTTONDOWN handler for edit controls will not set focus to the
	edit control if its parent is an inactive captioned child window. This code is
	implemented as part of the Windows API function, DefWindowProc().
	
	RESOLUTION
	==========
	
	There are not many good ways to work around this limitation because it is
	Windows itself that is intentionally causing this behavior.
	
	The best way to prevent the problem is to prevent the parent of the edit control
	from being an inactive captioned child. For the above example, specify the
	WS_POPUP style for the dialog box instead of WS_CHILD.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an AppWizard-generated MFC dialog box application.
	
	2. Add a second dialog box resource to the project. Right-click the dialog
	  resource to change the properties, and give it a Title Bar and a Child window
	  style.
	
	3. Add an edit control to the new dialog box resource.
	
	4. Use class wizard to create a new class for the new dialog box resource.
	
	5. Override CDialog::PostNCDestroy for this class and add the following line:
	
	         delete this;
	
	6. Add a member variable to the application dialog box class that is a type of
	  the class created above, and name the variable m_pDlg.
	
	7. In the OnInitDialog() function of the application dialog box class, create a
	  new modeless dialog box as shown here:
	
	  	m_pDlg = new CModelessDlg;
	  	m_pDlg->Create(IDD_MODELESS2, this);
	  	m_pDlg->ShowWindow(SW_SHOWNORMAL);
	
	8. Try and set focus to the edit control.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbDlg kbEditCtrl kbMFC kbVC400 kbVC500 kbVC600 kbDSupport kbprb kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC kbVCNET
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
