---
layout: page
title: "Q267963: Ping Utility Takes a Long Time to Return Results with NetBIOS Na"
permalink: /kb/267/Q267963/
---

## Q267963: Ping Utility Takes a Long Time to Return Results with NetBIOS Na

{% raw %}

	Article: Q267963
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Ping utility to ping another computer by its NetBIOS name, the
	Ping utility may take a long time to return results.
	
	CAUSE
	=====
	
	This behavior can occur when no Domain Name System (DNS) server is available on
	the network. The Ping utility first queries DNS for a host name. If no DNS
	server is available, the TCP/IP protocol will try the DNS query again. Only
	after the DNS queries do not succeed will the Ping utility attempt to resolve
	the name by using the NetBIOS name resolution sequence.
	
	MORE INFORMATION
	================
	
	For more information about name resolution, refer to the following articles in
	the Microsoft Knowledge Base:
	
	  Q172218 Microsoft TCP/IP Host Name Resolution Order
	
	  Q119493 NetBIOS over TCP/IP Name Resolution and WINS
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
