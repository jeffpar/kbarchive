---
layout: page
title: "Q142543: Windows 95 Hangs with TCP/IP Routing Enabled"
permalink: kb/142/Q142543/
---

## Q142543: Windows 95 Hangs with TCP/IP Routing Enabled

	Article: Q142543
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you start your computer, you may receive the following error message:
	
	  Windows protection error. You need to restart your computer.
	
	CAUSE
	=====
	
	This error can occur if IP routing is enabled. IP routing is not a supported
	feature of Windows 95.
	
	
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
	
	Use Registry Editor to remove the EnableRouting value from the following registry
	key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\VxD\MSTCP
	
	Also, remove the "EnableRouting=1" entry if it is present in the [MSTCP] section
	of the System.ini file.
	
	
	MORE INFORMATION
	================
	
	This problem is likely to occur if you upgraded a Microsoft Windows for
	Workgroups-based computer using the Microsoft TCP/IP-32 protocol with IP routing
	enabled to Windows 95. In this situation, the "EnableRouting=1" entry is present
	in the System.ini file and is copied to the registry during the upgrade
	process.
	
	IP routing is not enabled by default in Windows 95, and can be enabled only by
	adding the unsupported EnableRouting value to the registry.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
