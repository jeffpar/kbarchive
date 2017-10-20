---
layout: page
title: "Q254188: XADM: How to Move the Directory Replication Connector"
permalink: /kb/254/Q254188/
---

## Q254188: XADM: How to Move the Directory Replication Connector

{% raw %}

	Article: Q254188
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may need to move a directory replication connector to a different Exchange
	Bridgehead server in a site. This article outlines this process.
	
	NOTE: A full refresh of all replicated contexts is automatically triggered (both
	ways). You may prefer a full refresh to removal of the directory replication
	connector in some cases. If you remove the directory replication connector, you
	must also remove the adjacent connector. Before you can re-add a replication
	connector, you must successfully complete a knowledge consistency check on both
	directories. This deletes the objects that have been replicated between the two
	sites.
	
	MORE INFORMATION
	================
	
	To move the directory replication connector to a different Exchange Bridgehead
	server:
	
	1. In the local site:
	
	  a. Open the Exchange Server Administrator program and connect to the current
	     bridgehead server.
	
	  b. Click to expand the Organization container, click to expand the Site
	     container, click to expand the Configuration container, and then click the
	     Directory Replication object.
	
	  c. In the right pane, click the directory replication connector that you want
	     to move to a different server, and then open the properties of the
	     directory replication connector.
	
	  d. On the General tab, click the new server name in the "Local bridgehead
	     server" list, click Apply, and then click Yes.
	
	2. In the remote site:
	
	  a. Open the Exchange Server Administrator program and connect to the current
	     bridgehead server.
	
	  b. Click to expand the Organization container, click to expand the Site
	     container, click to expand the Configuration container, and then click the
	     Directory Replication object.
	
	  c. In the right pane, click the same directory replication connector for
	     which you changed the server in the local site steps, and then open the
	     properties of the directory replication connector.
	
	  d. On the General tab, click the same server name that you selected in the
	     local site steps above in the "Remote bridgehead server" list, click
	     Apply, and then click Yes twice.
	
	NOTE: You may not need to perform the remote site steps if the Remote bridgehead
	server listed in the remote site is automatically updated after you performed
	the preceding local site steps.
	
	For more information about Exchange Server planning and design, please refer to
	the Planning Your Implementation of Microsoft Exchange Server white paper from
	the following Microsoft Web site:
	
	  http://www.microsoft.com/exchange/techinfo/planning/2000/Planning.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
