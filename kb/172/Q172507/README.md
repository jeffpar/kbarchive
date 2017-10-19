---
layout: page
title: "Q172507: Resources go Offline and Online Repeatedly in Cluster Admin."
permalink: /kb/172/Q172507/
---

## Q172507: Resources go Offline and Online Repeatedly in Cluster Admin.

	Article: Q172507
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
	
	If you attempt to bring a resource online within Microsoft Cluster Server, the
	resource may alternate between an online and offline state.
	
	CAUSE
	=====
	
	The resource may change states repeatedly if the properties for the resource are
	invalid. Invalid resource properties may cause resource failure. Microsoft
	Cluster Server will attempt to resolve the situation according to failover
	parameters for the resource. By default, the cluster will attempt to restart the
	failed resource.
	
	
	RESOLUTION
	==========
	
	To correct this problem, verify the properties of the resource and change
	incorrect settings as necessary.
	
	Additional query words: MSCS
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
