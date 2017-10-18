---
layout: page
title: "Q167629: Predictable Query IDs Pose Security Risks for DNS Servers"
permalink: kb/167/Q167629/
---

## Q167629: Predictable Query IDs Pose Security Risks for DNS Servers

	Article: Q167629
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An attacker can send a query to a DNS server asking for the IP address (for
	example, of www.microsoft.com.) The DNS server sends a recursive query on behalf
	of the client at which point the attacker floods the DNS server with responses
	indicating the IP address (for example, for www.microsoft.com it may return
	127.0.0.1,) or any other incorrect response as desired by the attacker. The DNS
	server caches this result and subsequent queries for this site return the
	incorrect IP address. The cached entry can be set to live for an arbitrarily
	long time in the cache and is not purged until the DNS server is reset.
	
	CAUSE
	=====
	
	The Domain Name System (DNS) is used to resolve names with IP addresses and a
	DNS query can be sent to any DNS server. If the server does not have the
	authoritative answer to the query, it can ask other DNS servers in the DNS tree
	for the answer. This is called a recursive query. The result of a recursive
	query is cached by the originating DNS server to improve performance. A DNS
	server may have many outstanding recursive queries at any one moment in time and
	each outstanding query is identified by a query ID.
	
	Microsoft Windows NT (and many other) DNS servers use a predictable sequence of
	query IDs when resolving recursive queries. If an attacker can determine the
	current sequence number, they can determine future sequence numbers. Knowledge
	of future sequence numbers helps an attacker flood a DNS server with spoofed
	responses to recursive queries. This makes a "cache pollution" attack easier to
	accomplish.
	
	RESOLUTION
	==========
	
	The Microsoft DNS Server has been modified to use random query IDs. Random query
	IDs reduce the effectiveness of this cache pollution attack.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	For your convenience, the English version of this post-SP3 hotfix has been posted
	to the following Internet location. However, Microsoft recommends that you
	install Windows NT 4.0 Service Pack 4 to correct this problem.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP3/dns-fix
	
	STATUS
	======
	
	Microsoft has confirmed this problem could result in some degree of security
	vulnerability in Windows NT version 4.0. This problem was first corrected in
	Windows NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server
	Edition Service Pack 4.
	
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
