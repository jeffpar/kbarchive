---
layout: page
title: "Q169683: XFOR: New IMS Routing Functionality in Exchange Server 5.0 SP2"
permalink: kb/169/Q169683/
---

## Q169683: XFOR: New IMS Routing Functionality in Exchange Server 5.0 SP2

	Article: Q169683
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 21-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Microsoft Exchange Server version 5.0, the Internet Mail Service has the
	added ability to reroute Internet mail. To configure this feature, you have to
	specify any domain(s) that will be handled by Exchange Server. When you specify
	a domain in the Routing tab of the Internet Mail Service, a subdomain match is
	implied.
	
	In Exchange Server 5.0 Service Pack 2 (SP2), you now have the ability to specify
	an exact domain match in the routing list.
	
	MORE INFORMATION
	================
	
	In Exchange Server 5.0 and Exchange Server 5.0 Service Pack 1 (SP1), if you
	specify
	
	  ms.com     host1.ms.com
	
	in the routing list, then this implies that you also want other subdomains (for
	example, sales.ms.com) to be rerouted to host1.ms.com.
	
	The rerouting capabilities have been modified in Exchange Server 5.0 SP2 to allow
	you to specify an exact domain match instead of always doing subdomain matches.
	
	To do this you must add a pound sign (#) in front of any domains you want exact
	matches for. A domain with a pound sign prefix indicates that domain must
	exactly match the destination domain (the domain in user@domain) to trigger the
	associated routing action.
	
	For example, take the following list:
	
	  Sent To     Route To
	  =======     ========
	  ms.com      host1.ms.com
	  #ms.com     <inbound>
	  x.ms.com    <inbound>
	
	Mail should be routed as follows:
	
	  User@ms.com ===> routed inbound
	  User@sales.ms.com ===> routed to host1.ms.com
	  User@x.ms.com ===> routed inbound
	  User@pms.com ===> routed to pms.com
	  User@abc.x.ms.com ===> routed inbound
	
	The matches are done in the following order:
	
	1. Check for a match in the exact match list.
	
	2. Check for best match among the non-exact match list.
	
	3. If no match, reroute to the destination domain.
	
	This feature is included in the latest U.S. Service Pack for Microsoft Exchange
	Server version 5.0. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
