---
layout: page
title: "Q228480: Error 1722 When Starting Cluster Administrator"
permalink: /kb/228/Q228480/
---

## Q228480: Error 1722 When Starting Cluster Administrator

	Article: Q228480
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Cluster Administrator on a computer running Microsoft Cluster
	Server, the following error message may be displayed:
	
	  A connection to the cluster at <clustername> could not be opened. This
	  may be caused by the Cluster Service on node <clustername> not being
	  started. Would you like Cluster Administrator to attempt to start the Cluster
	  Service on node <clustername>?
	
	If you click Yes or No, the following error message is displayed:
	
	  An error occurred trying to open the cluster at <clustername>
	
	  The RPC server is unavailable.
	  Error ID: 1722 (0000006ba)
	
	After this error message is displayed, it is not possible to connect to the
	cluster using <clustername> (where <clustername> is the name of the
	cluster server).
	
	CAUSE
	=====
	
	This behavior can occur for either of the following reasons:
	
	- The Cluster service may not be started.
	
	- The cluster network name resource may be offline.
	  If the parameters of a network adapter on the "Public Network" are changed
	  (for example, when you reinstall a driver, change an IP address, or change a
	  subnet mask), the Cluster service recognizes the network adapter as new. The
	  Cluster service generates a new network for the card and labels it "New
	  Cluster Network." The old Public Network no longer exists, and
	  <clustername> and the cluster IP address that <clustername>
	  depends on do not go online.
	
	NOTE: Public Network is the friendly name associated with the interface that
	network clients use to connect to the cluster. This name may be different in
	actual deployments because it is user-definable during the installation of
	Microsoft Cluster Server.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method.
	
	From one of the nodes of the cluster:
	
	1. Start Cluster Administrator.
	
	2. When you are prompted to connect to a cluster, type a period (.) in the "Open
	  Connection to Cluster" dialog box, and then click Open. At this point, the
	  cluster group is offline.
	
	3. Click the cluster group, and then click the cluster IP address.
	
	4. On the File menu, click Properties.
	
	5. On the Parameters tab, click New Cluster Network in the "Network to Use" box
	  (the Public Network no longer exists), and then click OK.
	
	6. Click the cluster IP address.
	
	7. On the File menu, click Bring Online.
	
	You can now bring the remaining resources online.
	
	If you cannot gain access to one of the nodes of the cluster:
	
	1. Start Cluster Administrator.
	
	2. When you are prompted to connect to a cluster, type the NetBIOS name of one
	  of the nodes of the cluster in the Open Connection to Cluster dialog box, and
	  then click Open.
	
	3. Click the cluster group, and then click the cluster IP address.
	
	4. On the File menu, click Properties.
	
	5. On the Parameters tab, click New Cluster Network in the "Network to Use" box
	  (the Public Network no longer exists), and then click OK.
	
	6. Click the cluster IP address.
	
	7. On the File menu, click Bring Online.
	
	You can now bring the remaining resources online.
	
	NOTE: If you created other IP address resources on the cluster, you may have to
	reassign a network to the IP addresses to bring them online.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbwin2000Search kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	
