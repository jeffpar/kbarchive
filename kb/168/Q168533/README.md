---
layout: page
title: "Q168533: XFOR: Tabs Translated to Brackets"
permalink: kb/168/Q168533/
---

## Q168533: XFOR: Tabs Translated to Brackets

	Article: Q168533
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbnetwork kbusage exc4 exc5 exc55
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When messages sent from Microsoft Mail client include tabs, Microsoft Exchange
	Client may receive them with the tabs changed to two facing brackets:
	
	  [ ]
	
	CAUSE
	=====
	
	This may be due to insufficient compatibly between Microsoft Exchange Server and
	Microsoft Mail.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. Open the Microsoft Exchange Server Administrator program
	  Configuration\Connections and double-click the Microsoft Mail connector.
	
	2. Click the Interchange tab and then select the "Maximize MS Mail 3.x
	  Compatibility" check box.
	
	3. Stop and restart the MS Mail Connector Interchange and PCTMA services.
	
	4. Send another message to confirm that the tabs are received as spaces or
	  blanks, not as brackets
	
	Additional query words: square blocks.
	
	======================================================================
	Keywords          : kbnetwork kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
