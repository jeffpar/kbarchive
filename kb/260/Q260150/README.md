---
layout: page
title: "Q260150: BUG: Control Manager Allows You to Uninstall of ActiveX DLLs"
permalink: /kb/260/Q260150/
---

## Q260150: BUG: Control Manager Allows You to Uninstall of ActiveX DLLs

	Article: Q260150
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbOSWinCEsearch kbGrpDSVB kbDSupport kbVBM300bug
	Last Modified: 12-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The eMbedded Visual Basic (eVB) Control Manager allows you to uninstall any
	ActiveX controls that are in-use. Although the Control Manager does not delete
	the ActiveX controls from the device, it does remove them from the registry. If
	you close the application and try to run it again, you receive the following
	error message:
	
	  Application Error: The control <controlname> <CLSID of control>
	  could not be created.
	
	RESOLUTION
	==========
	
	To resolve this problem, do not uninstall any ActiveX controls from the device
	that your application needs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In eVB, create a new PocketPC project. Form1 is created by default.
	
	2. Add some ActiveX components to Form1.
	
	3. Run the application on the device.
	
	4. On the Tools menu, point to Remote Tools, and then click Control Manager.
	
	5. Click your device, and then click the ActiveX controls that you included in
	  the project.
	
	6. Right-click these ActiveX controls, and then click Uninstall.
	
	7. Close the application, and try to run it again. You receive the
	  above-mentioned error message.
	
	REFERENCES
	==========
	
	eMbedded Visual Basic 3.0 Release Notes
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWinCEsearch kbGrpDSVB kbDSupport kbVBM300bug 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
