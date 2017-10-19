---
layout: page
title: "Q174928: Dependencies Page Empty When Running Resource Wizard"
permalink: /kb/174/Q174928/
---

## Q174928: Dependencies Page Empty When Running Resource Wizard

	Article: Q174928
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
	
	SYMPTOMS
	========
	
	If you create a new resource within an empty group, the Resource wizard may
	present a Dependencies page that is empty.
	
	CAUSE
	=====
	
	The Cluster Administrator tool displays the current state of the cluster.
	Because there are no other resources in the group, a dependency cannot be
	created for the resource being created. Therefore, the list of possible
	resources with which to establish a dependency is blank. A group must have more
	than one resource before dependencies may be established. The appearance of the
	empty dependencies page may be confusing to some administrators.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server, Enterprise
	Edition version 4.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: cluster empty resource dependency MSCS
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
