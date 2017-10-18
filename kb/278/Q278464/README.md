---
layout: page
title: "Q278464: XADM: Changing the Exchange Server Database Paths on a Cluster"
permalink: kb/278/Q278464/
---

## Q278464: XADM: Changing the Exchange Server Database Paths on a Cluster

	Article: Q278464
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how Microsoft Cluster Server processes registry changes,
	and describes how to ensure that values that are created by Performance
	Optimizer are retained in a clustered environment.
	
	MORE INFORMATION
	================
	
	When Exchange Server 5.5 is running on a Cluster Server, the Cluster service
	keeps track of registry changes that are made to the Exchange Server services.
	If a registry change is made on one node, the cluster service copies these
	changes to a checkpoint file on the quorum disk. These changes are then copied
	to the other node. This only occurs when the Exchange Server service is running.
	If the Exchange Server service is not running and changes are made to the
	registry, these changes are overwritten with the values that are stored in the
	checkpoint files when the Exchange Server service is started. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q174070 Registry Replication in Microsoft Cluster Server
	
	Because Exchange Server 5.5 Performance Optimizer shuts down all of the Exchange
	Server services, all of the changes that Performance Optimizer makes (for
	example, database paths) are overwritten with the old values that are stored in
	the checkpoint files when Performance Optimizer starts these services.
	
	To ensure that the new values that Performance Optimizer creates are kept:
	
	1. Shut down node 2.
	
	2. Use the Services icon in Control Panel to stop the Cluster service on node 1.
	
	3. Use the Services icon in Control Panel to start the Cluster service on node 1
	  by using the -fixquorum switch.
	
	4. Use Cluster Administrator to verify that all of the resources are online in
	  all groups. If not, bring the resources online.
	
	5. Delete the MSCS folder on the quorum drive.
	
	6. Run Performance Optimizer.
	
	7. After Performance Optimizer is finished running and the Exchange Server
	  resources are back online, verify there are no .cpt files in the MSCS folder
	  on the quorum drive.
	
	8. Use the Services icon in Control Panel to stop the Cluster service on node 1.
	
	9. Use the Services icon in Control Panel to start the Cluster service normally
	  (with no switches).
	
	10. You can use Cluster Administrator to change dependencies on the affected
	  services so that they depend on the correct disk. To do so:
	
	  a. In Cluster Administrator, expand the Server container, and then click
	     Active Resources. (You must do this for each node.)
	
	  b. Double-click each of the Exchange instances, click the Dependencies tab,
	     and verify that the correct resource dependencies are listed. For example,
	     in the Exchange Information Store instance, the System Attendant is the
	     correct resource dependency. Click Modify to make changes.
	
	11. Use Cluster Administrator to verify that all of the resources are online in
	  all groups. If not, bring the resources online.
	
	12. Bring node 2 back online.
	
	  NOTE: Sometimes the registry will not update. To force an update of the
	  registry, you can Fail-over and Fall-back. To Fail-over, in Active Resources
	  of node 1, right-click the System Attendant, and then click Initiate
	  Failure. Wait for all "pending" actions to complete. To Fall-back, expand
	  Groups, right-click the Exchange Virtual Server, and then click Move Group.
	
	Additional query words: online offline
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbOSWinNT400 kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOSWinNTSearch
	Version           : :4.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
