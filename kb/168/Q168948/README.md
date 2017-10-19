---
layout: page
title: "Q168948: Information About the Cluster Group"
permalink: /kb/168/Q168948/
---

## Q168948: Information About the Cluster Group

	Article: Q168948
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install the Microsoft Cluster Service (MSCS), the default cluster group
	that is created contains an IP address and Network Name (Cluster Name) for
	cluster administration. In Windows 2000 and beyond it will also put the physical
	disk resource that is used as the Quorum disk in the cluster group as well.
	Additional resources should not be added to this group.
	
	MORE INFORMATION
	================
	
	The Cluster Group contains resources related to cluster administration only. If
	you add additional resources to the group, the ability to administer the cluster
	may be hindered. Failure of any additional resources within the Cluster Group
	may trigger failover or inability to successfully administer the cluster.
	
	For best results and higher availability of the cluster, do not add resources to
	the cluster group. Instead, create groups for the additional resources, or place
	the resources in other groups within the cluster.
	
	Additional query words: MSCS W2000MSCS
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbwin2000Search kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
