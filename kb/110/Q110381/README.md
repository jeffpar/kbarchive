---
layout: page
title: "Q110381: U.S. Service Pack 2 Requires at Least 25 MB Free Disk Space"
permalink: /kb/110/Q110381/
---

## Q110381: U.S. Service Pack 2 Requires at Least 25 MB Free Disk Space

	Article: Q110381
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To run the update program that installs U.S. Service Pack 2 on an Intel- based
	system, you need at least 25 megabytes (MB) of free disk space on your system
	partition. MIPS-based systems require 32 MB free disk space, and DEC Alpha
	systems require 27 MB free disk space.
	
	If you do not have this much free space, an error message appears when you try to
	run the update and the program will stop.
	
	MORE INFORMATION
	================
	
	The update program replaces system files on your hard disk drive by renaming the
	old files and copying the new files into their place. When the update finished,
	the renamed files are deleted and the system is restarted. In order to guarantee
	enough space for all files on the update disks, you must have the amount of free
	disk space stated above, depending on your system type.
	
	The free space required by the update is only used until the update is finished.
	After it finishes and restarts the system, the space is available again. Because
	of this, it is possible to free up space by moving files to another drive or by
	backing them up and temporarily deleting them. They can then be restored back to
	the system drive after the update is finished.
	
	Additional query words: prodnt Service pack CSD003
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search kbWinNTW310Search
	Version           : :3.1
	
	=============================================================================
	
