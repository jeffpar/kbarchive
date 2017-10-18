---
layout: page
title: "Q74204: MS-DOS CHKDSK Does Not Show Disk Label As a Hidden File"
permalink: kb/074/Q74204/
---

## Q74204: MS-DOS CHKDSK Does Not Show Disk Label As a Hidden File

	Article: Q74204
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
	
	The CHKDSK command in MS-DOS version 5.0 or later no longer shows the disk label
	as a hidden file, as was the case with previous versions.
	
	MORE INFORMATION
	================
	
	When comparing the MS-DOS 5 or later Upgrade disks with an earlier version of
	CHKDSK, a hidden file should appear in the earlier version's output. This does
	not indicate a problem with the disk.
	
	In versions of MS-DOS prior to 5.0, the disk label was shown as a hidden file
	under CHKDSK. When using CHKDSK from DOS 4.01 or earlier to view the first DOS 5
	Upgrade disk, you will get the following output:
	
	Volume DISK      1 created 04-09-1991 5:00a
	Volume Serial Number is 1966-0205
	
	   362496 bytes total disk space
	        0 bytes in 1 hidden file
	   353280 bytes in 11 user files
	     9216 bytes available on disk
	
	     1024 bytes in each allocation unit
	      354 total allocation units on disk
	        9 available allocation units on disk
	
	   651264 total bytes memory
	   443248 bytes free
	
	Using CHKDSK from MS-DOS 5.0 on the same Upgrade disk will produce the following
	output:
	
	Volume DISK      1 created 04-09-1991 5:00a
	Volume Serial Number is 1966-0205
	
	   362496 bytes total disk space
	   353280 bytes in 11 user files
	     9216 bytes available on disk
	
	     1024 bytes in each allocation unit
	      354 total allocation units on disk
	        9 available allocation units on disk
	
	   651264 total bytes memory
	   443248 bytes free
	
	If the label on a disk is removed, the hidden file will disappear. (This is not
	recommended for Upgrade disks.)
	
	For more information on CHKDSK, hidden files, and volume labels, query on the
	following words:
	
	  CHKDSK and HIDDEN and FILE and VOLUME and LABEL
	
	Additional query words: 5.00 5.00a 6.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	
