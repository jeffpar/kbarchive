---
layout: page
title: "Q139695: SilentRip Registry Entry within MPR for Windows NT 3.51"
permalink: /kb/139/Q139695/
---

## Q139695: SilentRip Registry Entry within MPR for Windows NT 3.51

{% raw %}

	Article: Q139695
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SilentRip registry entry used with RIP for Internet Protocol, can be a
	useful tool in environments with multiple routers.
	
	MORE INFORMATION
	================
	
	The following registry key is added when you install Rip for Internet Protocol
	on a Windows NT Server version 3.51:
	
	  HKEY_LOCAL_MACHINE
	  \System\CurrentControlSet\Services\IpRip\Parameters
	  SilentRip REG_DWORD
	  Valid entries: 0, 1
	
	When you install RIP for Internet Protocol on a single-homed server running
	Windows NT Server 3.51, SilentRip is set to 1. This allows the Server to accept,
	but not send, RIP Broadcasts to other RIP compliant routers. This is useful in
	that the server always maintains the quickest route to a location in a WAN
	environment, and is able to use different routes in case a router fails.
	
	When you install RIP for Internet Protocol on a multihomed Windows NT server,
	SilentRip is set to 0. This allows the Windows NT server to listen for and send
	RIP packets on the network.
	
	Additional query words: 3.50 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	

{% endraw %}
