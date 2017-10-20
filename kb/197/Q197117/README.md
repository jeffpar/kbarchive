---
layout: page
title: "Q197117: INFO: Troubleshooting Application Wizard Error Messages"
permalink: /kb/197/Q197117/
---

## Q197117: INFO: Troubleshooting Application Wizard Error Messages

{% raw %}

	Article: Q197117
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbwizard kbCtrl kbLicensing kbRegistry kbVBp500 kbVBp600 kbAppWizard
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Application Wizard in Microsoft Visual Basic, the following
	errors might occur:
	
	  60: Object variable or with block variable not set
	
	  60: Method '~' of object '~' not found
	
	  CreateChildForm: License information for this component not found. You do not
	  have the appropriate license to use this functionality in the design
	  environment.
	
	MORE INFORMATION
	================
	
	These errors are caused by ActiveX Control registry problems. To resolve the
	error, it is important to isolate which control is causing the problem and make
	sure that the control is properly registered.
	
	Step-by-Step Procedures
	-----------------------
	
	1. Use the list below to determine which component is not registered correctly:
	
	     Object  50      : ComDlg32.ocx
	     Object  60      : MSComCtl.ocx
	     Object 165      : RichTx32.ocx
	     CreateChildForm : MSStdFmt.dll
	
	2. Unregister the component using RegSvr32.exe. To do this, go to the Windows
	  Start menu, click Run and type the following command:
	
	     RegSvr32 /u C:\Windows\System\COMDLG32.OCX
	
	3. Re-register the control using RegSvr32.exe. To do this, go to the Windows
	  Start menu, click Run and type the following command:
	
	     RegSvr32 C:\Windows\System\RICHTX32.OCX
	
	4. Run the appropriate license utility (see the References section of this
	  article) to make sure that the licenses for Microsoft Visual Basic are
	  installed properly.
	
	5. Run the Application Wizard to make sure that the problem is resolved.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q194751 : FILE: VB6Cli.exe Fixes License Problems with Visual Basic 6.0
	
	  Q181854 : FILE: VB5cli.exe Fixes Visual Basic 5.0 Control Installation Problem
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbwizard kbCtrl kbLicensing kbRegistry kbVBp500 kbVBp600 kbAppWizard 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
