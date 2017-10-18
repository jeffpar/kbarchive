---
layout: page
title: "Q122444: Server Manager Reports Inconsistent Computer Type"
permalink: kb/122/Q122444/
---

## Q122444: Server Manager Reports Inconsistent Computer Type

	Article: Q122444
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select the Show Domain Members Only option on the View menu of Server
	Manager, Windows NT version 3.5 member servers appear as Workstations. If you
	clear the selection for this option, the member servers appear as Servers.
	
	CAUSE
	=====
	
	The trust accounts for a workstation and for a member server are exactly the
	same. Browser enumeration, which is disabled when you select the Show Domain
	Members Only option, is needed to distinguish between a member server and a
	workstation.
	
	
	Additional query words: prodnt srvmgr
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
