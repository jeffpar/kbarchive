---
layout: page
title: "Q163371: Rdisk Initialization Failed During Unattended Installation"
permalink: kb/163/Q163371/
---

## Q163371: Rdisk Initialization Failed During Unattended Installation

	Article: Q163371
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you perform an unattended installation of Windows NT Server or Windows NT
	Workstation 4.0 and you use the $OEM$ directory and the Cmdlines.txt file to
	apply a service pack as part of the installation, you may receive the following
	error message:
	
	  RDISK.EXE - DLL INITIALIZATION FAILED The application failed to initialize
	  because the Windows station is shutting down.
	
	You must then click OK to continue the installation.
	
	RESOLUTION
	==========
	
	To resolve this error message and to keep the computer from restarting
	prematurely, you must use the /U and /Z switches on the Update.exe command, as
	in the following example:
	
	  UPDATE /U /Z
	
	Additional query words: RDISK Unattended Sysdiff prodnt restart reboot rebooting
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
