---
layout: page
title: "Q177764: XADM: Server Monitor Cannot Restart Services On Cluster Server"
permalink: /kb/177/Q177764/
---

## Q177764: XADM: Server Monitor Cannot Restart Services On Cluster Server

{% raw %}

	Article: Q177764
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	When you set up a Server Monitor for a Microsoft Exchange Cluster Server,
	you will notice that all the fields on the Action tab for the Server
	Monitor properties are disabled.
	
	This is by product design.
	
	The Action tab contains all the service and server restart settings. A
	Server Monitor cannot cycle the services on a Microsoft Exchange Cluster
	Server because it would undermine the Cluster Environment.
	
	Additional query words: wolfpack mscs
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
