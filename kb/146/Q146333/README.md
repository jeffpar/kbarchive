---
layout: page
title: "Q146333: How to Remove Network Adapters from the Registry"
permalink: /kb/146/Q146333/
---

## Q146333: How to Remove Network Adapters from the Registry

{% raw %}

	Article: Q146333
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Occasionally you may not be able to remove a network adapter using the remove
	button in Control Panel\Network. If this happens you can remove the registry
	keys for that adapter.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (REGEDT32.EXE).
	
	2. From the
	
	  HKEY_LOCAL_MACHINE
	
	  subtree remove the following subkeys:
	
	   - \SOFTWARE\Microsoft\<adapter>
	
	   - \SOFTWARE\Microsoft\WindowsNT\CurrentVersion\NetworkCards\<#> (If
	     only one adapter is loaded, <#> will be 1)
	
	   - \SYSTEM\CurrentControlSet\Services\<adapter>
	
	3. Quit Registry Editor and reboot.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
