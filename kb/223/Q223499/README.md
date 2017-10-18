---
layout: page
title: "Q223499: PRB: Error C0042116: Files Specified in Section Are Busy"
permalink: kb/223/Q223499/
---

## Q223499: PRB: Error C0042116: Files Specified in Section Are Busy

	Article: Q223499
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDeployment kbVBp600 kbWebClasses kbGrpDSASP kbDSupport kbiis400 kbiis500
	Last Modified: 22-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Package and Deployment Wizard (PDW) to deploy an Internet
	Information Server (IIS) application to a Web server, you receive the following
	error message:
	
	  Unexpected error number C0042116 has occurred: The Web server returned the
	  following error: Files specified in section RInstallApplicationFiles of INF
	  file jallen8.INF are busy. Can not install them unless allowed to do a
	  REBOOT.
	
	CAUSE
	=====
	
	You have included WebClass Runtime, Visual Basic Runtime, or OLE Automation
	files in your package. The PDW is not able to update these system files while
	they are in use on the Web server.
	
	RESOLUTION
	==========
	
	If you do not need to update the WebClass Runtime, Visual Basic Runtime, or OLE
	Automation files, then create the IIS package without these system files. If you
	do need to update these system files, then create a Standard Setup Package,
	which will allow the installation program to reboot.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For additional information about the Package and Deployment Wizard, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194296 HOWTO: Debug PDW Internet Deployment Issues
	
	  Q199017 HOWTO: Deploy Visual Basic IIS Applications with PDW
	
	  Q242767 INFO: Deploying WebClasses with the Package and Deployment Wizard
	  (PDW)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDeployment kbVBp600 kbWebClasses kbGrpDSASP kbDSupport kbiis400 kbiis500 
	Technology        : kbVBSearch kbiisSearch kbAudDeveloper kbZNotKeyword6 kbiis500 kbiis400 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
