---
layout: page
title: "Q104523: Backup for MS-DOS Err Msg: CONTROL.FIL Cannot Be Read by DOS"
permalink: /kb/104/Q104523/
---

## Q104523: Backup for MS-DOS Err Msg: CONTROL.FIL Cannot Be Read by DOS

	Article: Q104523
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you back up an entire hard disk drive using Microsoft Backup for MS-DOS
	(MSBACKUP.EXE), you may receive the following error message:
	
	  CONTROL.FIL cannot be read by DOS. Use DOS CHKDSK to correct the problem,
	  then retry backup.
	
	NOTE: This error does not occur if you are using Microsoft Backup for Windows
	(MWBACKUP.EXE).
	
	CAUSE
	=====
	
	This error is generated if you are backing up the SENTRY directory while Delete
	Sentry is resident in memory.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Remove UNDELETE from memory by typing "UNDELETE /U" (without the quotation
	  marks), at the MS-DOS command prompt.
	
	-or-
	
	- Avoid backing up the SENTRY directory by not including this directory in the
	  file-selection process in Backup.
	
	MORE INFORMATION
	================
	
	When this error appears, Backup gives you the options Continue (the default) and
	Cancel Backup. If you choose Continue, the remaining files are backed up.
	Choosing Cancel returns you to the first Backup screen.
	
	Additional query words: 6.00 6.20 6.22 undelete sentry
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
