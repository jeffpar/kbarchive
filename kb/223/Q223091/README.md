---
layout: page
title: "Q223091: FIX: Bad Codebase Parameter Made by VB6 PDW for DHTML Projects"
permalink: /kb/223/Q223091/
---

## Q223091: FIX: Bad Codebase Parameter Made by VB6 PDW for DHTML Projects

	Article: Q223091
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbcode kbservicepack kbActiveDocs kbActiveX kbCAB kbDownload kbInfoDelivery kbInternet
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ActiveX controls or documents packaged using the Package and Deployment Wizard
	(PDW) do not upgrade to newer versions.
	
	CAUSE
	=====
	
	The HTML file created by the PDW does not have the correct object tag. The
	object tag created did not put a "=" between Version and the version number.
	This causes the page not to upgrade the ActiveX control.
	
	For example:
	
	  <OBJECT codebase=MyControl.CAB#Version1,0,0,6
	  classid="clsid:123D5234-3798-11D2-BA53-0020AFD51B12"></object>
	
	RESOLUTION
	==========
	
	Install Visual Studio Service Pack 3.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio 6.0 Service Packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce this bug, follow these steps:
	
	1. Start an ActiveX DLL project in Visual Basic 6.0.
	
	2. Add a DHTML Page to the project.
	
	3. Save the project and compile it into a DLL.
	
	4. From the Add-ins menu, start the Package and Deployment Wizard.
	
	5. Package the project.
	
	  a. When prompted, choose an Internet Package.
	
	  b. Choose the default setting for the options on subsequent screens of the
	     wizard.
	
	6. Open the HTML file that was created in the Package directory.
	
	  Result: The source contains a codebase parameter similar to the one decribed
	  above in the OBJECT tag if you do not have Visual Studio Service Pack 3
	  installed.
	
	REFERENCES
	==========
	
	For more information on how to debug issues related to Package and Deployment
	Wizard, please see the following article in the Microsoft Knowledge Base:
	
	Q194296 HOWTO: Debug PDW Internet Deployment Issues
	
	For other issues related to Package and Deployment of Visual Basic Project,
	please see:
	
	Personal Online Support: Deploying Visual Basic Applications
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Heidi Housten, Microsoft Corporation
	
	
	Additional query words: PDW VBD Download
	
	======================================================================
	Keywords          : kbcode kbservicepack kbActiveDocs kbActiveX kbCAB kbDownload kbInfoDelivery kbInternet kbVBp600fix kbCodeDownload kbGrpDSInet kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbInetDev 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
