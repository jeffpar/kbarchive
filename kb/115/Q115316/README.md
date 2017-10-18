---
layout: page
title: "Q115316: Microsoft Backup for Windows Err Msg: Bad Handle..."
permalink: kb/115/Q115316/
---

## Q115316: Microsoft Backup for Windows Err Msg: Bad Handle...

	Article: Q115316
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
	
	The following error message appears when you start Microsoft Backup for Windows
	
	  Stop
	  Bad Handle HA:<n> HL:<n> HU:<n> HS:<n> BA:<n>
	  BL:<n> BU:<n> BS:<n>
	
	where <n> is an integer. The value of <n> varies from system to
	system.
	
	CAUSE
	=====
	
	This problem occurs when the DEFAULT.SET or DEFAULT.SLT file becomes corrupted.
	
	RESOLUTION
	==========
	
	In File Manager, delete both the DEFAULT.SET and DEFAULT.SLT files from the DOS
	directory. Restart the MS-DOS Microsoft Backup for Windows utility.
	
	MORE INFORMATION
	================
	
	When MS-DOS Microsoft Backup for Windows starts, it checks the DOS directory for
	DEFAULT.SET and DEFAULT.SLT. If these files are not found, it creates new ones.
	
	Additional query words: 6.22 6.20 6.00 6.21 3.1 backup win mwbackup.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
