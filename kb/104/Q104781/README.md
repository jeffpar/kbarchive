---
layout: page
title: "Q104781: Cannot Delete SUBST Drives If You Are Using DoubleSpace"
permalink: /kb/104/Q104781/
---

## Q104781: Cannot Delete SUBST Drives If You Are Using DoubleSpace

	Article: Q104781
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	SUBST does not correctly delete substituted drives when you are using
	DoubleSpace.
	
	For example, if you use SUBST as follows to create an E drive, you cannot
	correctly remove it:
	
	  SUBST E: C:\DOS
	
	When you type "SUBST E /D" (without the quotation marks), the drive is not
	deleted correctly.
	
	Some programs (such as Microsoft Diagnostics [MSD]) still report the drive is
	valid. If you attempt to access the drive from the MS-DOS command prompt, you
	receive the message "Error reading drive E, Abort, Retry, Fail?" instead of the
	message "Invalid drive specification."
	
	NOTE: This problem occurs only when you use a drive letter that is reserved for
	use by DoubleSpace. To determine which drives are reserved for use by
	DoubleSpace, type "dblspace /list" (without the quotation marks) at the MS-DOS
	command prompt and then press ENTER.
	
	CAUSE
	=====
	
	
	RESOLUTION
	==========
	
	To work around this situation, restart your computer.
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 6.0 and 6.2. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 6.00 6.20 SUSBT.EXE
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
