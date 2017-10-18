---
layout: page
title: "Q177683: Print Browse List May Not Refresh Location Information"
permalink: kb/177/Q177683/
---

## Q177683: Print Browse List May Not Refresh Location Information

	Article: Q177683
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you add or change the location information for a printer share when you are
	browsing a Windows NT print server, you may not be able to see the added or
	changed information (for example, a room number).
	
	RESOLUTION
	==========
	
	To work around this problem, stop sharing the printer, and then share the
	printer again. After you restart sharing and then select the print server under
	the domain to which it belongs, the location information should be visible.
	
	NOTE: If you select the computer name of the print server directly in the browse
	window, the displayed location information remains unchanged.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 and
	4.0.
	
	
	Additional query words: prodnt browse list
	======================================================================
	Keywords          : kbnetwork kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
