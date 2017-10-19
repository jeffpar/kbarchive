---
layout: page
title: "Q142297: NetWare Printer Offline Using Microsoft Service for NDS"
permalink: /kb/142/Q142297/
---

## Q142297: NetWare Printer Offline Using Microsoft Service for NDS

	Article: Q142297
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	Your NetWare network printer may be offline, or you may receive the following
	error message:
	
	  Cannot connect to network printer. Make sure your network is working properly
	  and the network share you are connecting to exists.
	
	CAUSE
	=====
	
	This behavior can occur if the registry entry for the Microsoft Print Provider
	for NetWare is set incorrectly.
	
	RESOLUTION
	==========
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	Use Registry Editor to check the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\Providers\ 
	  Microsoft Print Provider for NetWare
	
	If you have installed the Microsoft Client for NetWare Networks without the
	Microsoft Service for NetWare Directory Services (MSNDS), the Name string value
	should be set to:
	
	  Nwpp32.dll
	
	If you are using the Microsoft Client for NetWare networks with MSNDS, the Name
	string value should be set to:
	
	  Ndspp.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: msnds
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
