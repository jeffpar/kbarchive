---
layout: page
title: "Q160036: %OS_VERSION in NetWare Logon Script Returns Incorrect Version"
permalink: /kb/160/Q160036/
---

## Q160036: %OS_VERSION in NetWare Logon Script Returns Incorrect Version

	Article: Q160036
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
	
	When you are running Microsoft Windows 95 OEM Service Release version 2 or 2.1
	and you are using either the Windows 95 Client for NetWare Networks or the
	Novell 32-bit client for Windows 95, the %OS_VERSION variable returns "V7.00"
	rather than the value "V7.10" as you expect.
	
	CAUSE
	=====
	
	Nwredir.vxd returns an incorrect version.
	
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
	
	You can resolve this issue by adding the version information for Nwredir.vxd to
	the registry. Use Registry Editor to add a ShellVersion binary value to the
	following registry key:
	
	  HKLM\System\CurrentControlSet\Services\VxD\NWREDIR
	
	Add the following value to the new value:
	
	  4d 53 44 4f 53 00 56 37 2e 31 30 00 49 42 4d 5f 50 43 00 49 42 4d 00
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 95
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	
