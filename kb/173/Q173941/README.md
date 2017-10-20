---
layout: page
title: "Q173941: Windows NT DNR Does Not Cache Short Names"
permalink: /kb/173/Q173941/
---

## Q173941: Windows NT DNR Does Not Cache Short Names

{% raw %}

	Article: Q173941
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Windows NT sockets application attempts to resolve a name using
	Gethostbyname(), your client computer may experience several time-outs if the
	Domain Name Service (DNS) server is unavailable. These time-outs may last
	several minutes as your client fails DNS resolution and then tries to use
	Windows Internet Name Service (WINS) or broadcast methods to successfully
	resolve the name.
	
	NOTE: These time-outs occur repeatedly during the operation of Microsoft Exchange
	Server, because the client continues to attempt name resolution during various
	operations.
	
	CAUSE
	=====
	
	Windows NT clients are not properly caching "short names" that have been
	resolved successfully by the DNS Server.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the methods below:
	
	- To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	  Windows NT Server 4.0, Terminal Server Edition. For additional information,
	  please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	  -or-
	
	- Edit the ServiceProvider priority so that WINS is used first. NetBIOS over
	  TCP/IP (NetBT) fails quickly if WINS servers are unavailable.
	
	  For additional information, please see the following articles in the Microsoft
	  Knowledge Base:
	
	  ARTICLE-ID: Q171567
	  TITLE : Windows NT 4.0 ServiceProvider Priority Values Not Applied
	
	  ARTICLE-ID: Q139270
	  TITLE : How to Change Name Resolution Order on Windows 95 and Windows NT
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	Your Windows NT Domain Name Resolver (DNR) should be caching the DNS name for
	the time-to-live (TTL) provided by the DNS server. This caching assists with the
	time-outs by allowing the client to use cached names that have been resolved
	successfully. Repeated queries and the resulting time-outs will not occur until
	the name's TTL assigned by the DNS server has expired.
	
	If a Windows NT sockets application attempts to resolve a name, the caching is
	only done for fully qualified domain names (FQDNs). "Short names," or names such
	as Host instead of host.domain.com, are not cached.
	
	Winsock, the files that provide Windows Sockets to applications, has been
	modified so that short names are cached. This is done on a per-process basis.
	For example, when a Microsoft Exchange client is initialized and name resolution
	is performed through Winsock to the DNS server, two queries are observed. One
	query is performed in the Exchange process; the other query is performed on
	behalf of the MAPI spooler process. Subsequent Gethostbyname() requests made by
	a process are serviced from the cache. The entry will remain in cache for the
	TTL provided in the name query response.
	
	Additional query words: dns cache DNR
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
