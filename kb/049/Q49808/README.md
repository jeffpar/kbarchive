---
layout: page
title: "Q49808: MS-DOS FORMAT &quot;/1&quot; Switch Should Not Be Used on 1.2 MB Drive"
permalink: kb/049/Q49808/
---

## Q49808: MS-DOS FORMAT &quot;/1&quot; Switch Should Not Be Used on 1.2 MB Drive

	Article: Q49808
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
	
	The /1 switch of the FORMAT command should only be used on a 360-kilobyte (K)
	disk drive. It should not be used on a 1.2-megabyte(MB) disk drive. If the /1
	switch is used on a non-360K drive, FORMAT returns the following error message:
	
	  Parameters not compatible. Format failure.
	
	The purpose of the /1 switch is to format 160K and 180K disks. It cannot be used
	in conjunction with the /4 switch.
	
	
	Additional query words: 6.22 3.x 4.00 4.01 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
