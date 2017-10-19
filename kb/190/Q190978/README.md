---
layout: page
title: "Q190978: PRB: Missing Dependency Information Dialog in PDW"
permalink: /kb/190/Q190978/
---

## Q190978: PRB: Missing Dependency Information Dialog in PDW

	Article: Q190978
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbInternet kbVBp kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating a setup program with the Visual Basic Package and Deployment
	Wizard (PDW), the following message is received:
	
	  Missing Dependency Information
	
	Below is a list of files for which dependency information could not be found. To
	proceed without the dependency information for the file(s), click OK. To
	permanently mark a file as having no dependencies, select its checkbox.
	
	This article describes why this warning is received.
	
	CAUSE
	=====
	
	The project includes a component such as the Microsoft Script Control 1.0
	(MSSCRIPT.OCX), which does not have a .dep file and has no pertinent information
	in VB6DEP.INI.
	
	RESOLUTION
	==========
	
	In the case of a control such as MSSCRIPT.OCX, which does not need any
	additional files to be distributed with it, the message regarding "Missing
	Dependency Information" may be safely ignored.
	
	If the component does require additional files for distribution, obtain a
	dependency file for it and re-run the Package and Deployment Wizard.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Package and Deployment Wizard checks for component dependency information in
	both the VB6DEP.INI and in the directory where the component is located.
	Dependency information (.dep) files list the files required for a component to
	run correctly.
	
	If the PDW does not find any dependency information for a component, the Missing
	Dependency Information dialog is displayed. You can check the box next to the
	file name to prevent the dialog from displaying in subsequent runs of the PDW
	script.
	
	If the component was created in Visual Basic, the Package and Deployment Wizard
	can be used to create a dependency file. If the component was obtained from a
	third-party source, contact the source for a dependency file.
	
	REFERENCES
	==========
	
	If a dependency file needs to be created manually for the component, please see
	the following articles in the Microsoft Knowledge Base:
	
	  Q178354 INFO: How Setup Wizard and PDW Uses Dependency Files
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q198052 PRB: 'Out-of-Date Dependency' Warning in Setup Wizard and PDW
	
	For additional information about how the Package and Deployment Wizard uses
	dependency information, refer to the "Dependency Files" topic in Online Help for
	Microsoft Visual Basic.
	
	Additional query words: PDW dependencies kbdss
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbInternet kbVBp kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
