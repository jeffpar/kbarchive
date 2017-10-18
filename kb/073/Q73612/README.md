---
layout: page
title: "Q73612: MS-DOS 5 Upgrade Incorrectly Detects Monochrome Monitors"
permalink: kb/073/Q73612/
---

## Q73612: MS-DOS 5 Upgrade Incorrectly Detects Monochrome Monitors

	Article: Q73612
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MS-DOS 5.0 Upgrade Setup program improperly identifies monochrome monitors.
	Instead of expanding the files MONO.IN_ and MONO.GR_ to the system as
	DOSSHELL.INI and DOSSHELL.GRB, Setup expands CGA.VI_, CGA.IN_ and CGA.GR_ as
	DOSSHELL.VID, DOSSHELL.INI, and DOSSHELL.GRB. Executing DOSSHELL with these
	files causes the system to hang.
	
	MORE INFORMATION
	================
	
	The DOSSHELL.VID file should be deleted from the DOS subdirectory, and the files
	MONO.IN_ and MONO.GR_ expanded into the DOS subdirectory as DOSSHELL.INI and
	DOSSHELL.GRB, respectively. MONO.IN_ and MONO.GR_ are located on disk 2
	(3.5-inch disk set) or disk 3 (5.25-inch disk set).
	
	For more information on updating MS-DOS Shell video files, query on the following
	words:
	
	  identify upgrade dos 5.0 shell video
	
	Additional query words: 5.00 noupd install
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
