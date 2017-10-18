---
layout: page
title: "Q85001: System Hangs When Restoring from SCSI Tape Drive"
permalink: kb/085/Q85001/
---

## Q85001: System Hangs When Restoring from SCSI Tape Drive

	Article: Q85001
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are restoring data from an SCSI tape drive to an SCSI hard drive using
	Sytos Plus tape backup software version 2.0 and you have SMARTDrive version 4.0
	configured for Write Behind caching, your system may hang after displaying the
	following error message:
	
	  A serious disk error has occurred on drive x: press R for retry.
	
	SMARTDrive (SMARTDRV.EXE) version 4.0 is included with Windows 3.1.
	
	To correct this problem, reconfigure SMARTDrive to perform read caching only.
	
	MORE INFORMATION
	================
	
	SMARTDrive version 4.0 is trying to write to the SCSI fixed disk when it detects
	a timer tick. At the same time, the SCSI tape drive restore program is in the
	middle of communicating with the SCSI tape drive. This confuses the restore
	program and the SCSI software because the SCSI bus gets told to do something
	else while it is in the middle of a tape access command.
	
	At this point, the system is locked up. Pressing the R key works correctly
	because the SCSI bus is busy with the TAPE command which is also hung due to the
	SMARTDrive drive access to the SCSI fixed disk.
	
	Additional query words: 3.10 3.11 ADAPTEC 1522 SCSI controller 3rdparty err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
