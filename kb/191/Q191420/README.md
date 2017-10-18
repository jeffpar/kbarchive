---
layout: page
title: "Q191420: How to Configure IP RIP Route Filters with Service Pack 4"
permalink: kb/191/Q191420/
---

## Q191420: How to Configure IP RIP Route Filters with Service Pack 4

	Article: Q191420
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbFEA kbWinNT400sp4fea
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	Windows NT 4.0 Service Pack 4 includes two additional configuration options for
	the Routing Information Protocol (RIP) Version 1 for Internet Protocol (IP). The
	two new options let you control what routes are announced or accepted by IP RIP
	on your computer.
	
	MORE INFORMATION
	================
	
	The following registry parameters can be added to change the behavior of IP RIP
	included in Microsoft Windows NT Server version 4.0 with Service Pack 4.
	
	NOTE: These parameters are not valid for the version of IP RIP included in the
	Routing and Remote Access Service Update (RRAS). RRAS is available for download
	from the following Web site:
	
	  http://msdnisv.microsoft.com/communication/
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	To make changes using Registry Editor:
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\IpRip\Parameters
	
	  AnnounceRouteFilters
	  Data type   = REG_MULTI_SZ
	  Data        = x.x.x.x
	  Description = List of routes to filter out when announcing routes. The
	  data field represents the "Network Address" of the route.
	
	  AcceptRouteFilters
	  Data type   = REG_MULTI_SZ
	  Data        = x.x.x.x
	  Description = List of routes to filter out when accepting routes. The
	  data field represents the "Network Address" of the route.
	
	NOTE: When entering a value or values in the "Data" (Network Address) field
	above, you must take into account that IP RIP version 1 only supports the
	default classes. For example, if you wanted to filter a route table entry to the
	131.107.35.0 network, you would use a value of "131.107.0.0" in the "Data"
	field, NOT "131.107.35.0".
	
	REFERENCES
	==========
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q169161
	  TITLE : Registry Parameters for RIP for IP Version 1
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbFEA kbWinNT400sp4fea 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	
