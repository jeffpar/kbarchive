---
layout: page
title: "Q173809: XADM: Cluster-Aware Exchange Disables Server Monitors"
permalink: /kb/173/Q173809/
---

## Q173809: XADM: Cluster-Aware Exchange Disables Server Monitors

{% raw %}

	Article: Q173809
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are connecting to an MSCS (Microsoft Cluster Server) cluster
	installation of Exchange Server 5.5, the Actions tab of the Server Monitor
	Property page will be disabled (unavailable).
	
	CAUSE
	=====
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Due to the nature of server monitors (that is, they can restart services and
	computers), they conflict with the functionality of the MSCS. It is critical
	that this functionality be disabled.
	
	Additional query words: WolfPack
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	
	=============================================================================
	

{% endraw %}
