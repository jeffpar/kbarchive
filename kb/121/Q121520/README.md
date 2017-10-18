---
layout: page
title: "Q121520: Fatal Error on Drive 1 with Adaptec 1540CF SCSI Controller"
permalink: kb/121/Q121520/
---

## Q121520: Fatal Error on Drive 1 with Adaptec 1540CF SCSI Controller

	Article: Q121520
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
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
	
	When you use the Windows NT Backup program (NTBACKUP.EXE) with an Adaptec 1540CF
	SCSI controller and an Exabyte 8500 tape drive, the following error message may
	appear:
	
	  Fatal error on drive 1
	
	CAUSE
	=====
	
	This problem occurs when the on-board termination on the Adaptec 1540CF SCSI
	controller is not properly disabled.
	
	RESOLUTION
	==========
	
	The Adaptec 1540CF SCSI controller has a software option for on-board
	termination instead of physical resistor terminators. To perform the error- free
	backup, the on-board termination on this SCSI card needs to be fully disabled
	with the software option. For additional information regarding the software
	option, call Adaptec Technical Support at (800) 959-7274.
	
	The products discussed here are manufactured by Adaptec, Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodnt 3.10 aha
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WinNT:3.1,3.5,3.51,4.0
	
	=============================================================================
	
