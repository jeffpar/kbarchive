---
layout: page
title: "Q101228: Backup: /MISSINGTAPE Command Line Switch"
permalink: kb/101/Q101228/
---

## Q101228: Backup: /MISSINGTAPE Command Line Switch

	Article: Q101228
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	Because backups can span multiple tapes, it is necessary to have all
	the tapes in a sequence available when cataloging and restoring
	information. If a tape is unavailable, you must start Windows NT Backup
	with the /MISSINGTAPE switch. This allows the Backup application to
	deal strictly with the data on the current tape. One side effect of
	this switch is that Backup will take much longer to catalog.
	
	Additional query words: prodnt 3.5x ntbackup NTBACKUP.EXE
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
