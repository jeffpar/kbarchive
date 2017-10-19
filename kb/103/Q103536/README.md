---
layout: page
title: "Q103536: Defrag Returns Errorlevel 1 When It Finds Allocation Errors"
permalink: /kb/103/Q103536/
---

## Q103536: Defrag Returns Errorlevel 1 When It Finds Allocation Errors

	Article: Q103536
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Defragmenter (Defrag) returns errorlevel 1 (internal error) if it
	detects allocation errors (even though errorlevel 7 is reserved for allocation
	errors).
	
	Defrag returns errorlevel 7 when allocation errors occur during the
	defragmentation process.
	
	For more information on Defrag exit codes, type "help defrag" (without the
	quotation marks) at the MS-DOS command prompt and then press ENTER.
	
	Additional query words: 6.22 6.20 exit code error level err
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
