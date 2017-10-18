---
layout: page
title: "Q129203: AMD SCSI is Detected when SCSI is Disabled in CMOS"
permalink: kb/129/Q129203/
---

## Q129203: AMD SCSI is Detected when SCSI is Disabled in CMOS

	Article: Q129203
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	If you disable SCSI support in your AMD CMOS settings and then install
	Windows NT (by running WINNT /B or WINNT32 /B, or Express Setup), Windows
	NT Setup detects the SCSI adapter and installs the AMD SCSI driver.
	
	The driver loads correctly but you cannot access SCSI devices normally. The
	system log indicates that the driver failed to load.
	
	To correct this problem, either enable SCSI support in your CMOS settings
	or run Windows NT Setup and remove the SCSI adapter driver.
	
	Additional query words: 3.10 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
