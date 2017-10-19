---
layout: page
title: "Q123717: Windows NT Backup Writes Incorrect Times To Log"
permalink: /kb/123/Q123717/
---

## Q123717: Windows NT Backup Writes Incorrect Times To Log

	Article: Q123717
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5 
	- Microsoft Windows NT Workstation versions 3.1, 3.5 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT Backup writes incorrect times (one hour late) to its log when the
	time zone is not with the United States.
	
	CAUSE
	=====
	
	GetCurrentDate() in \PRIVATE\UTILS\NTBACKUP\SRC\DATETIME.C uses the C- Runtime
	call localtime() to get the current time (instead of the Win32 API
	GetLocalTime()). Localtime() calls tzset() to determine the time zone and
	daylight saving settings. Tzset doesn't take the real daylight saving
	information from GetTimeZoneInformation into account.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem was corrected in the latest U.S.
	Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	S E R V P A C K
	
	Additional query words: prodnt 3.50 USA us
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5
	
	=============================================================================
	
