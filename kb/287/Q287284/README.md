---
layout: page
title: "Q287284: LPR Printer Ports Disappear when Spooler Stops and Restarts"
permalink: /kb/287/Q287284/
---

## Q287284: LPR Printer Ports Disappear when Spooler Stops and Restarts

{% raw %}

	Article: Q287284
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you stop and restart the Spooler service, and you then try to print a file,
	you may receive the following error message:
	
	  Test page fail to print the handle is invalid
	
	CAUSE
	=====
	
	This behavior can occur because some printer ports disappear after you stop and
	then restart the Spooler service.
	
	RESOLUTION
	==========
	
	To resolve the behavior, remove from the registry any LPR port names that have
	invalid characters:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32).
	
	2. Locate and click the following entry in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\Monitors\LPR
	  Port\Ports\
	
	3. Delete any of the keys that contain LPR port names that include invalid
	  characters.
	
	4. Restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
