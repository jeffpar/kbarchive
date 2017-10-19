---
layout: page
title: "Q212919: SMS: Adding an MMC Snap-In Using SMS Installer"
permalink: /kb/212/Q212919/
---

## Q212919: SMS: Adding an MMC Snap-In Using SMS Installer

	Article: Q212919
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use he Systems Management Server Installer to install a Microsoft
	Management Console (MMC) snap-in on target computers.
	
	MORE INFORMATION
	================
	
	An MMC snap-in is actually a dynamic-link library (DLL) that extends the
	functionality of the MMC console. MMC DLLs must be installed and registered on
	computers on which the snap-ins will be used. The Systems Management Server
	Installer script item "Install MMC Snap-in" carries out the installation and
	registration process as a part of the package execution.
	
	Steps to Install an MMC Snap-In
	-------------------------------
	
	1. Install and start Systems Management Server Installer.
	
	2. Create a new installation script.
	
	3. Click View, and then click Script Editor.
	
	4. Place the cursor in the section of code where files are being installed.
	
	5. In the left pane in the Action box, double-click Install MMC Snap-in.
	
	6. In the Source Pathname box, type the path and file name of the MMC DLL that
	  you are distributing.
	
	7. In the Copy Description box, type text that will display as the file is being
	  installed on the target computer.
	
	8. Click OK.
	
	Results: The MMC DLL will be compressed into a Systems Management Server
	self-extracting executable. When the executable is run on target computers, the
	MMC DLL will be placed in the %Systemroot%\System32 folder and then registered
	as an MMC DLL. The MMC snap-in will then be available on the target computer.
	
	REFERENCES
	==========
	
	Refer to the Help menu item in Systems Management Server Installer for more
	information on the Install MMC Snap-in script action.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
