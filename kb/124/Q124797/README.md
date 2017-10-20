---
layout: page
title: "Q124797: ARP Static Cache Entries Switch to Dynamic"
permalink: /kb/124/Q124797/
---

## Q124797: ARP Static Cache Entries Switch to Dynamic

{% raw %}

	Article: Q124797
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.5; :3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a static ARP (address resolution protocol) cache entry is added (for example,
	ARP -s inet_addr eth_addr) it occasionally switches to dynamic. Unfortunately,
	dynamic entries are deleted after two minutes of dormancy.
	
	CAUSE
	=====
	
	Whenever ARP receives an ARP request for itself, it updates its ARP cache with
	the information of the requestor. It does this without respect to the type of an
	existing entry.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: wfw wfwg prodtcp32 3.11 tcpip
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbTCPIPSearch kbZNotKeyword3 kbTCPIP311
	Version           : winnt:3.5; :3.11
	
	=============================================================================
	

{% endraw %}
