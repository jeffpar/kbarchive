---
layout: page
title: "Q190436: XADM: How the Location of Public Folders Affects Clients"
permalink: /kb/190/Q190436/
---

## Q190436: XADM: How the Location of Public Folders Affects Clients

{% raw %}

	Article: Q190436
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the process by which Exchange clients access public
	folders when the location of these folders changes. The location can change if
	an Exchange Server computer that is down for maintenance contains public folders
	that are replicated to other Exchange Server computers. The location also can
	change if a public folder is moved to another server by replicating it and then
	deleting it from the original server.
	
	MORE INFORMATION
	================
	
	Two latencies are involved when the location of a public folder changes:
	
	1. Directory replication latency to replicate this change to the other public
	  folder servers in the location. If the servers are in the same site, this is
	  typically 15 minutes at most.
	
	2. Information store latency on the public folder servers to update their local
	  cache of location information (called a sorted replica list) from their
	  respective directories. This is done once every hour by default.
	
	  On average, it takes about 40 minutes before the other servers are updated
	  with the location change. After this happens, any client trying to open a
	  public folder is given the sorted replica list (the list of locations where a
	  public folder is available) according to the new location information.
	
	  When a client logs on to Exchange and opens a public folder, it gets the fully
	  sorted replica list for that public folder from its public folder hierarchy
	  server and tries to connect to the replicas in approximately the order of the
	  list. The client does not save a cache of replica servers for public folders.
	  It gets this information from its hierarchy server each time a folder is
	  opened.
	
	  The client does have a cache of servers that it "knows" are down (when it
	  fails to connect). The client tries to avoid these servers as much as
	  possible while trying to connect to servers for content. Approximately every
	  hour, the client attempts to poll these downed servers to see if they are
	  back up.
	
	  This means that if the server in your location is down, the client avoids it
	  and goes to another location automatically without your having to change the
	  location (after trying just once to open a folder on that downed server).
	
	  The client switches back to the local server (the one in your location) if it
	  becomes available while the client is running. This may affect what is seen
	  in the client. The replicas of the public folder the client is using may not
	  be identical, due to replication latency. So, if the client has a document
	  open in the public folder and closes it before it switches to the local
	  server, the changes may not be there when it is re- opened, or the document
	  may not appear in the folder at all, depending on the situation. This is due
	  to replication latency.
	
	Additional query words: pf
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
