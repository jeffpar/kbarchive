---
layout: page
title: "Q249874: &quot;NBTSTAT -A&quot; Command Does Not Resolve Computer Name with DNS"
permalink: /kb/249/Q249874/
---

## Q249874: &quot;NBTSTAT -A&quot; Command Does Not Resolve Computer Name with DNS

	Article: Q249874
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the "nbtstat -a" command with a remote computer and the name of the
	computer is resolved by Domain Name System (DNS), you receive a "Host not found"
	error message.
	
	WORKAROUND
	==========
	
	To work around this problem, ping the name of the computer, and then use the IP
	address that is returned with the "nbtstat -a" command.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
