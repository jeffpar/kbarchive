---
layout: page
title: "Q104538: DBLSPACE /UNCOMPRESS Doesn't Work (Network Mapped over Host)"
permalink: kb/104/Q104538/
---

## Q104538: DBLSPACE /UNCOMPRESS Doesn't Work (Network Mapped over Host)

	Article: Q104538
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	When you try to uncompress a DoubleSpace-compressed drive, DoubleSpace may not
	uncompress the drive without generating an error message.
	
	CAUSE
	=====
	
	If you map a network drive over a DoubleSpace host drive, DoubleSpace cannot
	uncompress the drive and fails to display an error message.
	
	For example, if your DoubleSpace-compressed drive is D, its host drive is I, and
	you have a network drive assigned I, you cannot uncompress drive D.
	
	RESOLUTION
	==========
	
	To work around this problem, disconnect from the conflicting network connection
	before you uncompress your DoubleSpace-compressed drive(s).
	
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
