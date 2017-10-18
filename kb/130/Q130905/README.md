---
layout: page
title: "Q130905: Printing From Japanese Windows NT to a U.S. Windows NT Printer"
permalink: kb/130/Q130905/
---

## Q130905: Printing From Japanese Windows NT to a U.S. Windows NT Printer

	Article: Q130905
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5 
	- Microsoft Windows NT Workstation versions 3.1, 3.5 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to print from a localized Japanese version of Windows
	NT to a shared printer on a U.S. version of Windows NT.
	
	MORE INFORMATION
	================
	
	To print from a localized Japanese version of Windows NT to a shared printer on
	a U.S. version of Windows NT, you must do the following on the localized
	Japanese version of Windows NT:
	
	1. Run Print Manager and choose Create Printer from the Printer menu.
	
	2. Install the printer driver for the shared printer that is on the computer
	  with the U.S. version of Windows NT.
	
	3. For Print To, select Other.
	
	4. For Print Destination, select Local Port.
	
	5. Enter a port name in Universal Naming Convention (UNC) format. For example,
	  \\<computer name>\<printer name>.
	
	Additional query words: 3.10 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5
	Issue type        : kbinfo
	
	=============================================================================
	
