---
layout: page
title: "Q191603: Modifying the Autochk.exe Time-out Value"
permalink: kb/191/Q191603/
---

## Q191603: Modifying the Autochk.exe Time-out Value

	Article: Q191603
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbFEA kbWinNT400sp4fea
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	When Windows NT Server is not shut down normally, Autochk.exe is run when
	restarting. In certain situations, it may be helpful to bypass running this
	utility. By modifying the following registry key, the amount of time Windows NT
	waits before running Autochk.exe can be changed, allowing the user time to
	bypass running it by pressing any key.
	
	MORE INFORMATION
	================
	
	To enable this feature, use Registry Editor (Regedt32.exe) to add the
	AutoChkTimeOut key:
	
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
	
	1. Start Registry Editor (Regedit32.exe) and locate the following subkey:
	
	  \HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager\
	
	2. Add the following information:
	
	  Value Name: AutoChkTimeOut
	  Data Type:  DWORD
	  Value:      The value in units of seconds (for example, a value of 60
	  equals 1 minute)
	
	The autochk.exe count down time is controlled by the following registry entry:
	
	\HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager
	\AutoChkTimeOut
	
	If the entry is not found, the default count down of 10 seconds will be used. If
	it is set to 0 second, there will not be any count down. If it is set to more
	than 3 days (259,200 seconds), the default value will be used.
	
	======================================================================
	Keywords          : kbFEA kbWinNT400sp4fea 
	Technology        : kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
