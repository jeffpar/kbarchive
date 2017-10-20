---
layout: page
title: "Q197099: Determining Which Service Pack Is Installed in Windows NT 4.0"
permalink: /kb/197/Q197099/
---

## Q197099: Determining Which Service Pack Is Installed in Windows NT 4.0

{% raw %}

	Article: Q197099
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	This article describes how to determine which (if any) Service Pack is installed
	on your Windows NT 4.0-based computer.
	
	MORE INFORMATION
	================
	
	To determine which (if any) Service Pack is installed on your Windows NT
	4.0-based computer, use any of the following methods:
	
	Method 1
	--------
	
	When you first start your computer, the Windows NT version, build number, and
	installed Service Pack version is displayed on a blue screen after the Startup
	menu is displayed.
	
	Method 2
	--------
	
	Click Start, point to Settings, and then click Control Panel. In Control Panel,
	click About Windows NT on the Help menu.
	
	Method 3
	--------
	
	Click Start, click Run, type "winver" (without quotation marks) in the Open box,
	and then click OK.
	
	Method 4
	--------
	
	Use the Windows NT Diagnostics tool. To run this tool, click Start, point to
	Programs, point to Administrative Tools (Common), and then click Windows NT
	Diagnostics. The Service Pack information is located on the Version tab.
	
	Method 5
	--------
	
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
	
	Use Registry Editor to check the CSDVersion value in the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
