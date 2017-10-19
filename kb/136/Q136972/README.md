---
layout: page
title: "Q136972: Cannot Access NEC CDR-82 CD-ROM Drive"
permalink: /kb/136/Q136972/
---

## Q136972: Cannot Access NEC CDR-82 CD-ROM Drive

	Article: Q136972
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using real-mode drivers for a NEC CDR-82 CD-ROM drive, you may
	receive the following error message when you try to access the CD-ROM drive from
	an MS-DOS prompt within Windows 95 if the real-mode drivers are not loaded into
	upper memory:
	
	  CDR103: CDROM not High Sierra or ISO-9660 format reading from drive
	  <x>:
	
	If you try to access the CD-ROM drive from Windows Explorer or My Computer, the
	drive appears, but you cannot see any files on the drive.
	
	Note that this problem does not occur if you boot your computer to a command
	prompt and then access the drive.
	
	
	RESOLUTION
	==========
	
	To work around this problem, modify the appropriate lines in the Config.sys and
	Autoexec.bat files so that the real-mode CD-ROM driver and Mscdex.exe are loaded
	into upper memory. For information about how to do so, consult the CD-ROM
	drive's documentation, or contact the manufacturer.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
