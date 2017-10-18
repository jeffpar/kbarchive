---
layout: page
title: "Q176206: Cannot Log On to Local Subnet with Windows 95 Client"
permalink: kb/176/Q176206/
---

## Q176206: Cannot Log On to Local Subnet with Windows 95 Client

	Article: Q176206
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WinNT:3.5,3.51,4.0;Windows:95
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your client and domain controller are on the same subnet and when you try to log
	on you receive the following error:
	
	  The domain password you supplied is not correct, or access to your logon
	  server has been denied.
	
	CAUSE
	=====
	
	This problem may be caused by a faulty subnet mask.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	1. On the client computer, open Control Panel.
	
	2. Double-click Network, and then click the Protocol tab.
	
	3. Double click TCP/IP protocol. Check the subnet mask for proper configuration.
	  If incorrect, fix it and close Network.
	
	4. Restart your computer and you should be able to log on.
	
	Additional query words: win95 login
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : WinNT:3.5,3.51,4.0;Windows:95
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
