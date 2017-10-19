---
layout: page
title: "Q113511: MSBACKUP Err Msg: Internal Error - Open Failure"
permalink: /kb/113/Q113511/
---

## Q113511: MSBACKUP Err Msg: Internal Error - Open Failure

	Article: Q113511
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Backup (MSBACKUP) returns following error message:
	
	  INTERNAL ERROR Open failure: C:\<path>\MSBACKUP.LOG
	
	CAUSE
	=====
	
	The error message may be the result of an incorrect environment setting. If the
	MSDOSDATA variable is set to point to an invalid subdirectory, MSBACKUP may
	display the above message. (The only available option is Exit Program.)
	
	RESOLUTION
	==========
	
	Make sure that the correct syntax is used to set the MSDOSDATA variable in the
	AUTOEXEC.BAT file and that a valid directory is selected. The syntax should be
	as follows
	
	     set MSDOSDATA=<drive>:\<directory>
	
	For more information on the MSDOSDATA environment variable, query on the
	following words in the Microsoft Knowledge Base:
	
	  " msdosdata and backup " (without the quotation marks)
	
	Additional query words: 6.20 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
