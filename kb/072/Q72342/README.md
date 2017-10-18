---
layout: page
title: "Q72342: Restoring the Original Version Table in SETVER.EXE"
permalink: kb/072/Q72342/
---

## Q72342: Restoring the Original Version Table in SETVER.EXE

	Article: Q72342
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SETVER.EXE driver contains default information in the version table at ship
	time. This information is included for specific reasons and should not be
	altered unless you are certain that the alterations are appropriate, such as
	when a program manufacturer suggests an alteration.
	
	MORE INFORMATION
	================
	
	If you do perform alterations to the SETVER.EXE version table, you can restore
	it to its original state using one of the following two methods:
	
	- Expand the SETVER.EX_ driver from the original Microsoft MS-DOS 5.0 disks.
	  The SETVER.EX_ file can be found on disk 1 (3.5-inch disk set) or disk 2
	  (5.25-inch disk set). If an OEM (original equipment manufacturer) version of
	  MS-DOS is being used, SETVER.EX_ may not be on the disks mentioned above. To
	  find SETVER.EX_, search for it with the following command:
	
	     dir setver.ex_
	
	  To expand the file, you must use the EXPAND utility included with MS-DOS 5.0.
	  Place the proper disk in the proper drive. From the directory in which MS-DOS
	  5.0 is installed, issue the following command (assuming the disk is in drive
	  A and C:\DOS is the directory in which MS-DOS 5 is installed):
	
	     expand a:\setver.ex_ c:\dos\setver.exe
	
	  The file will be expanded from the disk to the C:\DOS directory, and the
	  original version table will be restored.
	
	- If you have made a copy of the SETVER.EXE file created by the Microsoft
	  MS-DOS 5.0 installation procedure, you can replace the altered version with
	  the copy. You may want to make a copy of SETVER.EXE before making any changes
	  to the version table. To make a copy, issue the following command (assuming
	  that C:\DOS is the directory in which MS-DOS is installed):
	
	     copy c:\dos\setver.exe c:\dos\setver.bak
	
	  Having a backup ensures that if at any time the SETVER table is mistakenly
	  altered or becomes corrupted, the original information can be restored by
	  issuing the following command:
	
	     copy c:\dos\setver.bak c:\dos\setver.exe
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
