---
layout: page
title: "Q58495: MS-DOS System Date Cannot Have a Year Past 2099"
permalink: kb/058/Q58495/
---

## Q58495: MS-DOS System Date Cannot Have a Year Past 2099

	Article: Q58495
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
	
	The year portion of the system date has 7 bits for storage (0-127). MS-DOS
	offsets the year from 1980; therefore, the maximum value for the year should be
	2107. However, due to a ROM BIOS limitation, 2099 is the maximum value. The
	description for interrupt 1AH details the implementation causing the limitation.
	
	MORE INFORMATION
	================
	
	The ROM-BIOS interrupt 1AH deals with BCD (binary coded decimal) numbers. Each
	decimal place is represented by 4 bits. The century is returned in CH (either 19
	or 20). CL contains the year. Each byte can have a value ranging from 0 to 9.
	The numbers returned are absolute values, not offsets from 1980. Thus, the
	maximum value for the (decade) year is 99. With the century returning 19 or 20,
	the maximum year (century-year) is 2099.
	
	Additional query words: 6.22 3.20 3.21 3.30 3.30a 4.00 4.01 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
