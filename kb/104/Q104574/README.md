---
layout: page
title: "Q104574: Print Manager Starts Minimized Without Run Minimized Selected"
permalink: /kb/104/Q104574/
---

## Q104574: Print Manager Starts Minimized Without Run Minimized Selected

	Article: Q104574
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT Print Manager may start minimized even if its Icon Properties
	does not have the Run Minimized option selected.
	
	CAUSE
	=====
	
	Print Manager, by default, has the Save Settings On Exit option enabled. If you
	close Print Manager when it is minimized and this option is enabled, the
	minimized position will be saved. This behavior is different from other Windows
	NT applications, such as the User Manager.
	
	RESOLUTION
	==========
	
	To prevent Print Manager from starting minimized, exit Print Manager while the
	Save Settings On Exit option is enabled and Print Manager is arranged in the
	desired position (not minimized). Once the desired position is saved, disable
	the Save Settings On Exit option.
	
	NOTE: If you make any changes to a Printer window in Print Manager, its position
	will not be saved unless the option is enabled.
	
	Additional query words: prodnt hidden
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	
