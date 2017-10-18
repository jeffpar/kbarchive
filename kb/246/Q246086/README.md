---
layout: page
title: "Q246086: XADM: Exchange Service Pack Stops with 0xc0020003 or 0xc0020002"
permalink: kb/246/Q246086/
---

## Q246086: XADM: Exchange Service Pack Stops with 0xc0020003 or 0xc0020002

	Article: Q246086
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you apply a service pack to an Exchange Server computer, the update does not
	work and one of the following error messages is displayed:
	
	  The system cannot find the path specified.
	  Microsoft Windows NT
	  ID no:0xc0020003
	
	  - or -
	
	  The system cannot find the file specified.
	  Microsoft Windows NT
	  ID no:0xc0020002
	
	CAUSE
	=====
	
	An 0xc0020003 error message is displayed as a result of missing paths that are
	required in Exchange Server, and an 0xc0020003 error message is displayed as a
	result of missing files that are required in Exchange Server. This is usually
	the result of administrative maintenance, such as cleaning up files and folders
	that do not seem necessary.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. Make sure that you have the CD that Exchange Server was originally installed
	  from.
	
	2. Stop the system attendant and disable it.
	
	3. Start the Setup program. When an 0xc002042c error message is displayed, click
	  OK.
	
	4. Click Reinstall. (This does not change the current databases, it only
	  replaces missing folder trees and files.)
	
	5. The Setup program eventually stops and an 0xc0020422 error message is
	  displayed (because of the disabled system attendant). Click OK.
	
	6. Enable the system attendant.
	
	7. Start an update from the service pack CD, for example, Service Pack 1,
	  Service Pack 2, or Service Pack 3.
	
	The update finishes successfully.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
