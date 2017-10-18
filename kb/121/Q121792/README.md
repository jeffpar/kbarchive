---
layout: page
title: "Q121792: Stop 0x0000006b During Setup on NEC Image P60"
permalink: kb/121/Q121792/
---

## Q121792: Stop 0x0000006b During Setup on NEC Image P60

	Article: Q121792
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbhw kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After the first reboot during the installation process of Windows NT version 3.5
	on an NEC Image P60 computer with a Western Digital Caviar 2540 IDE hard disk,
	the following STOP message may appear:
	
	  STOP: 0x0000006b
	  Process1_initialization_failed
	
	CAUSE
	=====
	
	The NEC Image P60 computer has a setting in its CMOS setup to define its hard
	disk geometry. The Western Digital 2540 IDE hard disk has 1048 cylinders.
	
	
	RESOLUTION
	==========
	
	In the CMOS setup of the NEC Image P60 computer, change the hard disk geometry
	setting for the number of cylinders to 1024.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt bios 0x06b trap 3rdparty
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
