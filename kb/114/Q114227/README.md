---
layout: page
title: "Q114227: Err Msg: Invalid Setting in DBLSPACE.INI: FIRSTDRIVE=..."
permalink: kb/114/Q114227/
---

## Q114227: Err Msg: Invalid Setting in DBLSPACE.INI: FIRSTDRIVE=...

	Article: Q114227
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the following error message when you start your machine from the
	hard disk drive
	
	  Invalid setting in the DBLSPACE.INI file: FIRSTDRIVE=<*>
	
	where <*> is ASCII character 25 (decimal), which is the down-arrow
	character.
	
	In addition, your compressed drives do not mount at startup.
	
	CAUSE
	=====
	
	This problem can occur if the DBLSPACE.BIN file is not in memory (for example,
	because you pressed CTRL+F5 or CTRL+F8 at startup) and you run any of the
	following DoubleSpace commands and then reboot.
	
	  DBLSPACE /AUTOMOUNT=0|1
	  DBLSPACE /DOUBLEGUARD=0|1
	  DBLSPACE /ROMSERVER=0|1
	  DBLSPACE /SWITCHES=F|N|FN
	
	
	RESOLUTION
	==========
	
	To correct this problem, manually mount your DoubleSpace drive(s) by using the
	DBLSPACE /MOUNT command. You must do this for each compressed drive. For more
	information about this command, type "help dblspace /mount" (without the
	quotation marks) at an MS-DOS command prompt.
	
	NOTE: The DBLSPACE.EXE command should be on your uncompressed drive if you were
	able to execute the DoubleSpace commands listed under in the "Cause" section of
	this article. However, if it is not there, you must manually expand it from the
	original MS-DOS disks.
	
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: dblguard 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : MS-DOS:6.2
	
	=============================================================================
	
