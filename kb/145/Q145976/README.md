---
layout: page
title: "Q145976: XCON: GWART Is Incorrect Due to Latency in Directory Replication"
permalink: /kb/145/Q145976/
---

## Q145976: XCON: GWART Is Incorrect Due to Latency in Directory Replication

{% raw %}

	Article: Q145976
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	It is possible that during directory replication the Gateway Address Routing
	Table (GWART) will be created incorrectly, reflecting incorrect routes. Once
	directory replication has completed, the GWARTs will be correct. If the
	Microsoft Exchange Server system is large and there is a high likelihood of
	latency in the directory replication updates, there it is likely that the GWART
	will be incorrect for a number of days. While the GWART is incorrect, it will be
	possible for messages to be routed incorrectly, leading eventually to NDRs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
