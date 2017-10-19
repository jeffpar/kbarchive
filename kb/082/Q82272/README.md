---
layout: page
title: "Q82272: FORMAT May Allow Access to Unformatted Drives"
permalink: /kb/082/Q82272/
---

## Q82272: FORMAT May Allow Access to Unformatted Drives

	Article: Q82272
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If, while attempting to format a fixed disk, you terminate the MS-DOS FORMAT
	command by pressing N (No) at the
	
	  Proceed with Format (Y/N)
	
	message, MS-DOS may allow access to a fixed disk drive even if it has never been
	properly formatted.
	
	A drive accessed in this manner isn't stable for use with MS-DOS, and may report
	large numbers of lost allocation units or other problems when you run the MS-DOS
	CHKDSK command.
	
	CAUSE
	=====
	
	Responding N to the "Proceed with Format (Y/N)?" message causes FORMAT to
	incorrectly set the drive's SYSTEM (as reported by FDISK) to FAT12 or FAT16,
	allowing access to the unformatted drive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 5.0, 5.0a, and
	6.0. This problem was corrected in MS-DOS FORMAT version 6.2.
	
	WORKAROUND
	==========
	
	To return the drive to its inaccessible status, simply reboot the machine. To
	prepare the drive for use with MS-DOS, use the FORMAT command to format the
	drive.
	
	Additional query words: 5.00 5.00a 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0
	
	=============================================================================
	
