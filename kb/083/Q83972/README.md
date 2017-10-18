---
layout: page
title: "Q83972: File Manager Cannot Format Drive the System Was Started From"
permalink: kb/083/Q83972/
---

## Q83972: File Manager Cannot Format Drive the System Was Started From

	Article: Q83972
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): MS-DOS:4.x,5.0; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use File Manager (WINFILE.EXE) in the Microsoft Windows operating
	system version 3.1, you cannot format the drive that the system was started
	from. For example, if the machine was started from drive A, you cannot format a
	disk in drive A from File Manager. If you try to do this, Windows generates the
	following error message:
	
	  Cannot format the MS-DOS startup drive
	
	NOTE: This problem occurs only with versions of MS-DOS later than 4.01.
	
	MORE INFORMATION
	================
	
	File Manager attempts to read the boot sector from the boot drive the system was
	started from in order to format a disk. If File Manager tries to format the disk
	in the drive the system was started from, it has to assume that the drive has no
	boot sector on it and that it cannot to obtain one.
	
	Microsoft has confirmed this to be a problem in Windows version 3.1 File Manager.
	We are researching this problem and will post new information here as it becomes
	available.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311 kbMSDOSSearch kbMSDOS400 kbMSDOS500 kbMSDOS401
	Version           : MS-DOS:4.x,5.0; WINDOWS:3.1,3.11
	
	=============================================================================
	
