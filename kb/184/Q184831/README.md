---
layout: page
title: "Q184831: How to Disable the &quot;Logon Using Dial-Up Networking&quot; Option"
permalink: /kb/184/Q184831/
---

## Q184831: How to Disable the &quot;Logon Using Dial-Up Networking&quot; Option

	Article: Q184831
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	IMPORTANT: This article contains information about editing the registry. Before
	you edit the registry, make sure you understand how to restore it if a problem
	occurs. For information about how to do this, view the "Restoring the Registry"
	Help topic in Regedit.exe or the "Restoring a Registry Key" Help topic in
	Regedt32.exe.
	
	This article explains how to disable the checkbox for "Logon Using Dial-Up
	Networking" at the logon prompt on your Windows NT computer. This option
	normally is available on the logon dialog box and allows you to dial into your
	logon server for authentication of your user account.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To configure this option so that it is unavailable, use the following steps to
	edit the registry:
	
	1. Start Registry Editor (Regedt32.exe), and select the following subkey:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsNT\CurrentVersion
	  \Winlogon
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. From the Edit menu, click Add Value, and type the following information:
	
	  Value Name: RASDisable
	  Data Type: REG_SZ
	  Value: 1
	
	If you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	NOTE: After you add this value, "Logon Using Dial-up Networking" will be
	permanently unavailable.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
