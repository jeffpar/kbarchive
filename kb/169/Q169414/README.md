---
layout: page
title: "Q169414: Cluster Service May Stop After Failover"
permalink: /kb/169/Q169414/
---

## Q169414: Cluster Service May Stop After Failover

{% raw %}

	Article: Q169414
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Microsoft Cluster Server and shut down one of the nodes in the
	cluster, the cluster service may fail with the following event codes in the
	system event log:
	
	- Event 1006
	
	- Event 7023
	
	- Event 1009
	
	CAUSE
	=====
	
	When you shut down one of the cluster nodes, all resources should transition to
	a surviving node in the cluster. If the shared SCSI bus loses termination, the
	surviving node may not have access to the shared devices. As a result, the
	surviving node may also fail and remove itself from the cluster -- only if the
	quorum disk is inaccessible.
	
	The cluster service requires access to a shared SCSI bus. The bus must be
	terminated at all times. Some SCSI host adapters may provide termination only
	while the computer has power. Thus, after powering off, termination may be lost.
	
	RESOLUTION
	==========
	
	To alleviate this condition, supply external terminators for the bus or enable
	constant termination of the adapter.
	
	MORE INFORMATION
	================
	
	Incorrect cabling or termination of the shared SCSI bus may also trigger this
	condition. Additionally, use of standard SCSI terminators with a Wide SCSI bus
	may provide inadequate termination. Some older terminators do not terminate the
	high bits on the Wide SCSI chain and may result in partial termination of the
	SCSI bus. Consult your hardware vendor for proper cabling and termination.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q168094 Problems Attaching SCSI-2 Devices to SCSI-3 Adapter
	
	Additional query words: MSCS
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
