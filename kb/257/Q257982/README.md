---
layout: page
title: "Q257982: 100 Percent CPU Use with Cluster Service"
permalink: /kb/257/Q257982/
---

## Q257982: 100 Percent CPU Use with Cluster Service

{% raw %}

	Article: Q257982
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you define hundreds of file share resources within a cluster, one or more
	nodes in the cluster may begin to provide reduced performance. When this occurs,
	Task Manager may report excessive CPU utilization by either the Clussvc.exe or
	Rsrcmon.exe processes.
	
	CAUSE
	=====
	
	On some clusters, several hundred resources may consume enough overhead to
	impact performance. The number of total resources that a cluster may process
	without significant overhead varies based on the abilities of the hardware.
	
	RESOLUTION
	==========
	
	The most efficient way to create many file shares on a cluster is to create
	sub-folder shares because this option can significantly reduce the number of
	resources and overhead. This option also simplifies administration and disaster
	recovery.
	
	If you must use individual File Share resources for several hundred shares, it
	may be necessary to add more CPUs or memory to the server.
	
	MORE INFORMATION
	================
	
	For additional information about how to create file shares on a cluster, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q227967 How to Create File Shares on a Cluster
	
	  Q254219 Security Considerations When Implementing Clustered File Shares
	
	  Q185212 Cluster Server Does Not Support More than 900 Shares
	
	  Q256926 Implementing Home Folders on a Server Cluster
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbwin2000Search kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
