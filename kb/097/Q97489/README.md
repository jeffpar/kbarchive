---
layout: page
title: "Q97489: MS-DOS Err Msg: Error Updating Version Table in MSDOS.SYS"
permalink: /kb/097/Q97489/
---

## Q97489: MS-DOS Err Msg: Error Updating Version Table in MSDOS.SYS

	Article: Q97489
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you install MS-DOS 6 Upgrade:
	
	  Error updating version table in MSDOS.SYS
	
	CAUSE
	=====
	
	This error occurs if Setup cannot read the SETVER.EXE file in your DOS
	directory.
	
	To work around this problem, rename the current SETVER.EXE file, and then install
	MS-DOS 6 Upgrade. For example, type the following at the MS-DOS command prompt
	and then press ENTER:
	
	  " ren c:\dos\setver.exe setver.old " (without the quotation marks)
	
	Additional query words: 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
