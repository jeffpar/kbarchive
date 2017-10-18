---
layout: page
title: "Q32857: BACKUP /A Prompts for Last Disk"
permalink: kb/032/Q32857/
---

## Q32857: BACKUP /A Prompts for Last Disk

	Article: Q32857
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Beginning with MS-DOS Version 3.30, BACKUP, when used with the /A option,
	prompts you to insert the last disk of the backup set into the target drive. In
	previous versions of BACKUP, there was no such prompt.
	
	The reason for this prompt is to ensure that the last diskette in the series is
	in the drive. Trying to append anything but the last disk in the series may
	cause problems.
	
	Additional query words: 3.30 3.30a 4.00 5.00 5.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x
	
	=============================================================================
	
