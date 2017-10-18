---
layout: page
title: "Q119213: Running Setup for the DoubleSpace Conversion from a Hard Disk"
permalink: kb/119/Q119213/
---

## Q119213: Running Setup for the DoubleSpace Conversion from a Hard Disk

	Article: Q119213
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
	
	This article explains how you can run the MS-DOS 6.22 DoubleSpace conversion
	setup program from a drive other than a floppy disk drive.
	
	MORE INFORMATION
	================
	
	If a floppy disk drive is not present on the system and you want to run the
	DoubleSpace-to-DriveSpace conversion setup program, you can run it from the hard
	disk drive or any other drive. To do so, the files included with the conversion
	program must be located in the root directory of the drive you want to run Setup
	from. If the files are not located in the root directory of the drive, you
	receive the following message
	
	  An error occurred while reading <drive>:\DRVSPACE.MR1
	
	where <drive> is the drive from which you ran SETUP.EXE.
	
	The following files need to be in the root directory:
	
	  DBLCDESC TXT   2,460   05-31-94   6:22a
	  DRVSPACE MR1     512   05-31-94   6:22a
	  README   TXT   2,830   05-31-94   6:22a
	  SETUP    EXE   9,151   05-31-94   6:22a
	
	
	Additional query words: convert dos msdos mrci stepup step up step-up
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	
