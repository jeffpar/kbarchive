---
layout: page
title: "Q86248: Incorrect CMOS Setting May Cause Insufficient Memory Error"
permalink: /kb/086/Q86248/
---

## Q86248: Incorrect CMOS Setting May Cause Insufficient Memory Error

	Article: Q86248
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may appear in Windows 3.1 when you try to run a
	program from a floppy disk drive:
	
	  Insufficient memory to run application; close one or more applications to
	  increase available memory and try again.
	
	RESOLUTION
	==========
	
	Verify that the CMOS settings for the floppy disk drive are correct. If the
	drive is set incorrectly (for example, you select 720K when the drive is a
	1.44MB), selecting the correct setting should correct the problem.
	
	
	MORE INFORMATION
	================
	
	When you run an application from the floppy disk drive by choosing Run from the
	File menu in Program Manager, the above error message may occur if the drive is
	incorrectly configured.
	
	An incorrect CMOS floppy disk drive setting may also display the following
	message:
	
	  Cannot find file <X>:<FILENAME> (or one of its components). Check
	  to ensure the path and filename are correct and that all required libraries
	  are available.
	
	where <X> is the floppy disk drive letter and <FILENAME> is the name
	of the program being loaded.
	
	When you attempt to install an application from the floppy disk drive, the
	following message may be displayed:
	
	  Not enough memory to start the specified application.
	
	Additional query words: 3.10 errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
