---
layout: page
title: "Q170762: Cluster Shares Appear in Browse List Under Other Names"
permalink: /kb/170/Q170762/
---

## Q170762: Cluster Shares Appear in Browse List Under Other Names

{% raw %}

	Article: Q170762
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a file share resource within Microsoft Cluster Server, you may be
	able to see the share in browse lists under multiple servers.
	
	CAUSE
	=====
	
	Microsoft Cluster Server allows resources to be moved from one server to another
	in a cluster. When a network share is defined as a cluster resource, the share
	is offered by the server service on a particular cluster node. Because of
	multiple network names that may belong to the same computer, shared resources
	may appear under these names and may also be accessible through them. This is by
	design.
	
	NOTE: It is very important to use the network name associated with the group to
	which the shared resource belongs. If the group fails over to another cluster
	node, the resource will only be available through the group's network name and
	through other network names on the other node. Thus, if a client uses the wrong
	network name, it may not re-establish network connections after failover.
	
	Additionally, if you create shares on the server and do not create them as a
	resource within the cluster software, the share will not be able to fail over to
	another node. Then it is considered a local share.
	
	RESOLUTION
	==========
	
	To avoid client connectivity interruptions, make sure that clients use the
	network name associated with the group in which the shared resource belongs.
	
	Additional query words: MSCS netbios
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbwin2000Search kbAudDeveloper kbClustServSearch kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
