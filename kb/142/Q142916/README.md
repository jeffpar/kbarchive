---
layout: page
title: "Q142916: XADM: MTA Generates a 2171 Error"
permalink: /kb/142/Q142916/
---

## Q142916: XADM: MTA Generates a 2171 Error

{% raw %}

	Article: Q142916
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Message Transfer Agent (MTA) will generate a 2171 Event
	ID in the Windows NT Event Log and stop making associations to other MTAs.
	
	CAUSE
	=====
	
	This problem is due to the extremely large numbers of Remote Procedure Calls
	(RPC) made when the Microsoft Exchange Sites and the Microsoft Exchange Servers
	are in a hub configuration and there are a lot of Microsoft Exchange Servers in
	a single Microsoft Exchange Site.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
