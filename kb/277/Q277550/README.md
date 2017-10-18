---
layout: page
title: "Q277550: Cluster Service Attempts to Restart Resources"
permalink: kb/277/Q277550/
---

## Q277550: Cluster Service Attempts to Restart Resources

	Article: Q277550
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbenv w2000mscs kbClustering
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you quit Resource Monitor, the Cluster service may continue to try to
	restart resources. When this occurs, the cluster may not work, and you may see
	the following symptoms:
	
	- Each node sees the other node as down
	- Each node terminates the Resrcmon.exe program
	- Each node keeps trying to bring resources online
	- Each node cannot bring the resources online and blocks, waiting for the
	  quorum resource
	
	CAUSE
	=====
	
	This problem can occur if you run out of resource monitors in which to run
	resources.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Service Pack 4 (SP4) or later if you are
	using a computer that is running Microsoft Windows NT 4.0. If you are not using
	a computer that is running Microsoft Windows NT 4.0, verify that you do not have
	resources set to run in their own resource monitor. Resources that are set to
	run in their own resource monitor consume an entire resource monitor and reduce
	the maximum number of resources that a cluster can support.
	
	If the server is a file server, you may want to implement dynamic file shares to
	share all home folders under a single resource. For additional information about
	file share resources on a cluster, click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q224967 How to Create File Shares on a Cluster
	
	  Q256926 Implementing Home Folders on a Server Cluster
	
	  Q220819 How to Configure Dfs Root on a Windows 2000 Server Cluster
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	There is a limit to the number of resources supported on a Server Cluster.
	
	Server Clustering supports up to 930 resources: 15 resource threads multiplied by
	62 resource monitors equals 930 total resources.
	
	After you install Windows NT 4.0 Service Pack 4 (SP4), the number of resource
	threads increases to 27, including Windows 2000, and later 27 resources threads
	multiplied by 62 resource monitors equals 1674 total resources.
	
	  Q185212 Cluster Server Does Not Support More than 900 Shares
	
	Additional query words: mscs
	
	======================================================================
	Keywords          : kbenv w2000mscs kbClustering 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbwin2000Search kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	
