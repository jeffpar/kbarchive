---
layout: page
title: "Q104780: MIRROR Err Msg on DBLSPACE Drive: The Boot Sector for this..."
permalink: kb/104/Q104780/
---

## Q104780: MIRROR Err Msg on DBLSPACE Drive: The Boot Sector for this...

	Article: Q104780
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	MIRROR may return the following error message when you try to use it on a small
	DoubleSpace-compressed drive:
	
	  Drive D: error.
	  The boot sector for this drive is incompatible with the MIRROR command. The
	  mirror process was unsuccessful.
	
	CAUSE
	=====
	
	This problem occurs only if you try to use MIRROR on a very small (approximately
	1-megabyte) DoubleSpace-compressed drive that you created by running DBLSPACE
	/CREATE (or by choosing Create New Drive from the Compress menu in the
	DoubleSpace maintenance program).
	
	RESOLUTION
	==========
	
	To work around this problem, run Mirror on the host for the compressed drive. To
	determine which drive is your host drive, type "dblspace /list" (without the
	quotation marks) at the MS-DOS command prompt and then press ENTER.
	
	Additional query words: 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
