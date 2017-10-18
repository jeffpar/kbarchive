---
layout: page
title: "Q162868: WinNT 4.0 DNS Only Binds to a Maximum of 15 IP Addresses"
permalink: kb/162/Q162868/
---

## Q162868: WinNT 4.0 DNS Only Binds to a Maximum of 15 IP Addresses

	Article: Q162868
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT 4.0 Domain Name Service (DNS) server fails to respond to name
	queries when there are more than 15 IP addresses bound to the Microsoft DNS
	service.
	
	CAUSE
	=====
	
	The DNS server has a hard-coded limit so that it can only bind to 15 IP
	addresses.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Windows NT 4.0 Service Pack 2 and later no longer includes a hard-coded limit.
	The limit was in place originally because the DNS server opens a socket for
	every IP address it binds to, consuming resources. There is a significant memory
	expense to each one. Customers should be encouraged to use the minimum necessary
	bindings for best performance.
	
	When this occurs, you may see the following error message in the system log in
	Event Viewer:
	
	  Event 410
	
	The DNS Server is limited to listening on 15 IP addresses. This server is
	configured with more than 15 IP addresses, so the DNS server has used the first
	15 and will only respond to queries on these addresses. Use the Interfaces
	dialog under Server Properties in the DNS admin tool to edit the list of IP
	interfaces to 15 or fewer addresses on which you wish the DNS to answer queries.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
