---
layout: page
title: "Q159153: Error Messages While Backing Up to Some Floppy Disk Drives"
permalink: kb/159/Q159153/
---

## Q159153: Error Messages While Backing Up to Some Floppy Disk Drives

	Article: Q159153
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1.0,2.0,2.1,2.5
	Operating System(s): 
	Keyword(s): kberrmsg kbhw kbpolicy osr1 osr2 win95 kbHardwarekbfixlist
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1.0, 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Microsoft Backup to back up data to certain models of floppy
	disk drives, you may receive the following error messages:
	
	  Warning: Tape needs to be erased before operation can proceed.
	
	  Microsoft Backup unable to read from the disk or network drive. Quit and
	  restart Backup, and then try again.
	
	  Warning: This operation has been canceled by the system.
	
	CAUSE
	=====
	
	Some models of floppy disk drives require specific timing and delays between
	disk operations to work properly. The timing implemented by the Windows 95
	floppy disk driver is not sufficient for some of these drives.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	There are two separate timing issues known to relate to this symptom:
	
	- Some floppy disk drives require a specific minimum delay time after a Write
	  operation, before a Step operation can occur.
	
	
	- Some floppy disk drives require a specific minimum head-settling time between
	  a Seek and subsequent Write operation.
	
	
	In each of these cases, the delay required by the drive is greater than the
	Windows 95 floppy disk driver implements.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbhw kbpolicy osr1 osr2 win95 kbHardware kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : :1.0,2.0,2.1,2.5
	Issue type        : kbprb
	
	=============================================================================
	
