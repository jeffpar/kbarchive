---
layout: page
title: "Q148200: XGEN: Error Forwarding Exchange Mail with Mac Client PC Mail"
permalink: /kb/148/Q148200/
---

## Q148200: XGEN: Error Forwarding Exchange Mail with Mac Client PC Mail

	Article: Q148200
	Product(s): Microsoft Exchange
	Version(s): 3.5,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 30-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you forward a mail message received from the Microsoft Exchange Server in
	the version 3.5 and 3.06 of the Microsoft Mail for PC Networks Macintosh
	workstation, the following error message appears:
	
	  Low on Memory. Unable to complete the operation. Please close some windows.
	
	CAUSE
	=====
	
	This problem occurs when you try to forward any message that is sent from a
	Microsoft Exchange client to a Microsoft Mail for PC Networks postoffice (PO)
	mailbox in the Macintosh client for Mail for PC Networks.
	
	NOTE: This problem does not occur on the version 3.03 Mail for PC Networks,
	Macintosh workstation.
	
	RESOLUTION
	==========
	
	If you are running Macintosh System 7.5.1, do one of the following:
	
	- In the Macintosh System Finder, click PC Mail. From the File menu, select Get
	  Info. Increase both the Minimum Size and the Preferred Size to 400K in Memory
	  Requirements.
	
	  -or-
	
	- Upgrade Macintosh Client for PC Mail version 3.5 to Microsoft Macintosh
	  Client for PC Mail version 3.5.1.
	
	If you are running Macintosh System 7.5, do one of the following:
	
	- Upgrade Macintosh System 7.5 to Macintosh System 7.5.1.
	
	  -or-
	
	- Upgrade Macintosh Client for PC Mail version 3.5 to Microsoft Macintosh
	  Client for PC Mail version 3.5.1.
	
	
	Additional query words: pcmta
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : :3.5,4.0
	
	=============================================================================
	
