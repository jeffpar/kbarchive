---
layout: page
title: "Q167652: New Installation of Windows NT 4.0 Results in STOP 0x00000050"
permalink: kb/167/Q167652/
---

## Q167652: New Installation of Windows NT 4.0 Results in STOP 0x00000050

	Article: Q167652
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Trying to perform a new or parallel installation of Windows NT 4.0 may result in
	the following error:
	
	  STOP: 0x00000050 (0xF000B682,0x00000000,0x00000000,0x00000002)
	  PAGE_FAULT_IN_NONPAGED_AREA
	
	NOTE: The first argument in the parenthesis may differ slightly.
	
	CAUSE
	=====
	
	This error may occur if you try to perform a clean installation of Windows NT
	4.0 using a modified Disk 2 of the three disk installation set that contains the
	Setupdd.sys file from Windows NT 4.0 Service Pack 2.
	
	RESOLUTION
	==========
	
	To resolve this problem, do either of the following:
	
	- Replace the Windows NT 4.0 Service Pack 2 copy of the Setupdd.sys file
	  located on Disk 2 with the original version of Setupdd.sys.
	
	  -or-
	
	- Create new floppy installation disks, by using the WINNT /OX or WINNT32 /OX
	  commands.
	
	MORE INFORMATION
	================
	
	Copying Setupdd.sys from Windows NT 4.0 Service Pack 2 to Disk 2 is a common
	scenario when trying to repair a computer running Windows NT 4.0 Service Pack 2.
	Although this procedure works fine for a repair or an in- place upgrade, it does
	not work for a new installation of Windows NT 4.0.
	
	
	Additional query words: prodnt 0x50 sp sp2 sp3
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
