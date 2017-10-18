---
layout: page
title: "Q174641: Resource Parameters Tab Is Missing"
permalink: kb/174/Q174641/
---

## Q174641: Resource Parameters Tab Is Missing

	Article: Q174641
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
	
	After you successfully install Microsoft Cluster Administrator, the application
	runs, and can connect to and administer clusters.
	
	However, when accessing resources, they do not appear to have a Parameters tab.
	Also any new resources that are created have a finish button instead of a next
	button at the dependency portion of the resource wizard.
	
	CAUSE
	=====
	
	This problem is caused by a corrupt or outdated resource extension .dll in
	%systemroot%\cluster.
	
	WORKAROUND
	==========
	
	Ensure that the Cluadmex.dll and Debugex.dll files have the correct size and
	version information. If the files are corrupt, they may require replacement. You
	may also delete the %systemroot%\cluster directory and reinstall the
	application.
	
	The following information is the correct file size and version information for
	Cluadmex.dll and Debugex.dll:
	
	Cluadmex.dll:
	
	  Size: 131,344 bytes
	  Version: 1.00.224.0
	
	Debugex.dll:
	
	  Size: 57,616 bytes
	  Version: 1.0.0.1
	
	Additional query words: MSCS resource parameters
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
