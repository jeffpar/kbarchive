---
layout: page
title: "Q174398: How to Force Time Synchronization Between Cluster Nodes"
permalink: /kb/174/Q174398/
---

## Q174398: How to Force Time Synchronization Between Cluster Nodes

{% raw %}

	Article: Q174398
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
	
	The MSCS Time Service resource coordinates the synchronization of the date and
	time on cluster nodes. The time between nodes is synchronized automatically when
	the cluster is formed and at specified intervals thereafter. If you change the
	time in the cluster, you may want to synchronize the time on cluster nodes
	quickly rather than waiting for the next synchronization interval to occur.
	
	MORE INFORMATION
	================
	
	To change the time and force time synchronization, perform the following steps:
	
	1. Change the time on the node that currently owns the Time Service resource.
	
	  NOTE: This will be the node that owns the Cluster Group.
	
	2. On the other node, run the NET TIME command and specify the computer name of
	  the node that owns the Time Service.
	
	  For example, if NODEA owns the time service, type the following at the Windows
	  NT command prompt and then press ENTER:
	
	  NET TIME /set /y \\NODEA
	
	NOTE: If you change the time on a node that does not own the Time Service, that
	node will eventually synchronize with the owner of the Time Service and may not
	reflect the time adjustment. For best results, follow the above procedure.
	
	Additional query words: MSCS
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : WinNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
