---
layout: page
title: "Q279693: HOWTO: T-Shoot Errors from Apps with Missing Components"
permalink: /kb/279/Q279693/
---

## Q279693: HOWTO: T-Shoot Errors from Apps with Missing Components

	Article: Q279693
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbDeployment kbVBp500 kbVBp600 kbGrpDSVBDB kbDSupport
	Last Modified: 17-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	InstallShield provides a Visual Basic Setup Wizard that scans Visual Basic
	applications for dependencies and creates a setup. Sometimes, a component may
	call another component in such a way that the wizard cannot determine the
	dependency. In addition, components that are added after the wizard is run may
	not be included in the setup.
	
	Some of the common errors that occur from applications that are installed with
	missing components are:
	
	  Error 429 ActiveX Component Can't Create Object
	
	  -or-
	
	  Unable to bind to field or data member "name of field"
	
	  -or-
	
	  Error loading DLL.
	
	MORE INFORMATION
	================
	
	NOTE: Microsoft does not support the creation of Visual Basic setup programs
	with InstallShield. For more information, refer to the following Microsoft
	Knowledge Base article:
	
	  Q167053 INFO: InstallShield Not Supported by Microsoft Tech Support
	
	Use the following steps to troubleshoot your installation:
	
	1. Create a Package and Deployment Wizard (Visual Basic 6.0) or Setup Wizard
	  (Visual Basic 5.0) setup.
	
	2. Install the setup that you create in step 1 on the target computer.
	
	3. If the problem is resolved after you install the application, continue with
	  step 4. If the problem is not resolved, check the Microsoft Knowledge Base
	  for more information regarding the error.
	
	4. If you create the setup with the Package and Deployment Wizard, you should
	  have a Support Files folder that is located in the same folder as your
	  package. The files in the folder are required in order for your Visual Basic
	  application to run. Compare these files with the files in your InstallShield
	  setup to determine what is missing.
	
	
	REFERENCES
	==========
	
	For more information about InstallShield, visit the InstallShield support Web
	site at:
	
	  http://support.installshield.com
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDeployment kbVBp500 kbVBp600 kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
