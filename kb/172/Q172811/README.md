---
layout: page
title: "Q172811: Network Printers Always Offline"
permalink: kb/172/Q172811/
---

## Q172811: Network Printers Always Offline

	Article: Q172811
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbnetwork kbprint win95
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry. Before you edit the registry, you should first make a backup copy of the registry files (System.dat and User.dat). Both are hidden files in the Windows folder.
	
	SYMPTOMS
	========
	
	Network Printers appear offline and you may be unable to set them to online
	status.
	
	CAUSE
	=====
	
	This behavior can occur if PC/TCP Interdrive by FTP Software is installed.
	
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
	
	To identify the print providers that have been installed, check the following
	registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\control\Print\Providers
	
	You may see any of the following values listed:
	
	- Microsoft Networks Print Provider
	
	- NetWare Networks Print Provider
	
	- Interdrive 95 Print Provider
	
	If the Interdrive print provider is listed, remove the registry key.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	
	Additional query words: Novell
	
	======================================================================
	Keywords          : kbnetwork kbprint win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :95
	
	=============================================================================
	
