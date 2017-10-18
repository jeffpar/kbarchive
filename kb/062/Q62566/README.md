---
layout: page
title: "Q62566: MS-DOS FORMAT Program Writes Over ROM BIOS on 80486 PC"
permalink: kb/062/Q62566/
---

## Q62566: MS-DOS FORMAT Program Writes Over ROM BIOS on 80486 PC

	Article: Q62566
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.3,4.01,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.3, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under certain conditions, the MS-DOS versions 3.3 and 4.01 FORMAT program writes
	over the ROM BIOS.
	
	MS-DOS changes the number of sectors per track (FLOPPY PARAMETER TABLE entry + 4)
	when formatting a disk. While this really has no effect on systems with ROM or
	write-protected shadow RAM, it affects 80486 systems that cache the system BIOS.
	There is no way to write-protect the BIOS ROM (in the cache) when it is cached
	on an 80486 PC.
	
	The only workaround we recommend is to not use the caching for ROM BIOS in 486s
	with the FORMAT command in MS-DOS versions 3.3 and 4.01.
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 3.3 and 4.01.
	This problem does not occur in later versions of MS-DOS.
	
	Additional query words: 3.30 4.01 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.3,4.01,5.0
	
	=============================================================================
	
