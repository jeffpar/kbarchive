---
layout: page
title: "Q171265: Unable to Uninstall Cluster Administrator Tool"
permalink: /kb/171/Q171265/
---

## Q171265: Unable to Uninstall Cluster Administrator Tool

	Article: Q171265
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
	
	SYMPTOMS
	========
	
	If you install only the Cluster Administrator tool for Microsoft Cluster Server
	(MSCS) version 1.0 on a non-clustered computer, there is no option to uninstall
	the Cluster Administrator application.
	
	CAUSE
	=====
	
	The Cluster Administrator application is an addition to the existing tool set
	for administrators as located in the Administrative Tools (Common) group. You
	may use this application for remote administration of Microsoft Clusters. The
	setup program for MSCS provides the ability to uninstall the Cluster Server
	portion of the product only. This is by design.
	
	RESOLUTION
	==========
	
	If you want to remove the Cluster Administrator application from the common
	Administrative Tools group, you may do the following:
	
	NOTE: Do not use this procedure on a server that participates in a cluster. This
	procedure is for removing the Cluster Administrator application from a system in
	which only the application was installed.
	
	1. Click Start and then click Settings.
	
	2. Click Taskbar.
	
	3. Click the Start Menu Programs tab.
	
	4. Click Advanced.
	
	5. In the Explorer window, locate the following directory:
	
	  Profiles\All Users\Start Menu\Programs
	
	6. Select Administrative Tools (Common).
	
	7. To the right, observe the items that belong to the Administrative Tools
	  (Common) group. Select Cluster Administrator and press the DELETE key.
	
	8. Locate and remove the %SystemRoot%\Cluster directory. The cluster directory
	  will be located under the directory where Windows NT was installed, unless
	  you chose a different installation path with the MSCS setup program.
	
	9. Close the Explorer window.
	
	10. Click OK to close the Taskbar Properties window.
	
	Additional query words: MSCS
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
