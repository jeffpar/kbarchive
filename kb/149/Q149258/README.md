---
layout: page
title: "Q149258: Windows 95 Uninstall Does Not Restore Dual-Boot Manager"
permalink: /kb/149/Q149258/
---

## Q149258: Windows 95 Uninstall Does Not Restore Dual-Boot Manager

{% raw %}

	Article: Q149258
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.5 3.51 4.0 95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg win95
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you remove (or uninstall) Windows 95 on a computer that dual-boots with
	Windows NT, you may receive the following error message when you restart the
	computer:
	
	  OS Loader V3.5 (or "OS Loader V4.0")
	
	  Windows NT could not start because the following file is missing or corrupt:
	
	  <Windows NT folder>\System32\Ntoskrnl.exe
	
	  Please reinstall a copy of the above file.
	
	CAUSE
	=====
	
	This behavior can occur if you installed Windows NT after Windows 95. The system
	configuration and boot partition are both changed when Windows NT is installed.
	In this case, these changes take place after Windows 95 has saved the uninstall
	information, and the Windows NT-specific changes are not restored.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	- Run the Windows NT Repair Disk.
	
	- Reinstall Windows NT.
	
	Additional query words: winnt
	
	======================================================================
	Keywords          : kbenv kberrmsg win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : 3.5 3.51 4.0 95
	
	=============================================================================
	

{% endraw %}
