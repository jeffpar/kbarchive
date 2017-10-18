---
layout: page
title: "Q120590: DRVSPACE /MOUNT Err Msg: Cannot Find the File DRVSPACE.000"
permalink: kb/120/Q120590/
---

## Q120590: DRVSPACE /MOUNT Err Msg: Cannot Find the File DRVSPACE.000

	Article: Q120590
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SUMMARY
	=======
	
	If your DoubleSpace-compressed drive is already mounted and you run the
	following command
	
	  " dblspace /mount <x>: " (without the quotation marks)
	
	where <x> is the drive letter, the following incorrect error message is
	displayed:
	
	  Cannot find the file DBLSPACE.000
	
	This message should actually state that drive x is already mounted; it should not
	imply that the compressed volume file (CVF) is not found on the system.
	
	MORE INFORMATION
	================
	
	To determine whether the CVF has been previously mounted, type the following
	command
	
	  " dblspace /list " (without the quotation marks)
	
	You can use the DIR command and then search for the CVF name stated in the error
	message.
	
	NOTE: The error message always returns the CVF file extension .000, which is not
	necessarily the correct extension.
	
	Additional query words: 6.00 6.20 6.21 6.22 invalid err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
