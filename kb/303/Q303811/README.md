---
layout: page
title: "Q303811: DNS Server Routes Queries to Root Name Servers and Forwarders"
permalink: kb/303/Q303811/
---

## Q303811: DNS Server Routes Queries to Root Name Servers and Forwarders

	Article: Q303811
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 27-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a primary Intranet DNS server is configured to forward queries, it cannot
	resolve to the Internet service provider's (ISP) DNS server. A network capture
	may show the DNS server routing queries that it cannot resolve directly to the
	Internet instead of routing them only to the Forwarder.
	
	CAUSE
	=====
	
	In a standard DNS forwarder configuration, queries to the primary DNS server are
	handled in the following way:
	
	- When the primary Intranet DNS server receives a query that it cannot resolve,
	  it routes the query to the Forwarder.
	
	- If the primary DNS server does not receive a response in a timely fashion
	  from the Forwarder, it then attempts to route the query to the Internet Root
	  Domain Name servers.
	
	The difference between the queries is that the queries to the Forwarder are
	recursive and the primary DNS server queries are not.
	
	WORKAROUND
	==========
	
	To prevent Root Hint Servers from being queried, either configure the primary
	DNS server to be a slave forwarder (disable recursion) or delete the Root Name
	server entries.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For additional information, please reference RFC's 2136 and 2870.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000Search kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	
