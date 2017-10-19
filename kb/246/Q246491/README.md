---
layout: page
title: "Q246491: 'No Access' When Printing to LPT1 or LPT2 Port on HP4000 Printer"
permalink: /kb/246/Q246491/
---

## Q246491: 'No Access' When Printing to LPT1 or LPT2 Port on HP4000 Printer

	Article: Q246491
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you try to print to a Hewlett-Packard (HP) 4000 printer through the LPT1 or
	LPT2 port on a computer running Microsoft Windows NT Workstation 4.0 Service
	Pack 3 or Microsoft Windows NT Server 4.0, the print job may not be printed and
	you may receive the following error message:
	
	  Access is denied printing to <port>...
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	To resolve this behavior, delete the HP print monitor information values from the
	registry:
	
	1. Using the Services tool in Control Panel, stop the Spooler service.
	
	2. Start Registry Editor (Regedt32.exe), and then locate the following registry
	  key:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\Monitors
	
	3. Delete the HP Jet Admin value and the HP Language Monitor value.
	
	4. Restart the computer.
	
	  NOTE: The Spooler service starts automatically when you restart the computer.
	
	Additional query words: nt 4.0 print hewlett
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
