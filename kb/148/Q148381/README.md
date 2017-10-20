---
layout: page
title: "Q148381: XADM: Directory Replication Takes Too Long"
permalink: /kb/148/Q148381/
---

## Q148381: XADM: Directory Replication Takes Too Long

{% raw %}

	Article: Q148381
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbenv exc4 exc5 exc55
	Last Modified: 21-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains why, depending on the Directory Replication topology, the
	time required to replicate directory changes to all parts of a Microsoft
	Exchange Organization may be several days.
	
	MORE INFORMATION
	================
	
	Consider the following two Directory Replication topologies.
	
	Topology A: Hub
	
	Site X  <------->  Site W   <------> Site Z
	                     ^
	                     |
	                     |
	                     V
	                   Site Y
	
	Topology B: Cascade
	
	Site W  <----> Site X  <---> Site Y  <-----> Site Z
	
	In each of the above topologies, the arrows indicate a directory replication
	connector. Assume that each connector is scheduled to replicate at one time
	during the day.
	
	In Topology A, if a new mailbox is added to Site X, the maximum delay for that
	directory entry to be propagated to all the other Sites would be 2 days (one day
	for each directory replication connector hop).
	
	In Topology B, if a new mailbox was added to Site W, the maximum delay for that
	directory entry to reach all the other sites (specifically Site Z) would be 3
	days.
	
	Hence, the time required to propagate directory changes to all sites in an
	Exchange Organization depends on the replication schedule as well as the number
	of hops involved and the number of hops depends on the Directory Replication
	Topology.
	
	Additional query words: faq
	
	======================================================================
	Keywords          : kbenv exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
