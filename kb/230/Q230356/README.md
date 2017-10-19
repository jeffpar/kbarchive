---
layout: page
title: "Q230356: Changing the IP Address of Network Adapters in Cluster Server"
permalink: /kb/230/Q230356/
---

## Q230356: Changing the IP Address of Network Adapters in Cluster Server

	Article: Q230356
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cluster Server 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to change the IP addresses of the network adapters in
	the nodes of a cluster.
	
	MORE INFORMATION
	================
	
	During this procedure, it is important that the cluster server maintain a
	connection to the network. This is necessary so that it can communicate with a
	domain controller to validate the cluster server Service account.
	
	This article assumes that there are two nodes named A and B.
	
	1. Change the IP address of the network adapter on node A. This may require the
	  computer to be rebooted. If you are prompted to restart the computer, do so.
	
	2. Start Cluster Administrator and open a connection to the cluster. To
	  administer the cluster, you need to open a connection to "." (without
	  quotation marks) in Cluster Administrator when you are prompted to do so. You
	  must perform this process on one of the nodes in the cluster. If you do this
	  remotely, it may be possible to open a connection to the name of the node
	  itself. During this process, Cluster Administrator may respond with the
	  following error message:
	
	  A connection to the cluster at <cluster name> could not be opened. This
	  may be caused by the Cluster Service on node <cluster name> not being
	  started. Would you like Cluster Administrator to attempt to start the Cluster
	  Service on node <cluster name>?
	
	This occurs because Cluster Administrator attempts to connect to the last cluster
	it administered.
	
	3. Double-click the IP Address resource to open its properties.
	
	4. On the Parameters tab in the IP Address resource properties, make sure that
	  the "Network to Use" box contains the new network as the network to use.
	
	5. Fail all groups over to the functional node A.
	
	6. Change the IP addresses for the network adapters in node B.
	
	7. Reboot the computer.
	
	8. When both nodes agree on the subnets, the old networks disappear and the new
	  networks are created.
	
	9. You can rename the networks at this time.
	
	You use "." to administer the cluster because the IP Address resource does not
	come online when the Cluster service recognizes a new network and no longer uses
	the old network.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q241828 Changing IP Address of Cluster Adapter May Result in Failover
	
	Additional query words: mscs ip address network
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbwin2000Search kbAudDeveloper kbClustServSearch kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
