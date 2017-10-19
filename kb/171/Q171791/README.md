---
layout: page
title: "Q171791: Creating Dependencies in Microsoft Cluster Server"
permalink: /kb/171/Q171791/
---

## Q171791: Creating Dependencies in Microsoft Cluster Server

	Article: Q171791
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how dependencies in Microsoft Cluster Server (MSCS)
	resources are used.
	
	MORE INFORMATION
	================
	
	The basic unit of failover in MSCS is the group. The group is the set of tasks
	or items that must all be on the same node of the cluster for a particular
	objective to be accomplished. Each group can be on only one node in the cluster
	at a time, but different groups can be owned by different nodes. Each group
	contains one or more resources. A resource is a process or data item that is
	managed and watched by the cluster service of the node on which the group
	resides. If a resource fails, the cluster service will first attempt to restart
	the resource, but, if that is unsuccessful, the cluster service will move the
	group to another node if one is available.
	
	As stated above, the group should contain all resources that must be on the same
	node for processing to occur. In that sense, the resources of the group are
	interdependent. More pragmatically, often one resource must be online before
	another resource can configure itself and start correctly. The second resource
	is said to "depend" on the other. The Cluster Administrator allows you to
	designate one resource as depending on another. If this is done, the Cluster
	service will not start the resource until the one it depends upon is started. If
	a resource fails, the resources that depend on it will be taken offline, and, if
	it restarts, the resources will be returned to an online state.
	
	Many of the resource types that ship with MSCS have requirements for
	dependencies. The only resource types that do not usually depend on another
	resource are the Physical Disk, IP Address and Time Service resources. The
	Network Name resource must depend upon an IP address so that it can register the
	name and address pair with WINS. The Server Message Block (SMB) File Share
	resource requires both a Network Name and a Physical Disk. The other resources
	have similar requirements.
	
	The cluster service will start resources in the order of their dependencies. In
	the above example, a typical group going online would start the Disk and IP
	Address resources first, because they have no dependencies. The Network Name
	resource would be started next, and after that starts, the File Share resource
	would start, because both the Disk and Network Name resources are online.
	
	Note that it is not possible to have resources in different groups depend on one
	another. Because different groups can reside on different nodes, there is no way
	to guarantee that the dependencies can be satisfied.
	
	You can also define dependencies where none are required to satisfy logical
	dependencies that you create. For instance, you may not want your Internet
	Information Server (IIS) virtual web page describing the shares to which your
	users have access to be online if the SMB shares themselves are not available.
	
	Additional query words: MSCS
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
