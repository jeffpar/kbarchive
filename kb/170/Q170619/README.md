---
layout: page
title: "Q170619: Windows 95 ServiceProvider Priority Values Not Applied"
permalink: kb/170/Q170619/
---

## Q170619: Windows 95 ServiceProvider Priority Values Not Applied

	Article: Q170619
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): kbnetwork osr1 osr2 win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you configure the ServiceProvider Priority values in the registry to modify
	the DNS search order, the search order may not seem to be changed.
	
	CAUSE
	=====
	
	A ServiceProvider registry key exists (with associated registry values) at the
	following registry location:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\VxD\MSTCP\ 
	  ServiceProvider
	
	However, the Winsock code incorrectly references the ServiceProvider registry key
	at the following location:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSTCP\ 
	  ServiceProvider
	
	RESOLUTION
	==========
	
	To workaround this issue, use the following steps: WARNING: Using Registry
	Editor incorrectly can cause serious problems that may require you to reinstall
	Windows 95. Microsoft cannot guarantee that problems resulting from the
	incorrect use of Registry Editor can be solved. Use Registry Editor at your own
	risk.
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	Create the registry key being referenced by Winsock. To do so, use the following
	steps:
	
	1. Use Regedit.exe to open the following location:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	
	2. On the Edit menu, point to New, and then click Key. Name the new key MSTCP.
	
	3. Click the new MSTCP key, point to New on the Edit menu, and then click Key.
	  Name the new key ServiceProvider. The registry path should look like this:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSTCP\ 
	     ServiceProvider
	
	4. Click the new ServiceProvider key, point to New on the Edit menu, and then
	  click Binary Value. Create the following new binary values:
	
	   - DnsPriority
	   - LocalPriority
	   - HostsPriority
	   - NetbtPriority.
	
	5. Set the priority values as appropriate.
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	For additional information, see the following articles in the Microsoft
	Knowledge Base:
	
	  Q158474 Windows TCP/IP Registry Entries
	
	  Q139270 How to Change Name Resolution Order on Windows 95 and Windows NT
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork osr1 osr2 win95 kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	Issue type        : kbprb
	
	=============================================================================
	
