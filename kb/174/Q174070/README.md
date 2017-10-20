---
layout: page
title: "Q174070: Registry Replication in Microsoft Cluster Server"
permalink: /kb/174/Q174070/
---

## Q174070: Registry Replication in Microsoft Cluster Server

{% raw %}

	Article: Q174070
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
	
	Microsoft Cluster Server (MSCS) provides the ability to replicate designated
	registry keys as associated with a Generic Service or Generic Application
	resource types.
	
	MORE INFORMATION
	================
	
	MSCS provides the ability for Generic Service and Generic Application resource
	types to specify registry keys below HKEY_LOCAL_MACHINE that should be
	replicated to all nodes in the cluster.
	
	Some services or applications may update registry information while they are
	running by use of Win32 registry functions. MSCS provides registry checkpointing
	for noncluster aware applications that may use these functions. Registry
	checkpointing for these resources occurs under the following conditions:
	
	- When you specify a new registry key for the resource, the specified key is
	  checkpointed.
	
	- When the resource goes online, the registry keys are updated with the
	  previously checkpointed information.
	
	- When the resource is brought offline, all the checkpoints associcated with
	  this resource are saved.
	
	- When the resource is online and changes are made to the registry key which is
	  registered with the cluster server for replication, MSCS ensures that the
	  updates are written to a checkpoint maintained on the quorum device.
	
	If you manually update these registry keys while the application or service is
	offline, the changes may not be replicated or may be lost. To prevent this from
	happening, make any manual changes while the service or application resource is
	online.
	
	Cluster aware applications should make use of cluster registry functions as
	provided in the cluster API set when working with registry keys under
	HKEY_LOCAL_MACHINE\Cluster. Consult the MSCS Software Development Kit (SDK) for
	more information on this topic.
	
	Additional query words: cluster registry replication MSCS
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
