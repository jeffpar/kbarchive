---
layout: page
title: "Q114804: Error Running NTBACKUP on NCR System 3000 Model 3410"
permalink: /kb/114/Q114804/
---

## Q114804: Error Running NTBACKUP on NCR System 3000 Model 3410

	Article: Q114804
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Windows NT Backup program (NTBACKUP) with a supported tape
	backup device on a NCR System 3000 Model 3410 machine with an on-board NCR 53C94
	SCSI controller, the following error message may appear:
	
	  Error: Poll driver failed: severe error shutting off poll drive
	
	RESOLUTION
	==========
	
	To avoid this problem, do one of the following:
	
	- Change the SCSI ID numbers of the SCSI devices.
	
	  -or-
	
	- Change the SCSI bus termination (if faulty).
	
	  -or-
	
	- Change the physical order of the SCSI devices on the SCSI bus.
	
	
	The NCR products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: prodnt err msg
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WinNT:3.1,3.5,3.51,4.0
	
	=============================================================================
	
