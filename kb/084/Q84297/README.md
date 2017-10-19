---
layout: page
title: "Q84297: FORMAT Command Formats Current Drive in MS-DOS 1.x, 2.x"
permalink: /kb/084/Q84297/
---

## Q84297: FORMAT Command Formats Current Drive in MS-DOS 1.x, 2.x

	Article: Q84297
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:1.x,2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 1.x, 2.11, 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In MS-DOS versions 1.x and 2.x, the FORMAT command formats the current drive
	unless another drive is specified. For example, the command
	
	  C:\dos>format
	
	formats drive C.
	
	MS-DOS versions 3.0 and later require that you specify the drive to be formatted
	(for example, FORMAT C:); if no drive is specified, FORMAT displays the error:
	
	  Required parameter missing
	
	MORE INFORMATION
	================
	
	Also in versions 3.0 and later, FORMAT displays the message
	
	  WARNING, ALL DATA ON NON-REMOVABLE DISK DRIVE C: WILL BE LOST!
	  Proceed with Format (Y/N)?
	
	when you issue the FORMAT command for a hard drive. To format the drive, press Y,
	then press ENTER.
	
	In MS-DOS versions 4.x, FORMAT requires that you enter the drive volume label
	before it will format a hard disk. This protection feature was removed from
	MS-DOS versions 5.0 and 5.0a.
	
	Additional query words: 6.22 1.0 1.00 1.1 1.10 2.0 2.00 2.1 2.10 2.11 3.0 3.00 3.0a 3.00a 3.1 3.10 3.2 3.20 3.21 3.3 3.30 3.3a 3.30a 4.0 4.00 4.0a 4.00a 4.01 4.01a 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS1xSearch kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a kbMSDOS211
	Version           : MS-DOS:1.x,2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
