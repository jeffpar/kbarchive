---
layout: page
title: "Q114018: Printing from an OS/2 Workstation to a WINNT Shared Printer"
permalink: kb/114/Q114018/
---

## Q114018: Printing from an OS/2 Workstation to a WINNT Shared Printer

	Article: Q114018
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To print to a Microsoft Windows NT shared printer from a Microsoft OS/2 version
	1.3 workstation, you must set up a printer in the OS/2 Print Manager with the
	device pointing to the LPT port to which you have redirected your shared
	printer.
	
	MORE INFORMATION
	================
	
	If you try to print from an OS/2 program, such as File Manager, to a printer
	shared from a Windows NT machine, you get an error such as:
	
	  Cannot print. Make sure that the default printer is installed and connected
	  properly. Then try again (PMV1051).
	
	In OS/2 Print Manager, set up a printer that points to the device you have
	redirected your print jobs to, and is selected as the default printer for
	Presentation Manager applications.
	
	Procedure:
	
	1. Net Use LPT2: \\Server\Printer1
	
	2. In OS/2 Print Manager, choose Setup/Printer/Add.
	
	3. Setup Printer with Device=LPT2, choose the IBMNULL driver.
	
	4. DO NOT set up a queue for this printer.
	
	5. In OS/2 Print Manager, choose Setup/Application Defaults.
	
	6. Select 'Printer1' as the default printer for Presentation Manager
	  applications.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	
