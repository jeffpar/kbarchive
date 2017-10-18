---
layout: page
title: "Q186597: Registering OCX and DLL files as System Globals"
permalink: kb/186/Q186597/
---

## Q186597: Registering OCX and DLL files as System Globals

	Article: Q186597
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may receive an error when installing or running an application stating that
	an OCX file or a DLL file needs to be registered as system global. Make a note
	of the file that needs to be registered.
	
	MORE INFORMATION
	================
	
	OCX Files
	---------
	
	1. Start your server in VGA mode.
	
	2. You will need to use the Regsvr.exe, Regsvr16.exe (16-bit), or Regsvr32.exe
	  (32-bit) command to register the OCX file as system global. These commands
	  are included in the development kit when Visual Basic or Visual FoxPro is
	  installed.
	
	Depending on the application, you may have to register several OCX files this
	way.
	
	DLL Files
	---------
	
	To register a DLL as a system global, go to the SYSTEM32 directory and locate the
	DLL mentioned in the error message. The command to register a file called
	Sample.dll is:
	
	  REGISTER /S SAMPLE.DLL
	
	Registration data for a program is recognized only when the program is loaded.
	Therefore, if you issue a REGISTER command for a program that is already loaded,
	the changes will not take effect until the next time the program is loaded.
	
	Also note that only administrators can run REGISTER.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
