---
layout: page
title: "Q246276: XADM: Directory Service Not Responding on Two Exchange Servers"
permalink: /kb/246/Q246276/
---

## Q246276: XADM: Directory Service Not Responding on Two Exchange Servers

{% raw %}

	Article: Q246276
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to administer a remote server running Microsoft Exchange Server 5.5
	from a local server also running Exchange Server 5.5, the Directory service may
	not respond on either server. Event Viewer may record the following event on
	both servers, with each server referencing the other:
	
	  Event ID: 1186
	  Source: MSExchangeDS
	  Type: Error
	  Category: Replication
	  Description: The internal directory replication agent (DRA) Dispatcher thread
	  is waiting in a remote procedure call to directory SERVER1. The directory has
	  attempted to cancel the call and recover the thread, with status 0x0. If this
	  condition persists, stop and restart that Microsoft Exchange Server computer.
	
	CAUSE
	=====
	
	This behavior can occur when the Directory service experiences a remote
	procedure call (RPC) lock with the remote Exchange server.
	
	RESOLUTION
	==========
	
	To resolve this behavior, follow these instructions in this exact order:
	
	1. Stop the Exchange Server services on the local server.
	
	2. Stop the Exchange Server services on the remote server.
	
	3. Restart the local server, allowing the Exchange Server services to start up
	  automatically.
	
	4. Restart the remote server, allowing the Exchange Server services to start up
	  automatically.
	
	Additional query words: RPC remote procedure call ping
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
