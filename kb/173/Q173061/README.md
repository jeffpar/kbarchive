---
layout: page
title: "Q173061: Delay Opening Explorer, Control Panel, &amp; Other RPC-Aware Apps"
permalink: /kb/173/Q173061/
---

## Q173061: Delay Opening Explorer, Control Panel, &amp; Other RPC-Aware Apps

	Article: Q173061
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
	
	There may be significant delays (typically about three minutes) when you launch
	Windows NT Explorer, Control Panel, and other RPC-aware applications, including
	a delay displaying the desktop, when you first start Windows NT.
	
	This may occur just after upgrading from Windows NT 3.51 to 4.0 or after applying
	Windows NT 4.0 Service Pack 2 or later.
	
	CAUSE
	=====
	
	The Remote Procedure Call (RPC) service startup type is set to Manual or
	Disabled. You may also notice that the RPC Locator startup type is set to
	Automatic.
	
	
	
	RESOLUTION
	==========
	
	Use the Services tool in Control Panel to set the startup type of the RPC
	Service to Automatic, and, optionally, set the startup type of the RPC Locator
	to Manual, which are the default settings for these services. NOTE: You should
	not change the RPC Locator startup type to Disabled if you are using distributed
	computing (DCE)-aware programs. If you are unsure about the appropriate settings
	for this service relative to your environment, check with your network
	administrator.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: opening open launch hang hung freeze frozen wait pause halt crash delayed delay
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
