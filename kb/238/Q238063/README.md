---
layout: page
title: "Q238063: XADM: How to Do an Online Restore of an Exchange Cluster Server"
permalink: kb/238/Q238063/
---

## Q238063: XADM: How to Do an Online Restore of an Exchange Cluster Server

	Article: Q238063
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article outlines the steps necessary to perform an online restore of a
	Microsoft Exchange Server computer running on a Microsoft Cluster Server (MSCS).
	
	MORE INFORMATION
	================
	
	The following instructions assume that you have already installed Cluster
	Server. If you perform a full recovery of your Exchange Cluster Server, you must
	make sure that the Exchange Server virtual server name is the same as the server
	you are restoring to. You also must make sure that Exchange Server is installed
	using the same organization and site name (this information is case sensitive)
	that it used before the restore.
	
	
	Environment Considerations: To perform the following steps it is crucial that you
	have a stable cluster environment.
	
	To perform an online restore of an Exchange Cluster Server:
	
	1. Start the Cluster Administrator program, click Groups, and then click
	  Exchange Cluster.
	
	2. In the right pane, right-click the Microsoft Exchange Directory Service, and
	  then click Take Offline.
	
	3. Quit the Cluster Administrator program.
	
	4. Start the Windows NT Backup program, and in the Tapes window, click the
	  information store and directory service that you want to restore.
	
	5. Click Restore, and click to select the virtual server name of the Exchange
	  Cluster Server as the destination server.
	
	6. Click to select the Erase All Existing Data check box, and then click OK.
	
	7. After the restore is complete, verify in cluster administrator that the
	  Exchange IP address and the Exchange Network Name resource are online. Start
	  the Exchange services through the Control Panel. Once Exchange has come
	  online completely, verify that mail delivery is once again functioning.
	
	NOTE: It is important to start the Directory and Information Store Services
	through Control Panel because the Restore in Progress (RIP) is not read if you
	use the Cluster Administrator to attempt to bring the resources online. If you
	do not use Control Panel, the Application log may log the following event:
	
	For the Directory:
	
	  Event ID: 1002 Source: MSExchangeDS Description: The Microsoft Exchange
	  Server database (EDB) could not be initialized and returned error -528.
	  Unrecoverable error, the directory can't continue.
	
	For additional information about how to resolve this issue, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q188674 XADM: Directory Service Restore to Cluster Fails with Event 1002
	
	For the Information Store:
	
	  Event ID: 1120 Source: MSExchangeIS Description: Error Current log file
	  missing initializing the Microsoft Exchange Server Information Store
	  database.
	
	  Event ID: 5000 Source: MSExchangeIS Description: Unable to initialize the
	  Microsoft Exchange Information Store service. Error Current log file missing.
	
	To correct this issue do the following:
	
	  a. You may either perform another online restore of the Information Store so
	     it writes a new RIP key or manually recreate the key as described in the
	     following Microsoft Knowledge Base Article:
	
	  Q200941 XADM: How the Restore in Progress Registry Key Works
	
	  b. Start the Information Store Service through Control Panel.
	
	  c. Once it has started, use Cluster Administrator to bring the Microsoft
	     Exchange Information Store resource online.
	
	8. If mail is flowing, stop Exchange via the Control Panel. Open cluster
	  administrator and start the Exchange resources.
	
	9. After all the services start, test failover of the Exchange server by
	  right-clicking the cluster resource group that contains the Exchange
	  resources and choosing the Move Group option.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
