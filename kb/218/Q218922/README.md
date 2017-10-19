---
layout: page
title: "Q218922: Installing NTOP on Cluster Server with SP4 Causes Event IDs 1009"
permalink: /kb/218/Q218922/
---

## Q218922: Installing NTOP on Cluster Server with SP4 Causes Event IDs 1009

	Article: Q218922
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Windows NT Option Pack on a Microsoft Cluster Server 1.0
	computer running Windows NT Service Pack 4 (SP4), the following Event IDs may
	appear in the System Event log on each node:
	
	  EVENT: 1009
	  SOURCE: ClusSvc
	  DESCRIPTION: Microsoft Cluster Server could not join an existing cluster and
	  could not form a new cluster. Microsoft Cluster Server has terminated.
	
	  EVENT: 1058
	  SOURCE: ClusSvc
	  DESCRIPTION: The Cluster Resource Monitor could not load the DLL clusres.dll
	  for resource type Physical Disk.
	
	The following symptoms may be observed:
	
	- Unable to fail-over or move resource to other node.
	
	- Cluster Server service stops responding on startup.
	
	- An "End-point Mapper" error occurs when starting the Cluster Server
	  Administrator.
	
	CAUSE
	=====
	
	This behavior is caused by the Windows NT Option Pack overwriting some newer SP4
	components with older Windows NT Option Pack components.
	
	RESOLUTION
	==========
	
	Re-apply Windows NT Service Pack 4 to both nodes and restart the computer.
	
	Note: Service Pack 4 must be applied after the Windows NT Option Pack setup has
	completed and after both nodes have been restarted.
	
	Additional query words: IIS4, MSCS 1.0
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
