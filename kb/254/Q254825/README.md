---
layout: page
title: "Q254825: MSCS: Creating Multiple Virtual Servers with Same NetBIOS Name"
permalink: /kb/254/Q254825/
---

## Q254825: MSCS: Creating Multiple Virtual Servers with Same NetBIOS Name

{% raw %}

	Article: Q254825
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,1.1,4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server, version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Cluster Server allows you to create multiple network name resources
	with the same NetBIOS name and bring those resources online. When you do this,
	you do not typically see error messages from Cluster Server or in the local
	node's System event log. However, from the clients' perspective, the cluster
	virtual servers may be unavailable or appear to go online and offline
	sporadically. This behavior is to be expected if this situation exists.
	
	CAUSE
	=====
	
	All Cluster Server resources must be unique in the way they are presented to the
	rest of the network. Creating two virtual servers with the same NetBIOS name is
	no different from creating two stand-alone servers with the same NetBIOS name.
	The industry standards for NetBIOS name resolution prohibit multiple computers
	on the same network from having the same NetBIOS name. For additional
	information about TCP/IP over NetBIOS, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q128233 Comparison of Windows NT Network Protocols
	
	RESOLUTION
	==========
	
	This is not a supported configuration on Cluster Server. All resources must be
	unique in how they are presented on the network (that is, how the clients see
	them). Unpredictable behavior results from multiple resources with the same
	name.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch kbWinNTSEnt400SP6a kbClustServ110
	Version           : winnt:1.0,1.1,4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
