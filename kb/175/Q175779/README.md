---
layout: page
title: "Q175779: Microsoft Cluster Server Requires Service Pack 3 or Later."
permalink: kb/175/Q175779/
---

## Q175779: Microsoft Cluster Server Requires Service Pack 3 or Later.

	Article: Q175779
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
	
	Microsoft Cluster Server (MSCS) requires Microsoft Windows NT Server, Enterprise
	Edition version 4.0 with at least Service Pack 3. If you remove the service pack
	or install an earlier version, the following error may appear in the system
	event log:
	
	  Event:       1012
	  Source:      ClusSvc
	  Description: Microsoft Cluster Server did not start because the current
	               version of Windows NT is not correct.  Microsoft Cluster
	               Server runs only on Windows NT Server, Enterprise Edition.
	
	If you attempt to install MSCS on a server that does not run the Enterprise
	Edition of Windows NT and/or does not have at least Service Pack 3, the
	following message may be displayed:
	
	  Microsoft Cluster Server runs on either Windows NT 5.0 or on Windows NT
	  4.0 with Service Pack 3 or higher. Please install the correct version or
	  service pack and run setup again.
	
	CAUSE
	=====
	
	The Enterprise Edition of Microsoft Windows NT requires that Service Pack 3 or
	later be installed on the server. MSCS has the same service pack requirement as
	Enterprise Edition.
	
	This error may be caused by performing an in-place upgrade of the existing
	Windows NT installation with the same version of Windows NT without reapplying
	the service pack.
	
	RESOLUTION
	==========
	
	To resolve either of these situations, make sure the server runs the Enterprise
	Edition of Windows NT Server with Service Pack 3 or later.
	
	Additional query words: cluster mscs enterprise sp3
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
