---
layout: page
title: "Q272350: Can't Set Admin Permission on NT4 Clusters w/ Cluster Administr"
permalink: /kb/272/Q272350/
---

## Q272350: Can't Set Admin Permission on NT4 Clusters w/ Cluster Administr

{% raw %}

	Article: Q272350
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool w2000mscs kbClustering
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are attempting to remotely administer a Windows NT 4.0 Clustering
	server by using the Windows 2000 Cluster Administrator tool, there is no option
	available by which to set authorization permissions for cluster administration.
	
	CAUSE
	=====
	
	The administration extension for the new Security tab is not registered on the
	Windows NT 4.0 cluster.
	
	RESOLUTION
	==========
	
	To enable this functionality, execute the following command from a command
	prompt of the Windows 2000 computer
	
	  %SystemRoot%\cluster\cluster.exe -c:NT4ClusterName /regext:cluadmex.dll
	
	where NT4ClusterName is the name of the cluster. For example:
	
	  c:\winnt\cluster\cluster.exe -c:MYCLUSTER /regext:cluadmex.dll
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Windows 2000.
	
	MORE INFORMATION
	================
	
	When you are using Windows NT 4.0 Cluster Administrator, permissions on Windows
	NT 4.0 clusters are assigned by using the Permissions button on the General tab
	of the cluster properties sheet. In Windows 2000 Cluster Administrator, this
	functionality is located on the Security tab. When you are using the Windows
	2000 Cluster Administrator to connect to a Windows NT 4.0 cluster, neither of
	these methods are available until the Cluadmex.dll file has been successfully
	registered on the Windows NT 4.0 cluster nodes. After successful registration,
	the Security tab becomes available on all future Windows 2000 Cluster
	Administrator remote connections.
	
	Additional query words: mscs cluadmin security
	
	======================================================================
	Keywords          : kbenv kbtool w2000mscs kbClustering 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbwin2000Search kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
