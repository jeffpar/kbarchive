---
layout: page
title: "Q73736: Effects of FDISK on Boot Record, Root Directory, and FATs"
permalink: kb/073/Q73736/
---

## Q73736: Effects of FDISK on Boot Record, Root Directory, and FATs

	Article: Q73736
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use MS-DOS FDISK to delete and then recreate a partition or logical drive
	on your hard disk, the boot record, root directory, and file allocation tables
	(FATs) of these logical drives may be affected in varying degrees, depending on
	the particular version of FDISK used.
	
	MORE INFORMATION
	================
	
	MS-DOS Version 3.2
	------------------
	
	  Area                Effect
	  ----                ------
	  Boot record         Preserves boot record.
	  Root directory      Preserves root directory.
	  1st copy of FAT     Preserves 1st copy of FAT.
	  2nd copy of FAT     Preserves 2nd copy of FAT.
	
	MS-DOS Version 3.21
	-------------------
	
	  Area                Effect
	  ----                ------
	  Boot record         Zeros area formerly occupied by boot record.
	  Root directory      Zeros area formerly occupied by root directory.
	  1st copy of FAT     Zeros area formerly occupied by 1st copy of FAT.
	  2nd copy of FAT     Zeros area formerly occupied by 2nd copy of FAT.
	
	MS-DOS Version 3.30a
	--------------------
	
	  Area                Effect
	  ----                ------
	  Boot record         Fills area formerly occupied by boot record
	                      with bytes containing value F6.
	  Root directory      Fills area formerly occupied by root directory
	                      with bytes containing value F6.
	  1st copy of FAT     Fills area formerly occupied by 1st copy of FAT
	                      with bytes containing value F6.
	  2nd copy of FAT     Fills area formerly occupied by 2nd copy of FAT
	                      with bytes containing value F6.
	
	MS-DOS Version 4.01a
	--------------------
	
	  Area                Effect
	  ----                ------
	  Boot record         Fills area formerly occupied by boot record
	                      with bytes containing value F6.
	  Root directory      Invalidates root directory; may contain
	                      "garbage" values.
	  1st copy of FAT     Invalidates 1st copy of FAT; may contain
	                      "garbage" values.
	  2nd copy of FAT     Invalidates 2nd copy of FAT; may contain
	                      "garbage" values.
	
	MS-DOS Versions 5.0 and 6.0
	---------------------------
	
	  Area                Effect
	  ----                ------
	  Boot record         Fills area formerly occupied by boot record with
	                      bytes containing value F6.
	  Root directory      Preserves root directory information.
	  1st copy of FAT     Preserves 1st copy of FAT.
	  2nd copy of FAT     Preserves 2nd copy of FAT.
	
	Additional query words: 6.22 3.20 3.21 3.30a 4.01a 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
