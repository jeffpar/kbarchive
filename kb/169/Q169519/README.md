---
layout: page
title: "Q169519: XADM: Exchange 5.5 Remove All Option Removes Database Files"
permalink: kb/169/Q169519/
---

## Q169519: XADM: Exchange 5.5 Remove All Option Removes Database Files

	Article: Q169519
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run Microsoft Exchange Server 5.5 Setup in Maintenance mode, and you
	select the Remove All option, the Exchange Server databases are deleted.
	
	MORE INFORMATION
	================
	
	In previous versions of Microsoft Exchange Server, if you select the option to
	Remove All, the Exchange Server database files remain intact. This has changed
	in version 5.5, and these files are deleted. Therefore, it is imperative that
	you back up all database files before running Remove All.
	
	NOTE: Remove All will not remove Key Management Server databases. This is by
	design.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
