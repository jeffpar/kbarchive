---
layout: page
title: "Q257897: Printer Shares May Not Come Online If Quorum Log Is Too Small"
permalink: kb/257/Q257897/
---

## Q257897: Printer Shares May Not Come Online If Quorum Log Is Too Small

	Article: Q257897
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): w2000mscs kbClustering
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a failover of a cluster group that contains a Print Spooler resource
	occurs, all of the printers on the virtual server may not be shared. For
	example, if you have 200 printers defined on the cluster, after a failover, only
	150 of them may appear under the virtual server. Other symptoms may include
	having printers that are defined in the Printers folder but with no port
	selected.
	
	RESOLUTION
	==========
	
	This behavior can occur if the quorum log is not large enough to store the
	information for all of the printers in the cluster registry. Increasing the log
	size from its original value of 64 KB to 4,096 KB resolves this issue. For
	additional information about how to increase the size of the quorum log, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q225081 Cluster Resources Quorum Size Defaults to 64K
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q197046 How to Set up a Print Spooler on Microsoft Cluster Server
	
	Additional query words: mscs reset quorum log
	
	======================================================================
	Keywords          : w2000mscs kbClustering 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbwin2000Search kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	
