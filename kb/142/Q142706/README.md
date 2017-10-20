---
layout: page
title: "Q142706: Source Routing with NetBEUI Not Supported in FDDI Environment"
permalink: /kb/142/Q142706/
---

## Q142706: Source Routing with NetBEUI Not Supported in FDDI Environment

{% raw %}

	Article: Q142706
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Source routing in NetBEUI is only supported if the network interface card (NIC)
	is Token Ring. In a NetBIOS Frames (NBF) FDDI Frame, the source routing
	information bit is not set and the registry parameters associated with source
	routing (QueryWithoutSourceRouting and so forth) are ignored.
	
	
	MORE INFORMATION
	================
	
	Transparent source routing or transparent bridging should be used with the
	NetBEUI protocol and FDDI NIC in a WAN environment.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
