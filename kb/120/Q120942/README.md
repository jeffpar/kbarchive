---
layout: page
title: "Q120942: Command Line Does Not Update Print Manager"
permalink: kb/120/Q120942/
---

## Q120942: Command Line Does Not Update Print Manager

	Article: Q120942
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you delete a printer share name from the command line, the Printers folder
	(in Windows NT 4.0) or the Print Manager properties (in Windows NT 3.5x) for
	that printer are not updated. Instead, the properties for that printer
	erroneously show the printer as still being shared.
	
	For example, to delete a share name, use the following command:
	
	  net share <printer share name> /delete
	
	The share still appears to be in the Printer properties Sharing tab (in version
	4.0) or the Printer Properties section of Print Manager (in version 3.5x).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5, 3.51,
	and 4.0. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	After the share is deleted, you will be unable to connect to the printer with
	the NET USE command. You will, however, be able to connect to the printer from a
	Windows NT client using the Add printer Wizard (in version 4.0) or by using
	Print Manager (in version 3.5x).
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
