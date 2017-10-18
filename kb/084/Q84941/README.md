---
layout: page
title: "Q84941: Abnormal FORMAT Termination Yields Invalid Media"
permalink: kb/084/Q84941/
---

## Q84941: Abnormal FORMAT Termination Yields Invalid Media

	Article: Q84941
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use the MS-DOS FORMAT command to reformat a fixed disk drive and you
	terminate the command by pressing CTRL+C (or CTRL+BREAK) at the "Proceed with
	Format (Y/N)?" prompt, later attempts to access the drive produce the following
	error, even if the drive was properly formatted before the abnormal
	termination:
	
	  Invalid media type reading drive X
	  Abort, Retry, Fail?
	
	WORKAROUND
	==========
	
	To regain access to the drive, do the following:
	
	1. Issue the FORMAT command again, and press N (for No) at the "Proceed with
	  format (Y/N)?" prompt.
	
	2. Reboot the machine.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 5.0, 5.0a, and
	6.0. This problem was corrected in later versions of MS-DOS.
	
	MORE INFORMATION
	================
	
	This condition is caused by an error in the MS-DOS FORMAT CTRL+C handler. When
	FORMAT is terminated at any point by pressing CTRL+C (or CTRL+BREAK), it assumes
	that the disk is only partially formatted and therefore unusable; therefore, the
	disk is marked as such.
	
	Additional query words: 5.00 5.00a 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	
