---
layout: page
title: "Q164139: Pop-up Error: Cannot Complete Input Operation"
permalink: kb/164/Q164139/
---

## Q164139: Pop-up Error: Cannot Complete Input Operation

	Article: Q164139
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	Registry Key" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you copy files from a system across a slow link using the Windows NT
	Explorer or Windows NT File Manager, you may receive a pop-up message stating:
	
	  Cannot complete input operation.
	
	CAUSE
	=====
	
	This error can occur if there is a session timeout.
	
	RESOLUTION
	==========
	
	To help avoid this error, you can lengthen the time that the NetBIOS session
	allows before timing out. You can set the SESSTIMEOUT parameter in the registry
	at the following location:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topic in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	\LanmanWorkstation\Parameters
	
	NOTE: The preceding registry key address is all one line. It has been wrapped for
	readability.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q102067
	  TITLE : SESSTIMEOUT Information
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
