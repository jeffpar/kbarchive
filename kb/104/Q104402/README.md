---
layout: page
title: "Q104402: PC WSPlus: Err Msg: Not Enough Disk Space Available..."
permalink: kb/104/Q104402/
---

## Q104402: PC WSPlus: Err Msg: Not Enough Disk Space Available...

	Article: Q104402
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a,3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Setup program (SETUP.EXE) to install version 1.0 or 1.0a of
	Microsoft Schedule+ for Windows, the following error message may appear:
	
	  There is not enough disk space available to install Schedule+
	
	The error message indicates that there is not enough disk space on the drive
	where Schedule+ is being installed. However, this message will also appear when
	there is not enough disk space available on the disk drive or partition where
	Microsoft Windows is installed.
	
	NOTE: This error message may also appear when you try to load versions 3.0, 3.0b,
	and 3.2 of Microsoft Mail for PC Networks.
	
	CAUSE
	=====
	
	When the Setup program determines available disk space, it looks at the target
	drive for information. When the Setup program attempts to write to the Windows
	directory (on a different drive), there may not be enough disk space to write
	the SCHDPLUS.INI into the Windows directory and the necessary .DLL files into
	the WINDOWS\SYSTEM subdirectory.
	
	RESOLUTION
	==========
	
	Move or delete files to free up the drive and ensure there is enough disk space
	available on the drive.
	
	MORE INFORMATION
	================
	
	Disk Space Requirements: (Clean Setup)
	
	  Microsoft Schedule+: approximately 1.6 MB
	  The disk drive Windows resides on: approximately 1.2 MB
	
	Additional query words: schedule plus 1.00 1.00a partition
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbScheduleSearch kbZNotKeyword3 kbSchedule100 kbSchedule100a kbMailPCN320 kbMailPCN300 kbMailPCN300b
	Version           : WINDOWS:1.0,1.0a,3.0,3.0b,3.2
	
	=============================================================================
	
