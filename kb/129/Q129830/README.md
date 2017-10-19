---
layout: page
title: "Q129830: How To Install Printer Drivers From A Trusted Print Server"
permalink: /kb/129/Q129830/
---

## Q129830: How To Install Printer Drivers From A Trusted Print Server

	Article: Q129830
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Windows NT allows you to install printer drivers from a trusted print server
	share, rather than from the remote print server that your print service is
	connected to.
	
	MORE INFORMATION
	================
	
	To install printer drivers from a trusted print server:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  SYSTEM\CurrentControlSet\Control\Print\Providers\LanMan Print
	  Services\Servers
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. From the Edit menu choose Add Value.
	
	4. Add the following:
	
	     Value Name:   LoadTrustedDrivers
	     Data Type:    REG_DWORD
	     Data:         1
	
	5. From the Edit menu choose Add Value.
	
	6. Add the following:
	
	     Value Name:   TrustedDriverPath
	     Data Type:    REG_SZ
	     String:       \\<server name>\<share name>
	
	Add a Unicode string representing the path from which the user can install
	printer drivers. That path represents the trusted print server shares (for
	example, \\<computer>\print$\w32x86). This is not a path, but a single
	trusted print server that has the drivers installed, not a share with the image
	of a CD-ROM.
	
	7. Quit Registry Editor.
	
	8. Stop and restart the Spooler service.
	
	Additional query words: prodnt unc
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
