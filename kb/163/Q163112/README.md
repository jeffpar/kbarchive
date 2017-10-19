---
layout: page
title: "Q163112: NetBIOS Scope ID All Uppercase in Windows NT 4.0"
permalink: /kb/163/Q163112/
---

## Q163112: NetBIOS Scope ID All Uppercase in Windows NT 4.0

	Article: Q163112
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry  Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	In Windows NT 4.0, a NetBIOS Scope ID can only be typed in uppercase in the
	TCP/IP Protocol Properties dialog box. This entry is therefore stored in the
	registry in uppercase. However, the Windows NT 4.0 dynamic host configuration
	protocol (DHCP) manager scope option 047 allows the NetBIOS Scope ID to be case
	sensitive. If this is not configured with all uppercase characters, clients who
	have static TCP/IP properties will not be able to communicate with DHCP clients.
	
	RESOLUTION
	==========
	
	To resolve this problem, do either of the following:
	
	- Ensure that the NetBIOS Scope ID entered in scope option 047 of the DHCP
	  manager is entered only in uppercase characters.
	
	  -or-
	
	- For computers with static entries, change characters in a NetBIOS Scope ID to
	  a mixed-case or a lowercase value by doing the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Navigate to the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\NetBT
	  \parameters\
	
	3. Change the ScopeID value to the correct mixed or lowercase value.
	
	4. Restart the computer for the change to take effect.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt lower upper case reboot re-boot boot
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
