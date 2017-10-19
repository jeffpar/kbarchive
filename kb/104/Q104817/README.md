---
layout: page
title: "Q104817: Print Jobs Stay in Queue After Printing"
permalink: /kb/104/Q104817/
---

## Q104817: Print Jobs Stay in Queue After Printing

	Article: Q104817
	Product(s): Microsoft Windows NT
	Version(s): 3.1 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to a Windows NT server with queue attached to a Hewlett-Packard
	(HP) JetDirect card, print jobs may not be removed from the print queue. The
	print job is sent to the print server, it prints, but the print job is not
	removed from the queue.
	
	CAUSE
	=====
	
	This behavior happens when Advanced Job Status is chosen in Print Manager. This
	option should be turned off in most printers. To check the setting of Advanced
	Job Status, do the following:
	
	1. In the Print Manager window, choose Printer from the File menu.
	
	2. Choose Properties.
	
	3. From the Print To menu, choose Network Printer.
	
	4. Select Hewlett-Packard Network Port, and then choose the Port option.
	
	When the Advanced Job Status is chosen the job will not be removed from the print
	queue unless the printer supports bidirectional communication. The queue is
	waiting for confirmation from the printer that the job is complete. Most
	printers do not have the ability to send the confirmation.
	
	MORE INFORMATION
	================
	
	The HP LaserJet 4 supports bidirectional communication. A LaserJet with the
	Windows Printing System also supports bidirectional communication, but the
	Windows Printing System is not supported under Windows NT 3.1.
	
	
	Additional query words: prodnt wps stuck flush piled iiisi 3si lj 5si
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 4.0
	
	=============================================================================
	
