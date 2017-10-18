---
layout: page
title: "Q166531: XCLN: Mac Attachments Are Unrecognizable After Crossing IMC"
permalink: kb/166/Q166531/
---

## Q166531: XCLN: Mac Attachments Are Unrecognizable After Crossing IMC

	Article: Q166531
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A Macintosh attachment in a message comes across as an unrecognizable document
	after crossing the Internet Mail Connector (IMC). The message is sent from a
	computer running Microsoft Exchange Macintosh client 4.0 Service Pack 3 (SP3) to
	a computer running Microsoft Exchange Macintosh client 5.0. Both IMCs are
	configured to send attachments in Binhex, always sending rich text.
	
	CAUSE
	=====
	
	Macintosh attachments sent from Microsoft Exchange Server 4.0 SP3 to Microsoft
	Exchange Server 5.0 in Binhex+TNEF are not received properly (wrong icon,
	unrecognizable file type, and so on). This is because of the incompatible
	Macintosh file handlings for UUENCODE/TNEF between 4.0 SP1 and 5.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange500Mac
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
