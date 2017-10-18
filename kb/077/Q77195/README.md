---
layout: page
title: "Q77195: Modified Hardware Description Text in Windows Setup"
permalink: kb/077/Q77195/
---

## Q77195: Modified Hardware Description Text in Windows Setup

	Article: Q77195
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When running Windows Setup, you may find the text for the hardware descriptions
	listing specific .DRV files or other nonstandard hardware descriptions.
	
	MORE INFORMATION
	================
	
	When running Windows Setup for the first time, the hardware descriptions are
	read from the SETUP.INF file. The chosen configuration is then written to the
	SYSTEM.INI's [boot.description] section. Thereafter, when running the Windows
	Setup to make modifications to an existing installation of Windows, Windows
	reads from the [boot.description] section of the SYSTEM.INI for the text
	descriptions of the current configuration.
	
	Possible causes for these changes include:
	
	1. Modification of the SETUP.INF by you or by a third-party device driver
	  installation
	
	2. Modification of the SYSTEM.INI's [boot.description] section by you or by
	  third-party device driver installation
	
	3. OEM versions of SETUP.INF that do not have the standard description text
	
	Note that there might be multiple SETUP.INF and/or SYSTEM.INI files on the
	system. The Search command in the File menu in File Manager may help you locate
	these files. If you are running Windows on a network, search both local and
	network Windows directories.
	
	Additional query words: 3.0 3.00 3.0a 3.00a 3.1 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
