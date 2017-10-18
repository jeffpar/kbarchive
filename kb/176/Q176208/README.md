---
layout: page
title: "Q176208: Some Routers May Cause &quot;Duplicate IP Address&quot; Error Message"
permalink: kb/176/Q176208/
---

## Q176208: Some Routers May Cause &quot;Duplicate IP Address&quot; Error Message

	Article: Q176208
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WinNT:3.5,3.51,4.0;Windows:95
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbnetwork win95
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your computer or reconfigure the Internet Protocol (IP) address
	used by your network adapter, one of the following error messages may be
	displayed:
	
	- The system has detected an IP address conflict with another system on the
	  network. The local interface has been disabled. More details are available in
	  the system event log. Consult your network administrator to resolve the
	  conflict.
	
	- The system has detected a conflict for IP address <n.n.n.n> with the
	  system having hardware address 11:11:11:11:11:11. The interface has been
	  disabled.
	
	NOTE: One of these error messages may be displayed regardless of the IP address
	that you attempt to use.
	
	CAUSE
	=====
	
	This behavior can occur if you have an Ascend Pipeline router on your network,
	and the router's Proxy Mode setting is configured to Always.
	
	
	RESOLUTION
	==========
	
	You can resolve this issue by changing the Proxy Mode setting on your router to
	the Off setting. For information about how to make this change, refer to the
	documentation included with your router or contact Ascend Communications
	Technical Support.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors Independent
	of Microsoft; we make no warranty; implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbnetwork win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : WinNT:3.5,3.51,4.0;Windows:95
	Issue type        : kbprb
	
	=============================================================================
	
