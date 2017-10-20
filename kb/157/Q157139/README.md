---
layout: page
title: "Q157139: Err Msg: The DHCP Client Was Unable to Obtain an IP Network..."
permalink: /kb/157/Q157139/
---

## Q157139: Err Msg: The DHCP Client Was Unable to Obtain an IP Network...

{% raw %}

	Article: Q157139
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2
	Operating System(s): 
	Keyword(s): kbnetwork kbpolicy win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to pass IP broadcasts, such as DHCP, over a Token Ring
	transparent bridge, you may receive the following error message:
	
	  The DHCP client was unable to obtain an IP network address from a DHCP
	  server.
	
	Or, you may be unable to resolve names of computers on the other side of the
	bridge.
	
	CAUSE
	=====
	
	Windows 95-based computers set the Source Routing (SR) bit in all IP broadcast
	traffic by default. Transparent bridges may discard frames with Source Routing
	information when passing them to different media types (such as Ethernet).
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbpolicy win95 kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2
	Version           : :2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
