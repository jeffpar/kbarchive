---
layout: page
title: "Q197047: Failover/Failback Policies on Microsoft Cluster Server"
permalink: /kb/197/Q197047/
---

## Q197047: Failover/Failback Policies on Microsoft Cluster Server

	Article: Q197047
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Cluster Server (MSCS) has the ability to define a specific node in the
	cluster as the preferred node that is to own a particular group. If for any
	reason this node fails or goes offline, you can set the Cluster service to
	automatically move these groups back to the node that you want to. This is
	useful in statically load-balancing the nodes in your cluster. This is referred
	to as Failover and Failback policies.
	
	MORE INFORMATION
	================
	
	Setting Failover Policy
	-----------------------
	
	To set the Failover policy for a group, use the Failover tab for the group. You
	can set the failover threshold and the failover period. The failover threshold
	is the number of times the group can fail over within the number of hours
	specified by the failover period. For example, if a group failover threshold is
	set to 5, and its failover period set to 3, Cluster Server will failover the
	group at most five times within a three hour period. The next time a resource in
	the group exceeds its failure threshold count, Cluster Server will leave the
	resource in the offline state instead of failing over the group.
	
	NOTE: A group itself does not fail. Only when the following conditions are met
	for a resource within the group, will the group attempt a failover thus
	incrementing the Group's failover count.
	
	- The number of failures for a specific resource has exceeded its threshold
	  count within the defined period.
	- The resource is defined to "Affect the group".
	
	This failover will increment the count for the Group failover threshold by one.
	
	Setting Failback Policy
	-----------------------
	
	By default, groups are set not to failback. Unless you manually configure your
	group to failback after failover, it continues to run on the alternate node
	after the failed node comes back online.
	
	When you configure a group to automatically failback to the preferred node, you
	specify whether you want the group to failback as soon as the preferred node is
	available or to failback only during specific hours that you define. This option
	is useful if you want the failback to occur after peak business hours, or if you
	want to make sure the preferred node is able to support the group when it does
	come back online.
	
	The group must be configured to have a preferred owner to failback. You can
	specify a preferred owner on the General tab of the group Properties dialog
	box.
	
	NOTE: The "Preferred Owner" of a group must be specified for failback to occur.
	The preferred owner is the node that one configures to (under normal operating
	circumstances) to host the group. Furthermore, on a resource level, the resource
	must be configured to have both nodes as "Possible Owners" for the resource to
	failover.
	
	Testing Failover Polices
	------------------------
	
	You can test the failover policies you establish for a single group and its
	resources by manually failing over those elements.
	
	To test the failover policy for a group, type 0 (zero) for the Threshold in the
	Properties dialog box for a specific resource. Then, right-click on that
	resource and click Initiate Failure. Cluster Server immediately fails over the
	group to the alternate node.
	
	In a test environment, you can fail over all groups from one node to another by
	using Cluster Administrator to stop the Cluster Server, pressing the reset
	button on the computer, or turning off the power to one of the nodes.
	
	NOTE: Removing the shared SCSI/Fibre cable between either node and the shared
	disk array is not a valid failover test. The cluster service must have access to
	the shared array at all times for failover to succeed.
	
	REFERENCES
	==========
	
	For additional information on resources and groups, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q169017 Information on Groups & Resources Using Cluster Server
	
	Additional query words: mscs
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbwin2000Search kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
