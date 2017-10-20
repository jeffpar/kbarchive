---
layout: page
title: "Q174799: How to Install Service Packs in a Cluster"
permalink: /kb/174/Q174799/
---

## Q174799: How to Install Service Packs in a Cluster

{% raw %}

	Article: Q174799
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
	
	This article outlines the procedure for installing a Service Pack on Microsoft
	Windows Clustering. The process of applying a Service Pack to a server cluster
	is the same as applying it to Microsoft Windows 2000 or Microsoft Windows NT 4.0
	Enterprise Edition Server. However, special consideration must be taken to
	ensure a high level of access for clients when you perform this system
	maintenance.
	
	NOTE: You must install Service Pack 3 (SP3) at the end of the Windows NT 4.0
	Enterprise Edition installation to complete the installation. This is the only
	scenario where you cannot bypass a previous Service Pack and apply a later one.
	
	MORE INFORMATION
	================
	
	You can install Windows NT Server and Windows 2000 Service Packs on server
	cluster nodes using the following procedure. Always install the same Service
	Packs or hotfixes to each node. Use this procedure to install the Service Packs
	unless otherwise directed by a particular Service Pack version.
	
	1. Check the System event log for errors and ensure proper system operation.
	
	2. Make sure you have a current backup and updated emergency repair disk for
	  each system. In the event of corrupt files, power outage, or incompatibility,
	  it may be necessary to revert back to the state of the system prior to
	  attempting to install the Service Pack.
	
	3. Open Cluster Administrator, right-click Node A, and then click Pause Node.
	
	4. Right-click Node A, click Move Group for all groups owned by Node A to move
	  all groups to Node B.
	
	5. Install the Service Pack on Node A, and then restart the computer.
	
	6. Check the System event log for errors. If you find any errors, troubleshoot
	  them before continuing this process.
	
	7. In Cluster Administrator, right-click Node A, and then click Resume Node.
	
	8. In Cluster Administrator, right-click Node B, and then click Pause Node.
	
	9. Right-click Node B, and then click Move Group for all groups owned by Node B
	  to move all groups to Node A.
	
	10. Install the Service Pack on Node B, and then restart the computer.
	
	11. Check the system event log for errors. If you find any errors, troubleshoot
	  them before continuing this process.
	
	12. In Cluster Administrator, right-click Node B, and then click Resume Node.
	
	13. Right-click each group, click Move Group, and then move the groups back to
	  their preferred owner.
	
	Additional query words: mscs rolling upgrade
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbwin2000Search kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
