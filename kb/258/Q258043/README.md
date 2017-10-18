---
layout: page
title: "Q258043: PRB: WAV Sound Breaks As System Comes Out of Suspend Mode"
permalink: kb/258/Q258043/
---

## Q258043: PRB: WAV Sound Breaks As System Comes Out of Suspend Mode

	Article: Q258043
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:1.0; Win2000:95,98,98 Second Edition; winnt:4.0
	Operating System(s): 
	Keyword(s): kbOSWinNT400 kbOSWin2000 kbOSWin95 kbOSWin98 kbDSupport
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play a WAV sound just when the system begins to come out of Suspend
	mode, the sound may stutter or break up.
	
	CAUSE
	=====
	
	The system has not fully come out of Suspend mode. Many operations are occurring
	simultaneously and the sound system is not fully reinitialized.
	
	RESOLUTION
	==========
	
	Wait until the system comes out of Suspend mode completely before you attempt to
	listen to WAV sounds.
	
	Additional query words: kbsbk kbopk WAV suspend
	
	======================================================================
	Keywords          : kbOSWinNT400 kbOSWin2000 kbOSWin95 kbOSWin98 kbDSupport 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWin95search kbWin98search kbWin98SEsearch kbWinAdvServSearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:1.0; Win2000:95,98,98 Second Edition; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
