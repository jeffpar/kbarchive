---
layout: page
title: "Q214480: Err Msg: Incorrect Password or Unknown Username"
permalink: kb/214/Q214480/
---

## Q214480: Err Msg: Incorrect Password or Unknown Username

	Article: Q214480
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run the Convert.exe tool on the hard disk, you may receive the
	following error message:
	
	  Incorrect password or unknown username for:\\<Computer>\c$
	
	RESOLUTION
	==========
	
	To work around this behavior, remove the computer from the domain and then add
	it back to the domain:
	
	1. Click Start, click Run, type "srvmgr" (without the quotation marks), and then
	  press ENTER.
	
	2. Click the computer that you want to remove, and then press DELETE.
	
	3. Click Yes, and then add the computer to the domain.
	
	For information about how to add a computer to a domain, click Contents on the
	Help menu, click the Index tab, type "adding" (without the quotation marks),
	click Display, and then double-click the "Adding a Computer to the Domain"
	topic.
	
	For additional information about this error message, see the following article in
	the Microsoft Knowledge Base: Prompted for Password When Connecting to Windows
	NT
	
	Additional query words: reset machine account
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
