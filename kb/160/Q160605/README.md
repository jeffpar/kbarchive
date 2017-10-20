---
layout: page
title: "Q160605: WinNT Err: OS/2 !! SYS01475 After Restart"
permalink: /kb/160/Q160605/
---

## Q160605: WinNT Err: OS/2 !! SYS01475 After Restart

{% raw %}

	Article: Q160605
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbhw kbsetup kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a computer running Windows NT is not shut down gracefully, it may stop
	responding when restarted after a power outage has occurred. When the power
	returns and the computer is restarted (after the BIOS info is displayed and
	before ntdetect begins to run), the following text appears at the bottom of the
	screen:
	
	  OS/2 !! SYS01475
	  OS/2 !! SYS02027
	
	At this point, the computer will stop responding.
	
	CAUSE
	=====
	
	The boot sector is corrupted or damaged.
	
	RESOLUTION
	==========
	
	To fix this problem, start the repair process and select to repair the boot
	sector only.
	
	Additional query words: reboot hung frozen
	======================================================================
	Keywords          : kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WinNT:3.1,3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
