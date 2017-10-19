---
layout: page
title: "Q241796: Local Groups and Microsoft Cluster Server"
permalink: /kb/241/Q241796/
---

## Q241796: Local Groups and Microsoft Cluster Server

	Article: Q241796
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use local groups to assign resource permissions in Microsoft Windows
	NT-based domains. This strategy does not work well with Cluster Server because
	resources may fail over but local groups may not. The Cluster Administrator
	tool, by design, prevents you from assigning local groups in most cases, and
	displays the following error message when you attempt to do so:
	
	  Cluster Administrator Standard Extension
	  Access to a cluster file share can be granted/denied only to domain users and
	  groups. Please remove any local users or groups from the permissions dialog
	  box.
	
	After you receive this error message, you must remove the permission line that
	caused the error message before you can continue.
	
	MORE INFORMATION
	================
	
	Keep the following items in mind when you are implementing Cluster Server:
	
	- Avoid installing Cluster Server on domain controllers if performance is an
	  issue.
	
	- Do not attempt to use local groups to assign permissions, even though the
	  local groups are shared between domain controllers.
	
	- Use global groups only, and only from the master domain in a multiple-domain
	  scenario.
	
	In Microsoft Windows 2000, you can use domain local groups on member servers. If
	both nodes of the cluster are members of the same domain, you can use domain
	local groups to grant access to cluster resources.
	
	
	Additional query words: mscs
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbwin2000Search kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
