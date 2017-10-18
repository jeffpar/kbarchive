---
layout: page
title: "Q168585: Stop C000021A After Re-Applying Windows NT v4.0 SP1"
permalink: kb/168/Q168585/
---

## Q168585: Stop C000021A After Re-Applying Windows NT v4.0 SP1

	Article: Q168585
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you re-apply the Windows NT 4.0 Service Pack 1 to a Windows NT 4.0 system
	that previously had Windows NT Service Pack 2 installed, you may receive the
	following blue screen error message on startup:
	
	  Stop: C000021A {Fatal system Error}
	  The Session Manager Initialization System Process Terminated
	  Unexpectedly with a status of 0xc0000003 (0x00000000, 0x00000000)
	  The system has been shutdown.
	
	CAUSE
	=====
	
	The system has a mixture of Windows NT 4.0 Service Pack 1 and 2 files installed.
	This error should only occur on systems that had Service Pack 2 removed by using
	an Emergency Repair Diskette. A bug in the Windows NT emergency repair process
	prevents the Service Pack 2 files from being replaced during Emergency Repair.
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q168015 Files Not Replaced When Running Emergency Repair
	
	RESOLUTION
	==========
	
	Follow the steps in Knowledge Base article Q168015 to perform an emergency
	repair. Choose the option to verify Windows NT system files, and replace all
	files that are different. This will put the system back to no service pack
	condition and allow Service Pack 1 to be reinstalled.
	
	Additional query words: SP1 SP2 Repair Emergency
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
