---
layout: page
title: "Q100621: Backup Err Msg: Error Creating Component File on Drive X"
permalink: /kb/100/Q100621/
---

## Q100621: Backup Err Msg: Error Creating Component File on Drive X

	Article: Q100621
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to back up files using the MS-DOS Path option in Microsoft Backup for
	Windows, you may receive the following error message
	
	  Error creating component file on drive <X>. Please replace the volume
	  in drive X.
	
	where <X> is the letter of your floppy disk drive.
	
	CAUSE
	=====
	
	This problem occurs if you do either of the following:
	
	- Use an unformatted floppy disk
	
	-or-
	
	- Type an invalid character in the path (for example, a:\*.* or d:\?xxx)
	
	RESOLUTION
	==========
	
	To correct this problem, make sure you are using valid characters in the path,
	and use preformatted disks to back up files using the MS-DOS Path option or back
	up files directly to drive A or drive B.
	
	Additional query words: 6.00 6.20 windows 3.1 diskette mwbackup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
