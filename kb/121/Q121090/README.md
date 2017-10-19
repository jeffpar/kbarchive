---
layout: page
title: "Q121090: WIN /D:T Disables Printing and Communications in WFWG 3.11"
permalink: /kb/121/Q121090/
---

## Q121090: WIN /D:T Disables Printing and Communications in WFWG 3.11

	Article: Q121090
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you start Windows for Workgroups with the command WIN /D:T and you try to
	print or use a communications (COM) port, you receive the following error
	message:
	
	  LPT1 is being used by another application.
	  When the application is finished with the port, resume printing.
	
	MORE INFORMATION
	================
	
	You may need to start Windows for Workgroups with the /D:T switch as part of
	standard troubleshooting. Doing so disables all printing and communications
	until Windows for Workgroups is restarted normally.
	
	Under normal circumstances, the communications driver (COMM.DRV) calls VCOMM.386
	to determine the appropriate port and parameters to print or communicate to. The
	/D:T switch prevents all *.386 files from loading. Therefore, when COMM.DRV
	attempts to call VCOMM.386 to begin printing, the driver is not loaded into
	memory, further printing and communications port use is impossible, and the
	error message is displayed.
	
	This behavior is by design; the /D:T switch is included for troubleshooting
	purposes only.
	
	
	Additional query words: tshoot 3.11 com1 com2
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
