---
layout: page
title: "Q174945: How to Prevent MSCS from Using Specific Networks"
permalink: /kb/174/Q174945/
---

## Q174945: How to Prevent MSCS from Using Specific Networks

	Article: Q174945
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
	
	Microsoft Cluster Server provides the ability to use or ignore specific
	networks. This feature may be useful for networks allocated to specific tasks
	not affiliated with cluster operations or cluster resource related clients.
	
	MORE INFORMATION
	================
	
	Use the procedure below to restrict or enable network use:
	
	1. Right-click the cluster name. The name is at the top level of the resource or
	  group tree in the left portion of the Cluster Administrator window (above the
	  Groups folder).
	
	2. Select Properties.
	
	3. Select the Network Priority tab.
	
	4. Adjust network priority for internal cluster communications as needed with
	  the up and down arrows provided.
	
	5. Select the network to enable or disable and click Properties.
	
	6. Select or clear the "Enable for cluster use" check box as desired.
	
	7. When you are finished, click OK.
	
	NOTE: It is important to allow for internal cluster communications as well as
	client communications. A typical configuration with two network adapters would
	allow all communications on the system's primary network adapter and internal
	cluster communications only on the secondary adapter. The secondary adapter
	would have the highest priority for cluster communications and would allow the
	primary adapter to assume this role if the secondary adapter fails.
	
	Additional query words: cluster network enable ignore MSCS
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : WinNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
