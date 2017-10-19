---
layout: page
title: "Q166561: XFOR: CCMC Not Handling Bad Messages Correctly"
permalink: /kb/166/Q166561/
---

## Q166561: XFOR: CCMC Not Handling Bad Messages Correctly

	Article: Q166561
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the Lotus cc:Mail Export utility version 6.0 exports messages with
	Macintosh file attachments, the exported file is malformed. When you read this
	malformed file, the Microsoft Exchange Connector for Lotus cc:Mail stops
	responding, a Dr. Watson is generated, or the message is sent without
	attachments but the message is never passed to the bad directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	A fix for this problem with the Microsoft Exchange Connector for Lotus cc:Mail
	is planned for Microsoft Exchange Server 5.0 Service Pack 1 (SP1). The "bad"
	messages will be placed in the "bad" directory and/or an event will be logged by
	Connector for cc:Mail to indicate that a "bad" message was received.
	
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
