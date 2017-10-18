---
layout: page
title: "Q216473: XFOR: Migrating Mailbox w/Message from cc:Mail Release 8 Client"
permalink: kb/216/Q216473/
---

## Q216473: XFOR: Migrating Mailbox w/Message from cc:Mail Release 8 Client

	Article: Q216473
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 20-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Mailbox from a Lotus cc:Mail DB6 post office is migrated using either the
	Exchange Server 5.5 or Exchange Server 5.5 Service Pack 2 (SP2) Migration
	Wizard, if that mailbox has a Rich Text Format (RTF) message, that message
	becomes garbage in Exchange Server.
	
	CAUSE
	=====
	
	Because Lotus cc:Mail release 6.x client is non-RTF aware, the Migration Wizard
	does not check for RTF.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Migration Wizard
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Mlmig32.dll | 5.5.2542.0 | 
	+--------------------------+
	
	
	The fix is also available in the Connectivity and Migration Web 3 release. This
	release can be downloaded from the following Microsoft Web site:
	
	  http://www.microsoft.com/servers/
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
