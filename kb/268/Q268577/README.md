---
layout: page
title: "Q268577: XADM: Directory Service Does Not Start with Event ID 1002"
permalink: /kb/268/Q268577/
---

## Q268577: XADM: Directory Service Does Not Start with Event ID 1002

	Article: Q268577
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you take a computer that is running Exchange Server 4.0 offline to replace
	the Ethernet card with an Fiber Distributed Data Interface (FDDI) card, and the
	WINS server stops responding, when you restart WINS and the Exchange Server
	computer, the directory service in Exchange Server may not start. The following
	event ID message may be logged in Microsoft Windows NT Event Viewer:
	
	  Event ID: 1002
	  Source: MSExchangeDS
	  Category: Internal Processing
	  Type: Error
	  Description: The Microsoft Exchange server database (EDB) could not be
	  initialized and returned error -550 unrecoverable error, the directory cannot
	  continue.
	
	RESOLUTION
	==========
	
	To resolve this behavior:
	
	1. Stop all Exchange Server services.
	
	2. Restore the directory service database from a tape backup.
	
	3. Restart all Exchange Server services.
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          : kberrmsg 
	Component         : Directory
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
