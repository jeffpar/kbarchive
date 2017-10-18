---
layout: page
title: "Q85591: Colorado Tape Backup Does Not Work from Windows"
permalink: kb/085/Q85591/
---

## Q85591: Colorado Tape Backup Does Not Work from Windows

	Article: Q85591
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Colorado Memory Systems tape backup systems may fail to operate with Microsoft
	Windows. Some of these units use the floppy drive controller instead of a
	separate controller card. If the backup unit fails to operate under Windows, add
	SMARTDRV double buffering and DRIVPARM statements for both floppy drives.
	
	WORKAROUND
	==========
	
	According to Colorado Memory Systems, you may need to add SMARTDrive with double
	buffering to enable the tape system to operate correctly with Windows. You may
	also need to add DRIVPARM lines for the floppy controllers. To determine if you
	need to add a DRIVPARM command, check to see if the tape drive works correctly
	at the MS-DOS level but fails to operate under Windows. The backup may fail from
	either the icon or from an MS-DOS session.
	
	To add double buffering, add one of the following lines:
	
	- For versions of SMARTDRV.EXE earlier than 4.0, add the following line to the
	  SMARTDRV.SYS file:
	
	  device=c:\windows\smartdrv.sys /b+
	
	- For SMARTDRV.EXE version 4.0 (included with Windows 3.1), add the following
	  line to the CONFIG.SYS file.
	
	  device=c:\windows\smartdrv.exe /double_buffer+
	
	(NOTE: SMARTDRV.EXE version 4.0 is included with Microsoft Windows version 3.1.
	Earlier versions of SMARTDrive have the filename SMARTDRV.SYS.)
	
	The following DRIVPARM statements are valid for MS-DOS versions 3.2 and later:
	
	     drivparm=/d:0 /f:n  <-see your MS-DOS manual for the value of "n">
	     drivparm=/d:1 /f:n  <-see your MS-DOS manual for the value of "n">
	
	REFERENCES
	==========
	
	Colorado Memory Systems technical support: (303) 669-8000
	
	Additional query words: 3.00 3.00a 3.0 3.0a 3.1 3.11 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
