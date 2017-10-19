---
layout: page
title: "Q74279: No Support for 2.88 Megabyte Disks During Setup"
permalink: /kb/074/Q74279/
---

## Q74279: No Support for 2.88 Megabyte Disks During Setup

	Article: Q74279
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft MS-DOS 5 or later Upgrade supports 2.88-megabyte 3.5-inch disks;
	however, the MS-DOS 5.0 or later Setup program does not.
	
	MORE INFORMATION
	================
	
	The MS-DOS 5.0 or later Setup program will allow setup to 720K and 1.44-
	megabyte 3.5-inch disks, but support for 2.88-megabyte disks is not a part of
	the Setup program.
	
	If a 2.88-megabyte disk (formatted or unformatted) is used in conjunction with
	the Setup program, Setup will not recognize the disk, and will offer to format a
	1.44-megabyte or 720K disk.
	
	To achieve this type of setup, install MS-DOS 5.0 or later on different-size
	media, and copy the disks to the 2.88-megabyte disk.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 uninstall disk
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
