---
layout: page
title: "Q163936: CLOCK Hangs and Consumes 90% CPU When Set to Digital Display"
permalink: kb/163/Q163936/
---

## Q163936: CLOCK Hangs and Consumes 90% CPU When Set to Digital Display

	Article: Q163936
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Clock.exe may cause the computer to stop responding (hang) and then consume 90
	percent of the CPU time when set to Digital Display under specific
	circumstances.
	
	CAUSE
	=====
	
	The array for the New Title was too small to hold the contents of the Short Date
	Format of dddd/MMMM DD/yyyy.
	
	RESOLUTION
	==========
	
	To work around this problem, use a different Short Date style that is not as
	long.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	
	Additional query words: dhcp 4.00
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
