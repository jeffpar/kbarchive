---
layout: page
title: "Q169255: Spooler Fails to Notify When Disk is Full"
permalink: kb/169/Q169255/
---

## Q169255: Spooler Fails to Notify When Disk is Full

	Article: Q169255
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Prior to Windows NT version 4.0, if the disk partition where the print files
	were spooled ran out of space, the spooler would generate a pop-up message with
	the following dialog:
	
	  The partition is out of disk space.
	
	With Windows NT 4.0, a warning is not generated and the document does not print.
	Additionally, no entry is written to the event log.
	
	MORE INFORMATION
	================
	
	Because of changes in the design of the Windows NT 4.0 printing subsystem, the
	spooler does not attempt to detect when the disk that stores the temporary spool
	files runs out of space.
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb kbinfo
	
	=============================================================================
	
