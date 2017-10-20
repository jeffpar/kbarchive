---
layout: page
title: "Q164025: Error Message When Installing Client Services for NetWare"
permalink: /kb/164/Q164025/
---

## Q164025: Error Message When Installing Client Services for NetWare

{% raw %}

	Article: Q164025
	Product(s): Microsoft Windows NT
	Version(s): WINNT:3.51 4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbui
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry  Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When installing Microsoft Client Services for NetWare (CSNW), the following
	error message may appear if the Novell Client32 client software has been
	previously installed and removed:
	
	  Please remove any existing Client Services for NetWare components and reboot
	  before installing the latest version of Client Services for NetWare.
	
	RESOLUTION
	==========
	
	To resolve this problem, you may need to make a change to the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor.
	
	2. Navigate to the following locations and make sure the NWCWorkstation key does
	  not exist in either place:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\NWCWorkstation
	
	  -and-
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\NWCWworkstation
	
	3. If you see the NWCWorkstation key in either of those locations, remove it.
	  After it has been removed, CSNW should install successfully. However, if the
	  error continues to occur, remove and reinstall NWLink.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbenv kbnetwork kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351
	Version           : WINNT:3.51 4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
