---
layout: page
title: "Q32169: FASTOPEN Harmful If Used with Disk Optimizers/Cachers"
permalink: kb/032/Q32169/
---

## Q32169: FASTOPEN Harmful If Used with Disk Optimizers/Cachers

	Article: Q32169
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using the FASTOPEN command with commercial disk optimizers or disk-caching
	software can cause damage to the hard disk's file system.
	
	Do not use software that performs INT 26h or INT 13h absolute disk writes, such
	as disk-caching or disk-optimizing software, with FASTOPEN loaded. Before using
	such software, remove the FASTOPEN statement from the file CONFIG.SYS and reboot
	the computer.
	
	MORE INFORMATION
	================
	
	Because MS-DOS does not need to read the FAT table each time these files are
	accessed, FASTOPEN stores the locations of files and directories in memory,
	making access to these files faster than normal. When a disk optimizer moves
	files around with absolute disk writes (INT 26h), the location of the file on
	the file system has changed. However, FASTOPEN does not realize that the file
	has been moved, and keeps its outdated map of the file in memory. If the file is
	accessed after the disk optimization, the file is not properly read. This can
	cause file-system integrity problems.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 windows win30 smart drive smartdrive smartdrv
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	
