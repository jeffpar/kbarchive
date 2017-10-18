---
layout: page
title: "Q71616: Windows Entertainment Pack 1 Will Not Set Up"
permalink: kb/071/Q71616/
---

## Q71616: Windows Entertainment Pack 1 Will Not Set Up

	Article: Q71616
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	If you are experiencing problems setting up the Windows Entertainment Pack 1
	(WEP 1), check the following:
	
	1. Boot the system clean (boot with your DOS system floppy disk). The WEP does
	  not require Windows to be in protected mode (standard or enhanced). As a
	  result, by simply booting with a DOS floppy disk, you will eliminate any TSR
	  or memory-resident utilities that load on boot.
	
	2. Check for available disk space. The WEP requires 70K of hard disk space to
	  load. Also, the WEP copies two files, WINBINXZ.EXE and WEPSETUP.INF to the
	  WINDOWS directory to run the Setup program. These files are deleted after
	  Setup is completed, but the Windows directory needs enough disk space to hold
	  these two files.
	
	3. If all else fails, decompress the WEP files using the Expand utility
	  (EXPAND.EXE) found on Disk 2 of your Windows 3.00 disks, onto your hard drive
	  and build your own program group and icons.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
