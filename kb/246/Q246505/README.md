---
layout: page
title: "Q246505: PRB: Error Granting Permissions to a Domain Account on a Cluster"
permalink: kb/246/Q246505/
---

## Q246505: PRB: Error Granting Permissions to a Domain Account on a Cluster

	Article: Q246505
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbClustServSearch kbClustServ100 kbClustServ110 kbDSupport
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server, version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to grant a domain account permissions to a cluster by using the
	Cluster Administrator may return a dialog box with the following message:
	
	  The SYSTEM account must always have access to the Cluster. Please use the
	  permissions dialog box to add the SYSTEM account.
	
	CAUSE
	=====
	
	The SYSTEM account is a special account used by the operating system. If this
	account does not exist, no other users can be granted access.
	
	RESOLUTION
	==========
	
	Add the SYSTEM account to the Permissions window. This action allows you to
	grant other users access to the cluster.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior:
	
	1. On one of the cluster nodes, open Cluster Administrator and open a connection
	  to the local cluster.
	
	2. Right-click the cluster at the root of the tree-view in the left pane to
	  display the properties dialog box.
	
	3. Click Permissions on the General tab.
	
	4. Remove the SYSTEM account from the list.
	
	5. Add a domain account that is not a member of the local Administrators group.
	
	6. Click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbClustServSearch kbClustServ100 kbClustServ110 kbDSupport 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch kbClustServ110
	Version           : winnt:1.0,1.1
	Issue type        : kbprb
	
	=============================================================================
	
