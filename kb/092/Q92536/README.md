---
layout: page
title: "Q92536: Upgrade Installation Fails, Then Setup Doesn't Work"
permalink: /kb/092/Q92536/
---

## Q92536: Upgrade Installation Fails, Then Setup Doesn't Work

	Article: Q92536
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows for Workgroups add-on for Windows 3.1 users does not allow
	a new installation of Windows for Workgroups; it is an upgrade for Microsoft
	Windows version 3.1 only.
	
	If the upgrade fails during installation, you may not be able to run SETUP.EXE
	again. To work around this problem, remove the SETUPSTATE= line from the
	[BOOT.DESCRIPTION] section of the SYSTEM.INI file.
	
	MORE INFORMATION
	================
	
	During the upgrade process, SETUP.EXE adds the line
	
	  SETUPSTATE=
	
	to the [BOOT.DESCRIPTION] section of the SYSTEM.INI file. When this line is
	present, SETUP.EXE does not allow the installation of Windows for Workgroups,
	and the following error message will be displayed:
	
	  Windows 3.1 could not be located on your computer. This version of Windows
	  for Workgroups requires that Windows 3.1 already be installed. You must
	  either install Windows 3.1 on your computer, or purchase the complete version
	  of Windows for Workgroups.
	
	To allow Windows for Workgroups to install correctly (provided you have Windows
	3.1 on your computer), remove the SETUPSTATE= line.
	
	NOTE: The failed upgrade installation may also leave the following line in the
	SYSTEM.INI:
	
	  SHELL=SETUP.EXE
	
	The statement should be SHELL=PROGMAN.EXE. You may need to make this change as
	well.
	
	Additional query words: 3.1 3.10 win.ini reinstall setup set up setting re-install fail resetup re-setup previous error
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
