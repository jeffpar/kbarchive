---
layout: page
title: "Q174829: Restoring the Security Menu in Explorer"
permalink: kb/174/Q174829/
---

## Q174829: Restoring the Security Menu in Explorer

	Article: Q174829
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you right-click a folder on an NTFS drive and then click Properties, one or
	more tabs may not be present (for example, the Security tab).
	
	CAUSE
	=====
	
	Some third-party programs modify the OLE automation information in the registry
	so that they can add or remove items in Windows NT Explorer context menus (for
	example, the Security tab). If the removal of the application does not properly
	replace the original information, normal functions within Windows NT Explorer
	may not be available.
	
	RESOLUTION
	==========
	
	You may be able to resolve this problem by restoring the registry. For
	information about how to do this, view the "Restoring the Registry" Help topic
	in Regedit.exe or the "Restoring a Registry Key" Help topic in Regedt32.exe.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
