---
layout: page
title: "Q83381: Windows Err Msg: Startup Application Error: Application Req..."
permalink: kb/083/Q83381/
---

## Q83381: Windows Err Msg: Startup Application Error: Application Req...

	Article: Q83381
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Microsoft Windows operating system version 3.1 is started up, the following
	error message may appear:
	
	  Startup Application Error
	  Application requested abnormal termination
	
	After this message is displayed, the only available option may be to exit
	Windows.
	
	This error message may indicate an incompatible utility installed on the RUN= or
	LOAD= line of the WIN.INI file or a damaged StartUp group file.
	
	MORE INFORMATION
	================
	
	The "Startup Application Error" may be caused by the following problems:
	
	- A program or terminate-and-stay-resident (TSR) program that is unable to
	  execute properly may be listed on the LOAD= or RUN= line in the WIN.INI file.
	
	- The StartUp group may be damaged or an application loaded in this group may
	  be corrupted.
	
	To correct this problem, disable the LOAD= and RUN= lines in the WIN.INI file by
	placing a semicolon (;) at the beginning of each line.
	
	If the StartUp group is causing the problem, disable the STARTUP.GRP entry in the
	PROGMAN.INI file or hold down the SHIFT key while starting Windows to disable
	the StartUp group for that Windows session.
	
	Additional query words: 3.10 3.11 Start Up
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
