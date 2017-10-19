---
layout: page
title: "Q104990: Problems Using DoubleSpace on Disk Manager Partitioned Drive"
permalink: /kb/104/Q104990/
---

## Q104990: Problems Using DoubleSpace on Disk Manager Partitioned Drive

	Article: Q104990
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	If the DMDRVR.BIN command is loaded after SMARTDRV /DOUBLE_BUFFER in your
	CONFIG.SYS file and your hard disk drive has more than 1024 cylinders, it may
	appear that your compressed data is lost after you create a new
	DoubleSpace-compressed drive.
	
	This problem occurs when you have other DoubleSpace-compressed drives and you try
	to create a new DoubleSpace-compressed drive using the Disk Manager partitioned
	drive as the host.
	
	CAUSE
	=====
	
	This problem occurs when DMDRVR.BIN is loaded after SMARTDRV DOUBLE_BUFFER in
	the CONFIG.SYS file. DMDRVR.BIN should be the first device loaded in the
	CONFIG.SYS file.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	1. Restart your computer and press CTRL+F5 when the "Starting MS-DOS..." message
	  is displayed.
	
	2. Delete the C:\DBLSPACE.BIN and C:\DBLSPACE.INI files.
	
	  NOTE: You may have to remove the file attributes first.
	
	3. Restart your computer.
	
	4. Edit your CONFIG.SYS file with a text editor such as MS-DOS Editor.
	
	5. Move the DMDRVR.BIN command to the top of your CONFIG.SYS file.
	
	6. Save the CONFIG.SYS file and exit the text editor.
	
	7. Restart your computer.
	
	8. Run DoubleSpace and create the new DoubleSpace-compressed drive again.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
