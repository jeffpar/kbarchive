---
layout: page
title: "Q159045: Error Message: Tape Drive Error Detected"
permalink: /kb/159/Q159045/
---

## Q159045: Error Message: Tape Drive Error Detected

	Article: Q159045
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbsetup kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT and start Windows NT Backup, you may receive the
	following error message:
	
	  Tape Drive Error Detected
	  A SCSI tape device has been detected, but the tape driver has either not been
	  installed, or failed to start. Make sure that the appropriate driver has been
	  installed using the Tape Devices option in Control Panel.
	
	CAUSE
	=====
	
	Windows NT 4.0 cannot install SCSI tape drivers during Setup.
	
	RESOLUTION
	==========
	
	To install the tape driver, follow these steps:
	
	1. In Control Panel, double-click Tape Devices.
	
	2. Click OK in the New SCSI Tape Device Found dialog box.
	
	3. Click OK to close the Tape Devices dialog box.
	
	4. Restart Backup.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
