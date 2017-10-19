---
layout: page
title: "Q190777: FIX: PDW: Out-of-Date Dependency Information COMCT332.OCX"
permalink: /kb/190/Q190777/
---

## Q190777: FIX: PDW: Out-of-Date Dependency Information COMCT332.OCX

	Article: Q190777
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAddIn kbAppSetup kbVBp kbVBp600bug kbGrpDSVB kbVS600sp3fix kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Creating a setup program using the Package and Deployment Wizard (PDW) for a
	project that includes COMCT332.OCX generates an incorrect Out-of-Date Dependency
	Information error dialog.
	
	CAUSE
	=====
	
	The dependency file for the file COMCT332.OCX may contain incorrect version
	information for the control.
	
	RESOLUTION
	==========
	
	To resolve the problem, install Visual Basic 6.0 SP3 or later.
	
	To work around the problem, there are two options:
	
	- Ignore the Out-Of-Date error message.
	
	- Modify COMCT332.DEP using a text editor such as NotePad. The Version items
	  within the [Version] and [Comct332.ocx] sections of COMCT332.DEP need to be
	  updated to the following:
	
	        [Version]
	        Version=6.0.00.8169
	
	        [Comct332.ocx]
	        Version=6.0.00.8169
	
	  NOTE: COMCT332.DEP can be found in the Windows System directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	
	1. Create a new Standard EXE in Microsoft Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, click Components.
	
	3. Select the Microsoft Windows Common Controls-3 6.0, and click OK.
	
	4. Add a CoolBar control to Form1.
	
	5. Save the project, using the default names.
	
	6. From the Add-In Menu, click Package and Deployment Wizard. NOTE: If this menu
	  item does not exist, you can add it via the Add-In Manager.
	
	7. In the Package and Deployment Wizard, click Package. NOTE: When prompted to
	  Compile and Save the project, click Yes for both.
	
	8. Select Standard Setup Package and click the Next button.
	
	9. Click on Next for the Package Folder. Choose Yes to create the folder, if
	  prompted.
	
	RESULTS: The Out-of-Date Dependency Information dialog will appear, indicating
	the dependency information for Comct332.OCX is out-of-date.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAddIn kbAppSetup kbVBp kbVBp600bug kbGrpDSVB kbVS600sp3fix kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
