---
layout: page
title: "Q125477: Windows NT Workstation Broadcasts to LAN Manager 2.x Clients"
permalink: /kb/125/Q125477/
---

## Q125477: Windows NT Workstation Broadcasts to LAN Manager 2.x Clients

{% raw %}

	Article: Q125477
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	-------------------------------------------------------------------------------
	
	You do not have the option in Windows NT Workstation to configure the
	Server service in Network section of Control Panel. Therefore, you cannot
	use Control Panel Network to select "Make Browser Broadcasts to LAN Manager
	2.x Clients."
	
	If you need your Windows NT Workstation's computer name to show up in
	LAN Manager 2.x client browse lists, modify the Lmannounce value in the
	Registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them.
	Microsoft cannot guarantee that any problems resulting from the use of
	Registry Editor can be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters\Lmannounce
	
	3. Select Lmannounce.
	
	4. The default Lmannounce value is 0. Change it to 1 to enable browser
	  broadcasts to LAN Manager 2.x clients.
	
	5. Shutdown and restart Windows NT.
	
	It may take 15 minutes or more (depending on the size and complexity of
	your network) before all LAN Manager clients see the Windows NT workstation
	in their browse lists.
	
	Additional query words: prodnt 2.2 2.1
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search
	
	=============================================================================
	

{% endraw %}
