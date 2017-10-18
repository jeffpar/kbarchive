---
layout: page
title: "Q122120: DriveSpace Err Msg After Installing over PC-DOS 6.1 or 6.3"
permalink: kb/122/Q122120/
---

## Q122120: DriveSpace Err Msg After Installing over PC-DOS 6.1 or 6.3

	Article: Q122120
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run the DriveSpace utility from MS-DOS 6.22 after upgrading from
	PC-DOS version 6.1 or 6.3, the following error message is displayed:
	
	  Your computer is running an incompatible version of the DRVSPACE.BIN file.
	  You must update DRVSPACE.BIN on the root directory of your drive.
	
	CAUSE
	=====
	
	This error occurs because the compression driver that IBM ships with versions
	6.1 and 6.3 of PC-DOS is incompatible with DriveSpace.
	
	MS-DOS 6.22 Setup runs correctly because the compression is not on the boot
	drive. Setup completes with no data loss; however, if you then try to run
	DriveSpace to convert the compressed drive, the above error message occurs.
	
	RESOLUTION
	==========
	
	You must copy the original PC-DOS DoubleSpace files back to the host drive, back
	up the data, reformat the host drive to remove compression, and then restore the
	data.
	
	MORE INFORMATION
	================
	
	The README.TXT from MS-DOS version 6.22, section 1.17 recommends that PC-DOS
	users remove disk compression before upgrading.
	
	
	Additional query words: 6.22 err msg 3rdparty drive space double
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	
