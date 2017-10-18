---
layout: page
title: "Q311308: PRB: All Users Do Not Have Access to Installed Application"
permalink: kb/311/Q311308/
---

## Q311308: PRB: All Users Do Not Have Access to Installed Application

	Article: Q311308
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbAppSetup kbvfp kbGrpDSFox kbDSupport kbvfp700
	Last Modified: 30-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use InstallShield Express - Visual FoxPro Limited Edition to create setup
	disks, the application is only available to the user who runs the set up and
	installs the application. The application is not available to everyone who is
	logged on to the computer.
	
	CAUSE
	=====
	
	By design, unless the set up includes the Customer Information dialog box, the
	user who installs the application cannot select the "Anyone who uses this
	computer (all users)" check box. If this check box is not selected, the
	application is only available to the user who installs the application.
	
	RESOLUTION
	==========
	
	To resolve this problem, include the Customer Information dialog box in the
	Dialogs section of step 4, "Customize the Setup Appearance."
	
	In addition, the user who installs the application must select the "Anyone who
	uses this computer (all users)" check box. This check box appears in the
	Customer Information dialog box under "Install this application for".
	
	If you have a third-party application, and it is not practical to obtain a new
	set up from the vendor, you can run the set up from the Microsoft Windows
	command prompt and append "/V"ALLUSERS=1"" (without the quotation marks) to the
	end of the command. For example:
	
	  
	
	  C:\DISK ONE\SETUP.EXE" /V"ALLUSERS=1
	
	REFERENCES
	==========
	
	For more information, refer to the "Per-User vs. Per-Machine Installations"
	topic in the InstallShield Express - Visual FoxPro Limited Edition Help Library.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAppSetup kbvfp kbGrpDSFox kbDSupport kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbprb
	
	=============================================================================
	
