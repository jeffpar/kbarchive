---
layout: page
title: "Q77404: PRB: SETUP.EXE Fails to Replace OEM Drivers"
permalink: /kb/077/Q77404/
---

## Q77404: PRB: SETUP.EXE Fails to Replace OEM Drivers

	Article: Q77404
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When SETUP.EXE is used to replace a device driver specified in the OEMSETUP.INF
	file, the driver is not replaced.
	
	CAUSE
	=====
	
	When SETUP.EXE finds that a file of a specified name already exists on the
	target machine, it assumes that the driver is already installed and only updates
	the .INI file.
	
	RESOLUTION
	==========
	
	There are two ways to work around this problem:
	
	1. Change the name of the driver to reflect the newer version
	
	2. Write a program that runs prior to SETUP.EXE that deletes older versions of
	  the driver files.
	
	MORE INFORMATION
	================
	
	The first resolution option is superior because version information is stored in
	the filename. The date stamp is subject to corruption by the inadvertent use of
	a "touch" program.
	
	For example, version 1.0 of a custom VGA driver might be released as follows:
	
	  MYVGA.DRV 72816 11-09-90 12:00a
	
	When the driver is updated, version 1.2 might be released as follows:
	
	  MYVGA_2.DRV 111512 04-07-91 03:00a
	
	This technique avoids the Setup constraint, and also eases the burden of
	identifying the installed driver for troubleshooting purposes.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	Issue type        : kbprb
	
	=============================================================================
	
