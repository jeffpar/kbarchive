---
layout: page
title: "Q244244: XADM: Can't Install Service Packs on Exchange 5.5 SE in Cluster"
permalink: /kb/244/Q244244/
---

## Q244244: XADM: Can't Install Service Packs on Exchange 5.5 SE in Cluster

{% raw %}

	Article: Q244244
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbenv exc55
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have installed Microsoft Exchange Server 5.5 Standard Edition on one of
	the nodes participating in a Microsoft Cluster Server configuration, you cannot
	install any service pack (SP) because the SP tries to install itself to the
	cluster and not to the standard version of Exchange Server.
	
	This affects all servers with Exchange Server that are not using the cluster
	option but which are running on a cluster server.
	
	CAUSE
	=====
	
	This problem occurs if you install Exchange Server 5.5 Standard Edition on a
	computer that you then upgrade to form a cluster by upgrading the operating
	system to Windows NT 4.0 Enterprise Edition and Microsoft Cluster Server.
	
	RESOLUTION
	==========
	
	This behavior is by design. If you want to run Exchange Server 5.5 on a cluster
	node, you need to install the Enterprise Edition of Exchange Server 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
