---
layout: page
title: "Q196655: How to Set Up File Auditing on Cluster Disk"
permalink: /kb/196/Q196655/
---

## Q196655: How to Set Up File Auditing on Cluster Disk

{% raw %}

	Article: Q196655
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using Microsoft Cluster Server version 1.0, NTFS file/directory auditing on
	a shared disk resource will stop recording file system access after the disk
	resource is failed over to the other node. If the disk resource fails back to
	the original node where auditing was configured, it logs information correctly.
	
	MORE INFORMATION
	================
	
	Auditing NTFS files and directories is set up both at the system level and the
	file system level. The configuration set in Explorer resides on the volume in
	question, but the system level configuration set in User Manager is stored in
	the local system registry and is not replicated between the Cluster nodes.
	
	To turn this feature on, follow these steps:
	
	1. Go to each node in the cluster and run User Manager.
	
	2. On the Policies menu, select Audit.
	
	3. Click to select Audit These Events and then click to select one or both of
	  the Success and Failure check boxes for File and Object Access.
	
	Audit settings remain and are viewable from Explorer.exe, from either node,
	providing that the node doing the viewing owns the drive and has it mounted
	(online).
	
	For additional information on auditing, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q157238 How to Activate Security Event Logging in Windows NT 4.0
	
	Additional query words: MSCS
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : WinNT:4.0
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	

{% endraw %}
