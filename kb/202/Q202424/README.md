---
layout: page
title: "Q202424: XADM: Can't Modify 5.0 Server with Admin.exe After 5.5 Upgrade"
permalink: kb/202/Q202424/
---

## Q202424: XADM: Can't Modify 5.0 Server with Admin.exe After 5.5 Upgrade

	Article: Q202424
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 20-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade a server to Exchange Server version 5.5 in a site that was
	previously running only Exchange Server version 5.0, the remaining Exchange
	Server version 5.0 computers in the site cannot generate addresses when you add
	mailboxes, and cannot create new mailboxes.
	
	CAUSE
	=====
	
	If you start the Admin.exe file from the new Exchange Server version 5.5
	computer, you do not force an update of the Pcproxy.dll, Inproxy.dll,
	X400prox.dll, and Ccmproxy.dll files on the remaining Exchange Server version
	5.0 computers.
	
	WORKAROUND
	==========
	
	Start the Admin.exe file from one of the remaining Exchange Server version 5.0
	computers, and then connect to the server experiencing the problems. This forces
	an update of the .dll files.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q183320 XADM: Cannot View Internet Mail Service Properties
	
	Additional query words: Address
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
