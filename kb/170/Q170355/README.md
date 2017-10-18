---
layout: page
title: "Q170355: New Tools Included with Zero Administration Kit"
permalink: kb/170/Q170355/
---

## Q170355: New Tools Included with Zero Administration Kit

	Article: Q170355
	Product(s): Microsoft Windows NT
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 21-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zero Administration Kit for Windows NT Workstation 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes several new tools included with the Zero Administration
	Kit (ZAK) for Windows NT.
	
	MORE INFORMATION
	================
	
	Floplock
	--------
	
	This tool is used to prevent use of the floppy disk drive (even after rebooting)
	using DACL (Discretionary Access Control Lists).
	
	If this service is configured to start up automatically at startup, only
	administrators and power users can access the floppy disk drive in Windows NT
	Workstation, and only administrators can access the floppy disk drive in Windows
	NT Server.
	
	Runapp
	------
	
	This tool is used to restart the TaskStation application if it is terminated
	unexpectedly.
	
	Con2Prt
	-------
	
	This tool provides scriptable functionality to the Add Printer Wizard so that
	printers can be added or removed from the command line using a script.
	
	FixPrf
	------
	
	Windows Messaging does not automatically use the currently logged on user name
	when it is started. The FixPrf tool forces the Windows Messaging client to load
	with the user name of the user logging in.
	
	Further information about these tools is available in the Zero Administration Kit
	Administrators Guide.
	
	
	Additional query words: 1.00 fixprf.exe
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTWsearch kbAudDeveloper kbZAWNTW400
	Version           : 1.0
	
	=============================================================================
	
