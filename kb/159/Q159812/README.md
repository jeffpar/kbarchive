---
layout: page
title: "Q159812: Removing Banyan Vines Client Does Not Remove Bancom Protocol"
permalink: kb/159/Q159812/
---

## Q159812: Removing Banyan Vines Client Does Not Remove Bancom Protocol

	Article: Q159812
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 31-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you remove a network adapter that was at one time bound to the Banyan Vines
	32-bit network client, you may receive the following error message the next time
	you start your computer:
	
	  Invalid Dynamic Link Call in Bancom (01) to device <number> service
	  <number>
	
	You may receive this error message even though Network properties does not list
	the Client for Banyan Networks or the Banyan Bancom 32-bit protocol.
	
	CAUSE
	=====
	
	When you remove the Banyan Vines 32-bit network client for Windows 95, the
	registry entry that loads the Bancom protocol may not be deleted.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	To resolve this issue, remove the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\VxD\Bancom
	
	MORE INFORMATION
	================
	
	Contact Banyan Systems, Inc., for additional information about this issue.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	Additional query words: 95
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	
