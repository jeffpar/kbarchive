---
layout: page
title: "Q155576: WinCim 2.01 Sounds Do Not Play After Rebooting"
permalink: /kb/155/Q155576/
---

## Q155576: WinCim 2.01 Sounds Do Not Play After Rebooting

	Article: Q155576
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install WinCIM 2.01, sound events are associated and work properly
	until the system is rebooted. The sounds no longer play after rebooting,
	although the events are registered in the Sounds tool and can be played
	manually.
	
	CAUSE
	=====
	
	WinCIM 2.01 expects to store its sound event information in the Win.ini file,
	which is correct for Windows 3.1x. Windows NT migrates this information to the
	registry at each reboot, making this information unavailable to WinCIM.
	
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt winnt
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
