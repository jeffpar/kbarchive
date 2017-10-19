---
layout: page
title: "Q227908: Domain-Level Printer List Is Not Refreshed"
permalink: /kb/227/Q227908/
---

## Q227908: Domain-Level Printer List Is Not Refreshed

	Article: Q227908
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbprint
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you use the Add Printer Wizard to add a printer, networked printers are
	listed at both the domain level and the server level. The list of printers at
	the domain level may not be correctly refreshed as printers on a server are
	removed, and the printers remain in the list. Printers at the server level are
	appropriately refreshed and removed from the list.
	
	Also, no domain-level printers may be listed, even when there are networked
	printers at the server level in the printer browse list.
	
	CAUSE
	=====
	
	When a printer is shared, the share name is announced to approximately three
	servers in that domain. Then, the selection algorithm is re-announced every 10
	minutes. Names are also re-announced when new shares are created on the server.
	The Spooler service listens to these announcements, adds the printer(s) to its
	list of printers, and records a time stamp. The time stamp is refreshed every 10
	minutes. If a printer is not refreshed in 70 minutes, it is removed from the
	list.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The "NetPrinterDecayPeriod" registry value specifies how long to cache a
	networked printer. The cache is used to present the list of printers when the
	browse list is used. The time-out value can be changed in the registry. This
	setting needs to be made on the print server.
	
	The following registry entries manipulate client and server behavior in regard to
	print browsing:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print
	
	DisableServerThread REG_DWORD
	Range: 0 or 1
	Default: 0 (false)
	Set this to 1 (true) to disable the browse thread on the current computer. This
	thread is used to call other print servers to notify them that this printer
	exists.
	
	ServerThreadTimeout REG_DWORD
	Range: Milliseconds
	Default: 36,000 (36 seconds)
	Specifies the amount of time the ServerThread sleeps before it calls all the
	other print servers to notify them of the printers on this computer.
	
	NetPrinterDecayPeriod REG_DWORD
	Range: Milliseconds
	Default: 3,600,000 (1 hour)
	Specifies how long to cache a network printer. The cache is used to present the
	list of printers when the browse list is used.
	
	RefreshTimesPerDecayPeriod REG_DWORD
	Range: 1 - 5
	Default: 2
	Specifies how many times to inform the browse masters and backup servers per
	decay period. The default value is two times per hour. Do not set a zero value
	if you specify both RefreshTimesPerDecayPeriod and ServerThreadTimeout; the
	system will wait for the maximum of either the ServerThreadTimeout or the
	RefreshTimesPerDecayPeriod.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about printer browsing and printer browsing registry
	entries, please see the following article in the Microsoft Knowledge Base:
	
	  Q161734 Windows NT Print Browsing Architecture
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork kbprint 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	
