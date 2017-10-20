---
layout: page
title: "Q262832: Cluster Service Does Not Start with Event ID 7023"
permalink: /kb/262/Q262832/
---

## Q262832: Cluster Service Does Not Start with Event ID 7023

{% raw %}

	Article: Q262832
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you adjust a network setting on a node in an already functioning cluster
	and you restart the node, the Cluster service may not start on that node and the
	following Event ID may be displayed in the system log:
	
	  Event ID: 7023
	  Source: Service Control Manager
	  Description: The Cluster Server service terminated with the following error:
	  The endpoint cannot be created
	
	If you attempt to manually start the Cluster service using the Services tool in
	Control Panel, the following error message may be displayed:
	
	  Could not start the Cluster Server service on <MachineName>
	  Error 1720 The endpoint cannot be created
	
	CAUSE
	=====
	
	The error message occurs when RPC remote procedure call (RPC) is unable to bind
	to the Cluster Datagram Protocol (CDP). This transport is used for the heartbeat
	interface for inter-node communication in the cluster.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this behavior, locate the following registry keys and make the
	appropriate adjustments if the keys are missing, damaged, or have improper
	permissions:
	
	- HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Winsock\Setup
	  Migration\Providers\Clusnet
	
	- HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Winsock\Setup Migration
	
	  Value Name: Provider List
	  Data Type: REG_MULTI_SZ
	  Data: Clusnet (There will be other data values for this key as well)
	
	- HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Winsock\Parameters
	
	  Value Name: Transports
	  Data Type: REG_MULTI_SZ
	  Data: Clusnet (There will be other data values for this key as well)
	
	NOTE: If all of the registry keys are correct, you may need to reinstall the
	Cluster service on the node.
	
	MORE INFORMATION
	================
	
	If Cluster Logging is enabled, the following sequence of events may be logged
	when the Cluster service attempts to start:
	
	  [CS] Initializing RPC server.
	  [INIT] Unable to bind RPC to CDP, status 1720
	  [CS] ClusterInitialize failed 1720
	  [INIT] The cluster service is shutting down.
	  [FM] Shutdown: Failover Manager requested to shutdown groups.
	  [FM] FmpCleanupGroups: Entry
	  [Dm] DmShutdown
	  [DM] DmpShutdownFlusher: Entry
	  [DM] DmpShutdownFlusher: Setting event
	  [DM] DmpRegistryFlusher: got 0
	  [DM] DmpRegistryFlusher: exiting
	  [CPROXY] clussvc terminated, error 1720
	  [CPROXY] Service Stopping...
	  [CPROXY] Cleaning up
	  [CPROXY] Cleanup complete.
	  [CPROXY] Service Stopped.
	
	
	Additional query words: mscs corrupt corrupted
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
