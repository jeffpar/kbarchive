---
layout: page
title: "Q63673: Setup Doesn't Modify Configuration Files with OS/2"
permalink: /kb/063/Q63673/
---

## Q63673: Setup Doesn't Modify Configuration Files with OS/2

	Article: Q63673
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	The Setup program for Microsoft Windows version 3.0 does not modify
	the configuration files if you have OS/2 installed on the machine.
	The setup program searches the path of the machine for an "OS2"
	directory off the root of the boot drive and displays the following
	error:
	
	  You are running a system that is configured for OS/2. Setup did not make
	  changes to your AUTOEXEC.BAT and CONFIG.SYS files.
	
	Since OS/2 is a high-level operating system, Setup does not change the
	configuration files to protect the integrity of the system. As the
	user, you have this responsibility. Changing configuration files can
	hamper the installation of Windows 3.0 in the DOS compatibility box
	of OS/2; modifying these files may also cause problems with OS/2. This
	type of installation is not recommended.
	
	Additional query words: 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
