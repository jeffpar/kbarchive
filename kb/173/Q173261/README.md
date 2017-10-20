---
layout: page
title: "Q173261: FIX: Dialog in InitInstance Doesn't Process WM_DDE_INITIATE"
permalink: /kb/173/Q173261/
---

## Q173261: FIX: Dialog in InitInstance Doesn't Process WM_DDE_INITIATE

{% raw %}

	Article: Q173261
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2,4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600fix kb
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start an application that contains a modal dialog function, such
	as CDialog::DoModal, AfxMessageBox, or MessageBox, that is called from the
	CWinApp derived class' InitInstance function by double-clicking on the
	application from the Windows 95 Explorer, selecting the saved document from the
	Start Menu or double-clicking on it from File Manager, one of the following may
	happen:
	
	- It may work fine if built with Visual C 2.x running under Windows NT 3.5x and
	  later.
	
	-or-
	
	- The dialog or message box may come up, but the application's main window may
	  not come up, and the process is now hung, and can only be terminated by
	  PVIEW.
	
	-or-
	
	- The following error message box may be displayed:
	
	  Cannot find the file <path\filename> (or one of its components). Make
	  sure the path and filename are correct and that all required libraries are
	  available.
	
	  And, symptom number 2 may also occur.
	
	CAUSE
	=====
	
	When you launch an application in File Manager or Windows Explorer, a
	WM_DDE_INITIATE is supposed to be handled by the CWinApp and CFrameWnd
	OnDDEIntitiate handlers. A call to CDialog::DoModal, AfxMessageBox, or
	MessageBox interferes with the ability for the MFC framework to handle these
	messages correctly.
	
	RESOLUTION
	==========
	
	It has been determined that this behavior is by design and that it is not
	recommended to place any of these calls within the CWinApp::InitInstance. Any
	password dialogs or dialog based components which need to be displayed in the
	InitInstance should be of the modeless type. This does not apply to a dialog
	based application or an SDI application.
	
	STATUS
	======
	
	This problem was corrected in Visual C++ version 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an AppWizard Multiple Document Application, specifying a file
	  extension to associate with the application.
	
	2. Call a modal dialog function such as CDialog::DoModal, AfxMessageBox, or
	  MessageBox from the CWinApp derived class' InitInstance function.
	
	3. Run the application, dismiss the dialog or message box, and save the
	  document.
	
	4. Start the application by:
	
	  1. Double-clicking the application from the Windows 95 Explorer.
	
	  -or-
	
	  2. Selecting the saved document from the Start Menu
	
	  -or-
	
	  3. Double-clicking the application from File Manager.
	
	REFERENCES
	==========
	
	For related information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q172336 PRB: Assertion Launching Program with Tip of Day & Splash Screen
	
	Additional query words: explorer start file manager
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : :2.0,2.1,2.2,4.0,4.1,4.2,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
