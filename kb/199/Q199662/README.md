---
layout: page
title: "Q199662: XADM: Service Pack Update Fails on Exchange Standard Edition"
permalink: /kb/199/Q199662/
---

## Q199662: XADM: Service Pack Update Fails on Exchange Standard Edition

{% raw %}

	Article: Q199662
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Microsoft Exchange Server 5.5 Standard Edition on one of the
	nodes participating in a Microsoft Cluster Server Configuration, you will not be
	able to install any Exchange Server 5.5 service pack.
	
	This affects all servers with Microsoft Exchange Server not using the Cluster
	option but running on one cluster node in the cluster.
	
	CAUSE
	=====
	
	This problem occurs if you install Microsoft Exchange Server 5.5 Standard
	Edition on a computer that you later upgrade to form a cluster by upgrading the
	operating system to Windows NT 4.0 Enterprise Edition and Microsoft Cluster
	Server.
	
	The update executable file for Exchange Server 5.5 service packs is
	cluster-aware, so the update program will see that Exchange Server is not
	properly installed in the cluster environment and will fail.
	
	WORKAROUND
	==========
	
	This is by design. If you want to run Microsoft Exchange Server 5.5 on a
	cluster, you must install the Enterprise Edition of Microsoft Exchange Server
	5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
