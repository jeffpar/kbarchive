---
layout: page
title: "Q248629: No WINS Reverse Lookup Using RFC2317 Classless In-Addr.arpa"
permalink: kb/248/Q248629/
---

## Q248629: No WINS Reverse Lookup Using RFC2317 Classless In-Addr.arpa

	Article: Q248629
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use RFC2317 classless in-addr.arpa delegation, WINS reverse lookup does
	not work for the delegated zone if the delegated zone resides on a different DNS
	server.
	
	CAUSE
	=====
	
	This issue can occur if you configure your DNS servers as described in the
	following Microsoft Knowledge Base article:
	
	  Q174419 How to Configure a Subnetted Reverse Lookup Zone on Windows NT
	
	MORE INFORMATION
	================
	
	Classless in-addr.arpa delegation is a scheme to configure reverse IP address
	lookup.
	
	Normally, a reverse IP address lookup for the address 192.168.10.42 results in a
	DNS query for 42.10.168.192.in-addr.arpa. With classless in-addr.arpa delegation
	using a subnet mask of 255.255.255.192, this query may be substituted by a query
	for 42.0-26.10.168.192.in-addr.arpa.
	
	When you configure WINS reverse lookup for the delegated subzone, the DNS server
	needs to determine the IP address from the query. With a query like
	42.0-26.10.168.192.in-addr.arpa., the server is unable to determine the
	corresponding IP address.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbWinAdvServSearch kbWinDataServSearch
	Version           : WINDOWS:2000; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
