---
layout: page
title: "Q159109: ExitWindowsEx Does Not Work With NEC Power Switch Service"
permalink: kb/159/Q159109/
---

## Q159109: ExitWindowsEx Does Not Work With NEC Power Switch Service

	Article: Q159109
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	NEC has a power switch service that calls ExitWindowsEx to shut down and power
	off computers. This service worked both before and after logging on to Windows
	NT 3.51, but fails before logging on to Windows NT 4.0
	
	                                       NT4.0    NT 3.51
	After Logon:                            WORKS    WORKS
	After Logon when workstation is locked: FAILS    WORKS
	Before Logon:                           FAILS    WORKS
	
	
	Steps to Reproduce This Problem
	-------------------------------
	
	1. Log on to the system.
	
	2. Press CTRL+ALT+DEL.
	
	3. Click Lock Workstation.
	
	4. Press CTRL+ALT+DEL (to get the lock dialog box).
	
	5. Press the power switch.
	
	  This causes a power switch interrupt. The NEC power switch driver catches the
	  interrupt and calls the power switch service. NEC power switch service calls
	  ExitWindowsEx.
	
	6. The machine does not shut down. The system is generally unusable.
	
	CAUSE
	=====
	
	The lock workstation routine does not process the
	WLX_SAS,WLX_SAS_TYPE_USER_LOGOFF message.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt security
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
