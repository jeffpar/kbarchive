---
layout: page
title: "Q233325: XFOR: Migration from cc:Mail Stops because of Invalid Date"
permalink: kb/233/Q233325/
---

## Q233325: XFOR: Migration from cc:Mail Stops because of Invalid Date

	Article: Q233325
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 exc55sp3 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you migrate messages from a Lotus cc:Mail post office, the Migration Wizard
	stops processing messages when it encounters an invalid date, such as 2/31/99.
	You may see the following message in the application log of the Windows NT Event
	Viewer:
	
	  Event ID: 1011
	  Source: MSExchangeMig
	  Description: cc:Mail DB8 extraction - Date field invalid in message.
	
	CAUSE
	=====
	
	The Exchange Server Migration Wizard checks the dates in messages to make sure
	they are valid. When the wizard encounters an invalid date, the migration
	process ends without migrating any remaining messages.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Migration
	
	+--------------------------+
	| File Name   | Version    | 
	+--------------------------+
	| Mlmig32.dll | 5.5.2627.0 | 
	+--------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp3 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
