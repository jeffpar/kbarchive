---
layout: page
title: "Q127161: Unable to Connect to Apple Printer Shares"
permalink: kb/127/Q127161/
---

## Q127161: Unable to Connect to Apple Printer Shares

	Article: Q127161
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you browse the Windows NT Network Printers in Print Manager, all printer
	shares including the Apple printer shares appear. If you attempt to connect to
	an Apple printer share, the following error message appears:
	
	  Could not connect to printer. The printer name is invalid.
	
	CAUSE
	=====
	
	This problem occurs if the Apple printer name has a backslash in it, such as
	"Apple LaserWriter 16\600 PS" (without quotes). The Registry creates an
	additional subkey after the backslash, instead of the regular key name.
	Therefore, since the print monitor does not initialize, the spooler does not
	create any of the Macintosh ports.
	
	
	WORKAROUND
	==========
	
	To correct this problem:
	
	1. Remove the printer and port from the print server using Print Manager.
	
	2. Recreate the printer and rename it without a backslash.
	
	Additional query words: prodnt sfm mac
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
