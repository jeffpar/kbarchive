---
layout: page
title: "Q225081: Cluster Resources Quorum Log Size Defaults to 64 KB"
permalink: kb/225/Q225081/
---

## Q225081: Cluster Resources Quorum Log Size Defaults to 64 KB

	Article: Q225081
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to change the quorum log size of a cluster.
	
	MORE INFORMATION
	================
	
	
	The default quorum log size of any cluster is 64 kilobytes (KB). If you increase
	the number of shares or transactions significantly, the quorum log size may be
	too small.
	
	You might need to adjust the quorum log size when you use a large number of file
	shares. For example, an administrator adds new file shares that work properly,
	and then a failover occurs. The file shares are no longer displayed in a
	cluster.
	
	You may receive an event message that indicates the quorum log size is too
	small.
	
	To change the quorum log size, follow these steps:
	
	1. Right-click the top left cluster group name, and then click Properties.
	
	2. Click quorum log, and then type "4096" (without the quotation marks) in the
	  Size box.
	
	NOTE: The size is atomic and you do not need to change the size on the other
	node.
	
	NOTE: You do not need to restart the computer or service unless you are running a
	third-party tool, like a quota or virus protection program, that might prevent
	the change from occurring.
	
	Additional query words: mscs missing reset quorum log
	
	======================================================================
	Keywords          : kbenv kbtool 
	Component         : Admin
	Technology        : kbWinNTsearch kbWinNT400xsearch kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbwin2000Search kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,4.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
