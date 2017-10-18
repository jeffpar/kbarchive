---
layout: page
title: "Q165042: Regdel.exe Cannot Delete Values, Can Only Delete Keys"
permalink: kb/165/Q165042/
---

## Q165042: Regdel.exe Cannot Delete Values, Can Only Delete Keys

	Article: Q165042
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0; :
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- MSPRESS Microsoft Windows NT Resource Kit 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Regdel.exe does not appear to work and will not return any error codes.
	
	CAUSE
	=====
	
	Regdel.exe is a resource kit utility that can be used to delete keys from the
	local registry or from a remote registry. Regdel.exe cannot be used to delete
	values, only keys.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Regdel will only delete registry entries under HKEY_LOCAL_MACHINE, and will
	default to this registry key.
	
	For example: to delete all the keys and their associated values underneath
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Test, type:
	
	  regdel "software\microsoft\test"
	
	Regdel.exe is not case sensitive.
	
	MORE INFORMATION
	================
	
	Note that Regdel.exe has been replaced in Windows NT 4.0 Resource Kit Supplement
	4 with the Registry Management utility (Reg.exe). Reg.exe performs the
	functionality of and replaces the following tools from previous Resource Kits:
	Regchg.exe, Regdel.exe, Regdir.exe, Regread.exe, Regsec.exe, Restkey.exe,
	Rregchg.exe, and Savekey.exe.
	
	For additional information about obtaining Reg.exe, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q180286 Reg.exe DELETE and UPDATE Functions Do Not Work as Expected
	
	Additional query words: 3.50 3.51 4.0 doesn't
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2
	Version           : winnt:4.0; :
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
