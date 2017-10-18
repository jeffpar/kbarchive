---
layout: page
title: "Q103361: 16-Bit Windows-Based Applications May Hang w/Network Printer"
permalink: kb/103/Q103361/
---

## Q103361: 16-Bit Windows-Based Applications May Hang w/Network Printer

	Article: Q103361
	Product(s): Microsoft Windows NT
	Version(s): 3.1 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	In Windows NT, if you lose your connection to a network printer and it
	is set as the default printer, 16-bit Windows-based applications may
	load significantly slower than usual or appear to hang completely.
	
	When 16-bit Windows-based applications, such as Write, attempt to
	load, they may search for a printer. If the printer is a network
	printer and the connection has been broken, the application may load
	very slowly or appear to hang.
	
	
	WORKAROUND
	==========
	
	To work around this problem, install a local printer and set it as the default,
	reestablish the network connection, or remove the network connection entirely.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In Print Manager, connect to a network printer and set it as your default
	  printer.
	
	2. Close Print Manager and return to Program Manager.
	
	3. Open Write from the Accessories group twice.
	
	  NOTE: The reason for doing this twice is that if no other 16-bit Windows-based
	  applications have been loaded, the first launch of Write will take longer
	  because it has to load the 16-bit Windows Subsystem.
	
	4. Notice the time Write takes to load.
	
	5. Close all instances of Write.
	
	6. Unplug the network cable from the network card.
	
	  NOTE: Consult with your Network Administrator before removing any network
	  hardware.
	
	7. Restart Write and notice the extra time it takes to load.
	
	Additional query words: prodnt wow
	
	======================================================================
	Keywords          : kbnetwork kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 4.0
	
	=============================================================================
	
