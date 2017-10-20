---
layout: page
title: "Q257901: How to Force the Cluster Service to Stop and Cause a Failover"
permalink: /kb/257/Q257901/
---

## Q257901: How to Force the Cluster Service to Stop and Cause a Failover

{% raw %}

	Article: Q257901
	Product(s): Microsoft Windows NT
	Version(s): 1.1,2000,4.0
	Operating System(s): 
	Keyword(s): kbtool w2000mscs kbClustering
	Last Modified: 19-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server, version 1.1 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If the Cluster service, Cluster Administrator, or any of the resources managed
	by Cluster Administrator stops responding (hangs), you may have to stop the
	Cluster service to cause resources to fail over to the other cluster node and to
	prevent Cluster Administrator from hanging when you try to start it.
	
	Any process upon which Cluster Administrator is dependent (such as being
	authenticated by a primary or backup domain controller) can cause Cluster
	Administrator to stop responding.
	
	MORE INFORMATION
	================
	
	To force the Cluster service to stop, start Task Manager and note the PID number
	for ***Cluster.exe*** CLUSSVC.EXE on the Processes tab. Then, use the Kill
	program from the Resource Kit to "kill" the PID number for ***Cluster.exe***
	CLUSSVC.EXE. The cluster then fails over to the other node.
	
	Additional query words: MSCS freeze frozen hung failover
	
	======================================================================
	Keywords          : kbtool w2000mscs kbClustering 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbwin2000Search kbAudDeveloper kbClustServSearch kbWinAdvServSearch kbClustServ110
	Version           : :1.1,2000,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
