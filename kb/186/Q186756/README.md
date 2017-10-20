---
layout: page
title: "Q186756: XCON: MTA Associations Fail On MSCS Installation"
permalink: /kb/186/Q186756/
---

## Q186756: XCON: MTA Associations Fail On MSCS Installation

{% raw %}

	Article: Q186756
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Microsoft Exchange Server as a messaging bridgehead on a Microsoft
	Cluster Server (MSCS) installation, the MTA may fail to read the virtual IP
	address correctly. This causes the incorrect IP address to be utilized for
	attempted connections, and MTA associations fail.
	
	CAUSE
	=====
	
	In this scenario, the clustered configuration consists of two nodes that share
	one or more common physical disk drives, an IP address, a network name, and the
	Microsoft Exchange Server cluster resource. All network requests to the
	clustered Microsoft Exchange Server computer are directed at the virtual server
	defined by the cluster, not at an individual node. It is the active node that
	receives and processes these requests on behalf of the cluster. The MTA fails to
	properly initialize a variable for the cluster API, which prevents correct usage
	of the virtual IP address assigned to the clustered resources.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: cluster connections socket
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
