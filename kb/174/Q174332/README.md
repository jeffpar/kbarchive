---
layout: page
title: "Q174332: How to Add Additional Cluster Administrators"
permalink: /kb/174/Q174332/
---

## Q174332: How to Add Additional Cluster Administrators

{% raw %}

	Article: Q174332
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Use the Cluster Administrator tool for Microsoft Cluster Server to specify
	additional users that may administer the cluster.
	
	MORE INFORMATION
	================
	
	To administer the cluster, users must have either administrative permissions on
	both nodes or specific permissions. The local Administrators group on both nodes
	has permissions to administer the cluster, by default. You may grant permissions
	to other accounts with the following procedure:
	
	1. Run Cluster Administrator.
	
	2. Right-click the cluster name. This is the top level of the resource/group
	  tree in the left portion of the Cluster Administrator window. This will be
	  the name at the top of the tree which is above the Groups folder.
	
	3. Select Properties.
	
	4. Click Permissions.
	
	5. Add or change which users or groups may administer the cluster.
	
	NOTE: You may grant or deny access to the following groups only: Local
	Administrators, Domain Users, and Global Groups. Do not attempt to grant or deny
	access to local users or local groups unless otherwise specified.
	
	Additional query words: cluster admin MSCS
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : WinNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
