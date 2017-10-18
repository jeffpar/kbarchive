---
layout: page
title: "Q75490: Troubleshooting &quot;Unrecoverable Application Error&quot; in DrWatson"
permalink: kb/075/Q75490/
---

## Q75490: Troubleshooting &quot;Unrecoverable Application Error&quot; in DrWatson

	Article: Q75490
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use DrWatson to assist you in troubleshooting a Microsoft Windows version
	3.0 Unrecoverable Application Error (UAE), you may encounter the "Recoverable
	Application Error" (REA) instead. The RAE is DrWatson's interpretation of the
	Unrecoverable Application Error (UAE) and should be treated like a UAE.
	
	NOTE: DrWatson is included in Windows versions 3.1 and 3.11 and Windows for
	Workgroups version 3.1. It is not included with Windows 3.0 or Windows for
	Workgroups 3.11.
	
	MORE INFORMATION
	================
	
	A sample RAE is as follows:
	
	  
	
	    "RECOVERABLE APPLICATION ERROR"
	
	       "PP" ( PowerPoint, for example) "has failed in HPPCL5A.DRV"
	
	               "IGNORING FAULT IS RISKY"
	
	               "Cancel"        "Ignore"
	
	If you choose Cancel, you usually are returned to the current program,. If you
	choose Ignore, you usually receive the same error or a UAE. However, the second
	line of the error, which mentions which program failed in a particular area,
	gives some clue as to what caused the error, and should be considered in
	troubleshooting.
	
	For example, if DrWatson mentions the program failed in a certain driver, delete
	that driver and reinstall the driver. You may have to copy the EXPAND.EXE
	program over to your hard drive and expand the driver to your hard drive from
	the original Windows disks.
	
	For more information on how to use the EXPAND.EXE program, query on
	
	  expanding and files and from and original and disks and windows
	
	Additional query words: 3.00 3.00a win30 dr watson
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
