---
layout: page
title: "Q269196: How to Move a Cluster Server from One Domain to Another"
permalink: kb/269/Q269196/
---

## Q269196: How to Move a Cluster Server from One Domain to Another

	Article: Q269196
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows Clustering is designed to provide high availability of server resources.
	This article describes how to move a cluster from one domain to another.
	
	NOTE: Microsoft does not recommend performing this type of move in a production
	environment.
	
	MORE INFORMATION
	================
	
	To move a cluster server from one domain to another, the best solution is
	usually to rebuild the cluster in the new domain. However, you can move a
	cluster server from one domain to another.
	
	You can use the following steps to allow the Cluster service to start and operate
	in a new domain. Note that these steps are not sufficient to ensure that all
	resources will be available in the new domain.
	
	NOTE: Microsoft does not provide support to administrators attempting to move
	resources from one domain to another if the underlying operation is unsupported,
	such as moving a Microsoft Exchange server from one domain to another. Also, you
	cannot move Windows NT 4.0-based clusters from one domain to another if any of
	the nodes in the cluster are domain controllers.
	
	Moving a cluster from one domain to another is more dependent on the resources
	that the cluster hosts than on the functionality of the Cluster service itself.
	You can move a Cluster server from one domain to another with a manageable
	amount of risk; it is the administrator's responsibility to evaluate and manage
	the risks associated with moving the resources that are hosted by the cluster.
	
	Many resources that can be hosted on a Cluster server have dependencies on domain
	attributes. For example, any Windows NT-based services that are hosted by the
	cluster must run in the context of a service user account. If the service user
	account is a local user account, which is unlikely in a clustered environment,
	you should be able to move the services to the new domain without any issues. If
	these services log on to domain accounts, the administrator must determine
	whether he or she can re-create the user accounts for these services in the new
	domain, along with the necessary rights and privileges. Administrators usually
	determine that the risks associated with attempting to do this are unacceptably
	high, and that the best alternative is to rebuild the cluster in the new
	domain.
	
	After you assess the ability of each cluster resource to be moved to the new
	domain, you can decide whether to move the cluster or build a new cluster.
	
	WARNING: Microsoft recommends that you perform a full backup of all data on all
	shared hard disks on each node in the cluster before you attempt to move the
	cluster.
	
	The steps in this article allow the Cluster service to start in the new domain.
	However, you may or may not be able to bring the resources online in the new
	domain, and the resources that can be brought online may or may work properly.
	
	To move the cluster:
	
	1. Create a user account for the Cluster service in the new domain with the
	  following rights:
	
	   - Lock pages in memory.
	   - Log on as a service.
	   - Act as part of the operating system.
	   - Back up files and directories.
	   - Increase quotas.
	   - Increase scheduling priority.
	   - Load and unload device drivers.
	   - Restore files and directories.
	
	  In addition, the Cluster service account must have administrative privileges
	  on all nodes in the cluster.
	
	2. Set the Startup value for the Cluster service to Manual on all nodes in the
	  cluster:
	
	  a. Click Start, point to Settings, click Control Panel, and then double-click
	     Services.
	
	  b. Click Cluster Server, and then click Startup.
	
	  c. Change the Startup Type from Automatic to Manual.
	
	  d. Click OK.
	
	3. Stop the Cluster service on all cluster nodes:
	
	  a. Click Start, point to Settings, click Control Panel, and then double-click
	     Services.
	
	  b. Click Cluster Server, and then click Stop.
	
	4. Power down all nodes except one.
	
	5. Move the node into the new domain:
	
	  a. Click Start, point to Settings, click Control Panel, and then double-click
	     Network.
	
	  b. Click the Identification tab, and then click Change.
	
	  c. Change the existing domain name to the new domain name.
	
	  d. If the computer account has not been created in the domain, complete the
	     "Create a Computer Account" section.
	
	  e. Click OK, and then click Yes to move the computer out of the existing
	     domain.
	
	  f. Complete the process and then restart the node.
	
	6. On the node, change the service account used by the Cluster service to log on
	  to the domain to the user account you just created.
	
	7. Start the Cluster service on that node.
	
	8. Use Cluster Administrator to verify that there are no issues. Attempt to
	  bring all resources online. Test the functionality of all resources from
	  client computers, and then check the System event log for error messages.
	
	NOTE: At this point, you can still cancel the move by moving this node back into
	the old domain and starting the nodes that have not been moved.
	
	9. If moving the first node is successful, continue to migrate the other nodes
	  in the cluster to the new domain starting with step 5 for each node.
	
	WARNING: Moving a Cluster server from one domain to another that contains a
	Virtual Structured Query Language (SQL) Server results in a failure of the SQL
	cluster resources. This failure of SQL server which cannot be recovered without
	manually unclustering SQL with a assistance from a tool from SQL Support. Once
	SQL has manually been unclustered you need to use the SQL Cluster Failover
	Wizard to re-establish your clustered SQL server(s). In the event this tool
	fails you need to manually remove SQL completely and re-install.
	
	
	NOTE: If your DNS server is in a secure zone DNS registrations may be affected.
	In a secure DNS zone, the credentials of the account performing the registration
	are captured and stored with the records. This protects them from being
	maliciously replaced with incorrect values. In the case of a cluster virtual
	server, the original cluster service account would be used for this purpose. You
	may see DNS registration failures in the System Event logs, commonly error 9005
	(refused). If this occurs, delete the records on the DNS server, and bring the
	Network Name offline, then online again, so the new credentials can be recorded
	with the registration.
	
	Additional query words: mscs relocate switch
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	
