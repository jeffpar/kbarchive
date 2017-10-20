---
layout: page
title: "Q229493: XCON: How to Move X.400 Connectors Between Bridgeheads"
permalink: /kb/229/Q229493/
---

## Q229493: XCON: How to Move X.400 Connectors Between Bridgeheads

{% raw %}

	Article: Q229493
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the procedure to be followed in a situation where the
	X.400 Connectors must be moved from one bridgehead server to another bridgehead
	server within the same site. This may be necessary because of load balancing or
	in case the first bridgehead crashes or needs to be removed form the site.
	
	MORE INFORMATION
	================
	
	To move X.400 Connectors from one bridgehead server to another within a site:
	
	1. Find out which X.400 Connectors need to be moved to another bridgehead.
	
	2. Configure these X.400 Connectors on the new bridgehead in accordance with the
	  information in the following Microsoft Knowledge Base articles:
	
	  Q169159 XCON: X.400 Connector Configuration Checklist
	
	  Q165111 XCON: Configuring X.400 Connector between Two Exchange Servers
	
	  Q199326 XCON: Configuring X.400 Connectors to Communicate Through a Firewall
	
	3. Recalculate the routing on the new bridgehead server.
	
	4. Test the moved X.400 Connectors and make sure they are fully functional.
	
	5. After you are absolutely sure that the moved X.400 Connectors are fully
	  functional, remove the X.400 Connectors on the first bridgehead.
	
	6. Recalculate routing on the first bridgehead.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
