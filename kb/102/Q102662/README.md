---
layout: page
title: "Q102662: 16-Bit Applications Often Cause Random and Diverse Messages"
permalink: /kb/102/Q102662/
---

## Q102662: 16-Bit Applications Often Cause Random and Diverse Messages

	Article: Q102662
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
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	Windows 16-bit applications sometimes display messages that indicate
	problems such as "Out of memory" or "Insufficient system resources"
	instead of the true nature of the problem: a 16-bit printer driver has
	been designated as the default printer. You may not have done this
	intentionally: some 16-bit programs, during setup, install a 16-bit
	printer driver as the default printer for the system.
	
	With a 16-bit default driver installed, Win32 API printer function
	calls start failing because of the design incompatibility of the API function and the driver. 
	These failures cause programs to display meaningless "informative" messages.
	
	To correct this problem, use the Windows NT Print Manager to install a
	different printer as the default (even if there isn't really a printer
	attached).
	
	Additional query words: prodnt popups
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 4.0
	
	=============================================================================
	
