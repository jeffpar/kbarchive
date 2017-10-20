---
layout: page
title: "Q153161: WinNT Systems Running RAS May Exhaust Available DHCP Leases"
permalink: /kb/153/Q153161/
---

## Q153161: WinNT Systems Running RAS May Exhaust Available DHCP Leases

{% raw %}

	Article: Q153161
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A RAS service configured to use dynamic host configuration protocol (DHCP) to
	allocate IP addresses for dial-up clients may acquire more IP address leases
	than needed, thereby depleting available addresses.
	
	The leased addresses are indicated by a telephone icon in the Active Leases
	window of DHCP Manager.
	
	This problem can occur when portable computer users on the network who have
	installed RAS and configured it for dialing out and receiving calls start their
	systems on and off the network.
	
	CAUSE
	=====
	
	During initialization, the RAS service acquires new leases because it fails to
	read information regarding previously acquired leases. The previously leased
	addresses, now orphaned, will only be returned to the pool of available
	addresses when their leases expire.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	
	Additional query words: leak remote access
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
