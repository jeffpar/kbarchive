---
layout: page
title: "Q173312: DEC Pathworks 32 7.0 May Cause Windows NT 4.0 to Hang"
permalink: /kb/173/Q173312/
---

## Q173312: DEC Pathworks 32 7.0 May Cause Windows NT 4.0 to Hang

	Article: Q173312
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Computers running either Windows NT 4.0 Server or Windows NT 4.0 Workstation may
	randomly stop responding if the DEC Pathworks 32 version 7.0 protocol is also
	running.
	
	RESOLUTION
	==========
	
	To determine if Pathworks 32 version 7.0 is causing the system to stop
	responding, remove the Pathworks 32 protocol from the system, and then monitor
	the system for an appropriate amount of time to see if the system continues to
	stop responding.
	
	If the system does not stop after the Pathworks 32 protocol has been removed,
	contact DEC and obtain Pathworks 32 Version 7.0a. Several fixes to DECnet have
	been incorporated in Pathworks 32 version 7.0a.
	
	
	Additional query words: DEClat Pathworks32
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
