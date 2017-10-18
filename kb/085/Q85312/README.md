---
layout: page
title: "Q85312: GP Fault with SETUP.SHH if [Windir] Path Exceeds 29 Characters"
permalink: kb/085/Q85312/
---

## Q85312: GP Fault with SETUP.SHH if [Windir] Path Exceeds 29 Characters

	Article: Q85312
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Windows operating system version 3.1, a general protection (GP) fault can
	occur when the Setup program switches to the graphical portion of the setup.
	This error can occur if the directory specified in the [windir] section exceeds
	29 characters.
	
	MORE INFORMATION
	================
	
	The Windows automated setup option allows you to write a script file for Setup.
	An example called SETUP.SHH is supplied with Windows 3.1. You may configure
	Setup to automatically install certain printers, applications, hardware, or
	other options.
	
	The [windir] section in the SETUP.SHH file specifies the location to install the
	user's Windows files. Depending on the size of the entry in the [windir]
	section, one of many error messages may appear. If the string if greater than 32
	characters, WINSETUP will cause a GP fault in CPWIN386.CPL, followed by a GP
	fault in USER.EXE, and then drop the user out to MS-DOS with the error message:
	
	  Standard Mode: Fault in MS-DOS Extender
	
	Examples
	--------
	
	The following is a valid entry for the [windir] section:
	
	     [windir]
	
	     k:\sys\apps1\windows\stations
	
	  (Note: The entry contains fewer than 29 characters.)
	
	The following entry will cause the Setup program to fail:
	
	     [windir]
	
	     k:\sys\apps\windows\stations\0
	
	  (Note: The entry contains more than 29 characters.)
	
	Additional query words: 3.10 3.1 3.11 AIF GPF
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
