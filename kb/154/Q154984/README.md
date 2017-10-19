---
layout: page
title: "Q154984: DNS Server May Not Recursively Resolve Some Names"
permalink: /kb/154/Q154984/
---

## Q154984: DNS Server May Not Recursively Resolve Some Names

	Article: Q154984
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Your Domain Name System (DNS) server does not recursively resolve names which
	contain a large number of IP addresses. However, the DNS server does resolve
	names which contain one or a small number of IP addresses.
	
	CAUSE
	=====
	
	When a DNS response contains more data than can fit in a UPD packet (more than
	512 bytes,) it sends as much data that can fit into the UDP packet and sets the
	truncation bit, indicating that there is more data available.
	
	The Microsoft DNS server discards packets with the truncation bit set and tries
	another authoritative server. The DNS server always receives the same response
	with the truncation bit set, so it eventually stops and returns SERVFAIL to the
	client.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	The Microsoft DNS Server has been modified to accept truncated responses and
	return that response to the client.
	
	For your convenience, the English version of this post-SP3 hotfix has been posted
	to the following Internet location. However, Microsoft recommends that you
	install Windows NT 4.0 Service Pack 4 to correct this problem.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP3/dns-fix
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: 4.00 prodnt 456
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
