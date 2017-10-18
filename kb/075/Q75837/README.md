---
layout: page
title: "Q75837: Using BACKUP/F After Installing the MS-DOS 5 Upgrade"
permalink: kb/075/Q75837/
---

## Q75837: Using BACKUP/F After Installing the MS-DOS 5 Upgrade

	Article: Q75837
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
	
	After installing the Microsoft MS-DOS 5 Upgrade, the BACKUP command can return
	the message "Incorrect DOS version" if you try to format a disk during the
	backup procedure using the /f[:size] parameter.
	
	MORE INFORMATION
	================
	
	BACKUP can appear to work correctly for the first few disks, but when the BACKUP
	command tries to back up the OLD_DOS.X directory it attempts to use the older
	version of FORMAT.COM.
	
	To correct the problem, remove or rename all old FORMAT.COM files from your
	computer OR delete the OLD_DOS.X directory using DELOLDOS.EXE.
	
	To find all occurrences of FORMAT.COM, type the following from the root
	directory:
	
	  " DIR/S FORMAT.COM " (without the quotation marks)
	
	More information on the BACKUP command can be found in the "Microsoft MS-DOS
	User's Guide" on pages 370-373.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
