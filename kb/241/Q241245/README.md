---
layout: page
title: "Q241245: PRB: &quot;Error 7 - Out of Memory&quot; from VB App Using FM20.DLL"
permalink: /kb/241/Q241245/
---

## Q241245: PRB: &quot;Error 7 - Out of Memory&quot; from VB App Using FM20.DLL

	Article: Q241245
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbDeployment kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Visual Basic application is deployed on a target machine. When attempting to
	run the application on a target machine that does not have Microsoft Office 97
	or later installed, the following error is generated:
	
	  Error 7 - Out of Memory
	
	No loss of memory is monitored, and the system appears stable. The application
	executes properly if Microsoft Office 97 is installed on the target machine.
	
	CAUSE
	=====
	
	The problem is that FM20.DLL file is used by the project. FM20.DLL file is not a
	redistributable component and is intended for VBA use only. FM20.DLL is known to
	have many problems when used with Visual Basic and other developer products. Its
	use is neither recommended nor supported in any Visual Studio product.
	
	RESOLUTION
	==========
	
	The best resolution is to remove FM20.DLL from the project.
	
	An alternative is to deploy the application only to machines with Microsoft
	Office 97 or later installed. To do this, remove the reference to FM20.DLL from
	the PDW or Setup Wizard file list. This prevents the install wizard from
	installing it. Note in your product documentation that installing the
	appropriate version of Microsoft Office on the target machine is a pre-requisite
	to installing your application.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For additional information about using FM20.DLL, please click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q224305 INFO: Usage and Redistribution of FM20.DLL
	
	
	To see what components are redistributable, read the "Redist.TXT" file that ships
	with Visual Basic. This file is installed to your hard drive or it can be found
	in the "\Common\Redist\" folder on the Visual Basic 6.0 CD-ROM or in the "\vb\"
	folder of the Visual Basic 5.0 CD-ROM.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbDeployment kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
