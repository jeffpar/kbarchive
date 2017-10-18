---
layout: page
title: "Q110062: Print Manager Shows Hidden Printer Shares"
permalink: kb/110/Q110062/
---

## Q110062: Print Manager Shows Hidden Printer Shares

	Article: Q110062
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	When you access the Browse list for printer shares from Print Manager,
	hidden printer shares are also listed.
	
	MORE INFORMATION
	================
	
	To create a hidden share, add "$" to the end of the share name. For example,
	"admin$" is a hidden share and "admin" is not.
	
	This behavior occurs only with printer shares, and if you use the Net View
	command on a server, the hidden printer shares are not listed.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a printer share with "$" at the end of share name. For example:
	
	  Print1$
	
	2. From another Windows NT machine, open Print Manager.
	
	3. From the Printer menu, choose Connect To Printer.
	
	4. From the Browse list, select your Domain.
	
	5. Double-click the machine with the hidden shares.
	
	The Browse list shows the hidden printer shares.
	
	However, you can hide the whole NT Server from the browse list by using: Net
	Config Server /Hidden: Yes
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	Issue type        : kbbug
	
	=============================================================================
	
