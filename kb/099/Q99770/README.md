---
layout: page
title: "Q99770: Third-Party Support Needed to Print to SCSI Printers"
permalink: /kb/099/Q99770/
---

## Q99770: Third-Party Support Needed to Print to SCSI Printers

	Article: Q99770
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1,4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	Windows NT does not support printing to a SCSI device by itself. It
	provides file system support for a SCSI printer port; however, it
	lacks a separate "print monitor" module. A print monitor is needed to
	communicate to SCSI ports. Application programming interfaces (APIs)
	for building print monitors are included in the Windows NT Device
	Driver Kit (DDK). Third-party vendors may make available print
	monitors after the final release of Windows NT.
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WinNT:3.1,4.0
	
	=============================================================================
	
