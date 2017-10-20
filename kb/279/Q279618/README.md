---
layout: page
title: "Q279618: XFOR:  How to Move Directory Replication to a Site Connector"
permalink: /kb/279/Q279618/
---

## Q279618: XFOR:  How to Move Directory Replication to a Site Connector

{% raw %}

	Article: Q279618
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to move the route that Exchange Server uses for
	directory replication from the Internet Mail Service to a site connector.
	
	MORE INFORMATION
	================
	
	To move the route that Exchange Server uses from directory replication, follow
	the procedure in this section.
	
	NOTE: If you configured a directory replication connector, you do not need to
	delete the directory replication connection.
	
	1. On the File menu, click New, point to Other, and then click Site connector to
	  create a site connector to a remote site.
	
	2. Click the Target Servers tab, add a server in the remote site, and then
	  assign a corresponding cost to the server.
	
	3. Open the Internet Mail Service properties, click the Connected Sites tab, and
	  then delete the reference to the remote site.
	
	4. Restart the Internet Mail Service.
	
	5. Click to expand the Site Configuration container, open the Site Addressing
	  properties, click the Routing tab, and then recalculate routing.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Component         : Directory IMS Replication Messaging
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
