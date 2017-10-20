---
layout: page
title: "Q258518: RPC Unavailable Error Appears When You Try to Access a Cluster S"
permalink: /kb/258/Q258518/
---

## Q258518: RPC Unavailable Error Appears When You Try to Access a Cluster S

{% raw %}

	Article: Q258518
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access the Microsoft Cluster Server (MSCS) through the cluster
	administrator, the following error message may appear:
	
	  An Error occurred trying to open the cluster at 'cluster_name'
	  The RPC Server is unavailable
	  Error ID: 1722 (000006ba)
	
	CAUSE
	=====
	
	This behavior can occur for many reasons. The following is a list of some of the
	possible causes:
	
	- Computer specified is not a cluster server.
	
	- Network connection is down.
	
	- Cluster nodes are reporting errors
	
	- Cluster group is off-line.
	
	- Cluster service on the target system stopped.
	
	RESOLUTION
	==========
	
	To resolve this behavior, check to make sure the computer you are connecting to
	is actually a cluster server. If the cluster group has been taken off-line or
	paused for a soft rollover, connecting to the node name allows you to bring the
	resource group back online. If all other attempts to open the cluster
	administrator fail, specify a "." character from one of the cluster nodes when
	asked which cluster to administer. By specifying the "." character, the node
	that you are logged on to will search itself for the cluster service.
	
	MORE INFORMATION
	================
	
	MSCS uses remote procedure calls (RPC) and requires that the RPC service be
	running on both systems. Check to make sure that the RPC service is running on
	both systems and that the system event logs on each server do not have any
	RPC-related errors.
	
	Ensure that the server is operational and that both the Cluster Service and the
	RPC services are running. Also, check the name resolution of the cluster; it is
	possible that you are using the wrong name or that the name is not being
	properly resolved by WINS or DNS.
	
	REFERENCES
	==========
	
	For additional information about the RPC Server error message, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q224370 Error Message: The RPC Server Is Unavailable
	
	  Q171781 DNS Server Fails to Start Due to Unavailable RPC Server Error
	
	  Q196636 XADM: RPC Server Unavailable Error During Setup On Cluster
	
	Additional query words: MSCS Cluster Administrator
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
