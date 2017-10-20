---
layout: page
title: "Q125663: Setting Print Spooler Priority"
permalink: /kb/125/Q125663/
---

## Q125663: Setting Print Spooler Priority

{% raw %}

	Article: Q125663
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	Windows NT 3.5 provides the ability to reduce the priority of the Print
	Spooler so other processes with higher priorities are able to execute
	first.
	
	Use the following procedure to change the default priority value of the
	Windows NT Print Spooler.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them.
	Microsoft cannot guarantee that any problems resulting from the use of
	Registry Editor can be solved. Use this tool at your own risk.
	
	1. Run Registry Editor.
	
	2. Select the following key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print
	
	3. Select the PriorityClass value.
	
	4. From the Edit menu, choose DWord.
	
	5. Enter a value from 0 to 9.
	
	To set the default priority value, enter 0 (zero). The default priority is
	7 on Windows NT Workstation and 9 on Windows NT Server.
	
	A value from 1 to 9 represents the priority of the spooler, with 9 being
	the highest priority.
	
	Additional query words: prodnt print manager spoolss winnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
