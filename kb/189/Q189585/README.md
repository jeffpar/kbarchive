---
layout: page
title: "Q189585: FIX: Invisible at Run Time ActiveX Control, Visible at Run Time"
permalink: kb/189/Q189585/
---

## Q189585: FIX: Invisible at Run Time ActiveX Control, Visible at Run Time

	Article: Q189585
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbCOMt kbContainer kbCtrl kbMFC kbVC500bug kbVC600bug kbGrpDSMFCATL kbN
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An invisible run-time ActiveX control is visible at run time if it is the only
	control on a dialog box.
	
	CAUSE
	=====
	
	This problem occurs because there is no other control the focus can be set to,
	so AppWizard-generated MFC code sets focus to the only control there (that is,
	returns TRUE in the OnInitDialog() function of your CDialog- derived class), and
	therefore activates it.
	
	RESOLUTION
	==========
	
	Change the return value of the OnInitDialog() function in your derived CDialog
	class from TRUE to FALSE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an MFC dialog box-based application using AppWizard.
	
	2. Remove all controls from the AppWizard-generated dialog box.
	
	3. Insert an ActiveX control that is invisible at run time (for example,
	  Microsoft Communications Control or Microsoft Common Dialog Control).
	
	4. Build and run the application.
	
	RESULTS: You should see that the ActiveX control's design-time representation is
	visible on the dialog box at run time.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Yeong- Kah
	Tam, Microsoft Corporation
	
	Additional query words: ocx design time MSComm CommDlg
	
	======================================================================
	Keywords          : kbole kbActiveX kbCOMt kbContainer kbCtrl kbMFC kbVC500bug kbVC600bug kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
