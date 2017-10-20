---
layout: page
title: "Q152078: Determining the Product Option of a Windows NT Setup"
permalink: /kb/152/Q152078/
---

## Q152078: Determining the Product Option of a Windows NT Setup

{% raw %}

	Article: Q152078
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server versions 3.1, 3.5, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	In some cases you may not be able to determine which option Windows NT is
	running in through the normal UI or the NET ACCOUNTS command.
	
	Windows NT has the following possible options:
	
	Windows NT Workstation
	Windows NT Server
	Windows NT primary domain controller
	Windows NT backup domain controller
	
	Through the use of REGEDT32.EXE you can verify the role of the installed Windows
	NT.
	
	MORE INFORMATION
	================
	
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
	
	Using REGEDT32.EXE, find the following registry entry.
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\ProductOptions\ 
	  ProductType
	
	ProductType can be one of the following:
	
	WinNT = Windows NT workstation
	LanmanNT = Windows NT Server domain controller (primary or backup)
	ServerNT = Windows NT Server stand-alone
	
	
	On Special Editions of Windows NT the ProductSuite key exists and can be the
	following values:
	
	Terminal Server = Windows NT Server 4.0 Terminal Server Edition
	Enterprise = Windows NT Server 4.0 Enterprise Edition
	
	Do not change any of this information under any circumstances. Changes to these
	values may result in the failure of the Windows NT operating system.
	
	Additional query words: prodnt 3.51 3.50 4.0
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS310 kbNTTermServ400 kbNTTermServSearch kbWinNTS350search kbWinNTS310search kbWinNT310Search
	Version           : :3.1,3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
