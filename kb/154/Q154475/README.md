---
layout: page
title: "Q154475: Add Printer Wizard Printer Browse List Not in Alphabetical Order"
permalink: /kb/154/Q154475/
---

## Q154475: Add Printer Wizard Printer Browse List Not in Alphabetical Order

	Article: Q154475
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbprint kbWinNT400sp4fix kbPrinting
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The list of printers attached to a print server in the Add Printer wizard may
	not appear in alphabetical order.
	
	CAUSE
	=====
	
	This problem occurs because the printers are displayed in the same order in
	which they are received in response to the remote procedure call (RPC) Windows
	NT makes to retrieve the list of shared printers.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	NOTE: This hotfix supersedes the fix referred to in the following article in the
	Microsoft Knowledge Base:
	
	Q172147Add Printer Wizard Hangs When Searching for Remote Printers
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	
	Additional query words: 4.00 spooler browse printer thread
	
	======================================================================
	Keywords          : kbprint kbWinNT400sp4fix kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
