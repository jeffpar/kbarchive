---
layout: page
title: "Q75392: RESTORE /D Returns 'Restore File Sequence Error' Message"
permalink: /kb/075/Q75392/
---

## Q75392: RESTORE /D Returns 'Restore File Sequence Error' Message

	Article: Q75392
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the "RESTORE A: C:\*.* /S /D" command is performed and it reaches a file
	that is divided between two of the backup disks, the following message is
	displayed:
	
	  restore file sequence error
	
	The RESTORE command then terminates.
	
	Note: The same error occurs if the RESTORE command is used without using the
	asterisk (*) as a wildcard.
	
	MORE INFORMATION
	================
	
	If the "RESTORE A: C:\*.<extension> /S /D" command is performed and a file
	with the <extension> is not split between disks, it correctly displays a
	list of <extension> files on the backup disks.
	
	If "RESTORE A: C:\*.* /S" is performed, it correctly restores ALL of the files
	from the backup disks, regardless of whether or not any files are divided over
	more than one disk.
	
	Microsoft has confirmed this to be a problem in MS-DOS version 5.0. We are
	researching this problem and will post new information here as it becomes
	available.
	
	WORKAROUND
	==========
	
	When prompted for the second disk, leave the first disk in and press ENTER. An
	error message is displayed stating that the disks are out of order. After the
	error message is displayed, remove the first disk and insert the second disk.
	Press ENTER to continue the process.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
