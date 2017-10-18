---
layout: page
title: "Q241126: INFO:Dynamically Add UserControls That Require Run-Time Licenses"
permalink: kb/241/Q241126/
---

## Q241126: INFO:Dynamically Add UserControls That Require Run-Time Licenses

	Article: Q241126
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCtrl kbLicensing kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a UserControl contains one or more controls that require run-time licenses,
	the UserControl implicitly becomes a licensed control (requires run-time
	license). As a result, when you use the Controls.Add method to add the
	UserControl dynamically, you must precede it by a call to the Licenses.Add
	method and provide the license key for the call.
	
	MORE INFORMATION
	================
	
	If you create a UserControl named, for example, MyProject.MyUserControl, that
	contains one or more controls that require a run-time license,
	MyProject.MyUserControl acquires a run-time license implicitly. Therefore, if
	you use the Controls.Add method to add MyProject.MyUserControl dynamically, or
	call Licenses.Add "MyProject.MyUserControl" without providing the license key,
	you get the following error message:
	
	  Run-time error '429': You do not have an appropriate license to use this
	  functionality.
	
	To make this work, you must obtain MyProject.MyUserControl's license key on the
	development computer with the following code:
	
	  Debug.Print Licenses.Add ("MyProject.MyUserControl")
	
	Then, in the client code, you can use the following code to dynamically add
	MyProject.MyUserControl:
	
	  Licenses.Add "MyProject.MyUserControl", "License Key"<BR/>
	  Form1.Controls.Add "MyProject.MyUserControl", "ControlName"
	
	REFERENCES
	==========
	
	For additional information how to add controls dynamically, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q190670 HOWTO: Dynamically Add Controls to a Form with Visual Basic 6.0
	
	Additional query words: 429
	
	======================================================================
	Keywords          : kbActiveX kbCtrl kbLicensing kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbinfo
	
	=============================================================================
	
