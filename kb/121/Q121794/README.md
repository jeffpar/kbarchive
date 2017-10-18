---
layout: page
title: "Q121794: Reinstalling MS-DOS 6.22 Step-Up with DriveSpace Installed"
permalink: kb/121/Q121794/
---

## Q121794: Reinstalling MS-DOS 6.22 Step-Up with DriveSpace Installed

	Article: Q121794
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To completely reinstall MS-DOS 6.22 from the Step-Up disks, you must first
	reinstall the version of MS-DOS that was on the system prior to MS-DOS 6.22.
	This process can become complicated if the drive containing the MS-DOS directory
	has been compressed using DriveSpace.
	
	The only supported method for reinstalling the MS-DOS 6.22 Step-Up on such
	systems is to uncompress the drive containing the MS-DOS directory before
	proceeding with the reinstallation of the prior MS-DOS version.
	
	MORE INFORMATION
	================
	
	To reinstall MS-DOS 6.22 Step-Up on a system whose MS-DOS directory is located
	on a DriveSpace-compressed drive, use the following steps:
	
	1. Uncompress the drive containing the MS-DOS directory.
	
	2. Run Setup with the /F parameter to create a single startup floppy disk that
	  contains system files from the version of MS-DOS that was on the system prior
	  to MS-DOS 6.22.
	
	3. Boot from the startup disk made in step 2.
	
	4. Reinstall the prior version of MS-DOS by running "setup" (without the
	  quotation marks) from Setup Disk 1.
	
	5. Run the MS-DOS 6.22 Step-Up.
	
	6. Recompress the drive containing the MS-DOS directory (if desired).
	
	
	Additional query words: msdos 6.22
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	
