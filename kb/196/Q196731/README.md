---
layout: page
title: "Q196731: Application That Requires Schedule Service Fails"
permalink: /kb/196/Q196731/
---

## Q196731: Application That Requires Schedule Service Fails

	Article: Q196731
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Programs that require the use of the Schedule service (Atsvc.exe) provided with
	Windows NT may fail when you run them on a Windows NT system for which you have
	also installed Task Scheduler (a Microsoft Internet Explorer 4.0 optional
	component). You will see inconsistent results when attempting to start a program
	using the AT commands. An example of such a program is Soon.exe from the Windows
	NT Resource Kit.
	
	CAUSE
	=====
	
	When you install Task Scheduler on Windows NT, it replaces the Schedule service.
	The Schedule service no longer shows up in the Services utility in Control
	Panel.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	- Use a different program that is compatible with the Internet Explorer 4.0
	  Task Scheduler.
	
	  -or-
	
	- Remove Task Scheduler by using the Add/Remove Programs tool in Control Panel
	  by selecting "Task Scheduler v1.0 (remove only)" from the Install/Uninstall
	  tab and clicking Add/Remove.
	  NOTE: The Add\Remove tool may not show the Task Scheduler v1.0 service.
	
	MORE INFORMATION
	================
	
	If the Microsoft Task Scheduler is not automatically removed, the services
	portion of the registry can be manually modified as indicated below.
	
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
	
	1. Start Registry Editor.
	
	2. Change the registry entries for Internet Explorer 4.0 Task Scheduler
	  service:
	
	     Key Name:
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Schedule
	
	     Value Names:
	     DependOnGroup: REG_MULTI_SZ
	     DependOnService: REG_MULTI_SZ: RpcSs
	     DisplayName: REG_SZ: Task Scheduler
	     ErrorControl: REG_DWORD: 0x1
	     Group: REG_SZ:
	     ImagePath: REG_EXPAND_SZ: C:\WINNT\System32\MSTask.exe
	     ObjectName: REG_SZ: LocalSystem
	     Start: REG_DWORD: 0x3
	     Type: REG_DWORD: 0x120
	
	  to the following registry entries for Windows NT AT Schedule Service
	
	     Key Name:
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Schedule
	
	     Value Names:
	     ErrorControl:REG_DWORD: 0x1
	     ImagePath: REG_EXPAND_SZ: %SystemRoot%\System32\AtSvc.Exe
	     ObjectName: REG_SZ: LocalSystem
	     Start: REG_DWORD: 0x2
	     Type: REG_DWORD: 0x10
	
	Additional query words: winat schedule at scheduler that no longer functions task replaced
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
