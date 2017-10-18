---
layout: page
title: "Q173536: STOP Message 0x0000001E Appears with Seagate Backup Exec 6.0"
permalink: kb/173/Q173536/
---

## Q173536: STOP Message 0x0000001E Appears with Seagate Backup Exec 6.0

	Article: Q173536
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5, 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbother
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a backup operation begins, and it uses Seagate Backup Exec version 6.0, the
	following blue screen STOP error may appear:
	
	  STOP: 0x0000001E (0xC0000005, 0x00550051, 0x00000000, 0x00000000).
	
	CAUSE
	=====
	
	The error occurs if Intel LanDesk version 2.52 is installed on the system along
	with the Seagate Backup Exec version 6.0 software.
	
	RESOLUTION
	==========
	
	To resolve this problem, remove Intel LanDesk.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: BackupExec Lan Desk
	======================================================================
	Keywords          : kb3rdparty kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5, 3.51
	Issue type        : kbprb
	
	=============================================================================
	
