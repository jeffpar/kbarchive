---
layout: page
title: "Q235289: DNS Server Delegations Disappear on Secondary Name Servers"
permalink: /kb/235/Q235289/
---

## Q235289: DNS Server Delegations Disappear on Secondary Name Servers

	Article: Q235289
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a Domain Name System (DNS) server hosting secondary zones for parent
	and child domains, deleting the child domain removes the delegation for the
	child domain from the the parent or <root> domain.
	
	For example, if your DNS server hosts the following secondary zones
	
	- domain.net (root domain)
	
	- child.domain.net (child domain)
	
	and you delete child.domain.net from the secondary server, the NS delegation for
	child.domain.net is deleted from the domain.net zone.
	
	CAUSE
	=====
	
	This behavior occurs because the copy of the zone is running in memory.
	
	NOTE: This is not written back to the zone file.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the following syntax at a command line:
	
	net stop dns
	
	net start dns
	
	Using this syntax stops and starts the DNS service, which reloads the parent or
	<root> zone, and the NS delegation record reappears.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
