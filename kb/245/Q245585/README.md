---
layout: page
title: "Q245585: XCON: SP3 MTA Replaces DDA Type RFC-822 w/DDA Type SMTP"
permalink: kb/245/Q245585/
---

## Q245585: XCON: SP3 MTA Replaces DDA Type RFC-822 w/DDA Type SMTP

	Article: Q245585
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): kbExchange550 kbExchange550bug kbExchange550fix exc55sp3 kbExchange550preSP4fix kbExcha
	Last Modified: 12-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under certain conditions, the Exchange Server 5.5. Service Pack 3 (SP3) message
	transfer agent (MTA) replaces the X.400 Header Field value of the domain-defined
	attribute (DDA) Type RFC-822 with the value "SMTP". This replacement can cause
	messages to not be delivered.
	
	CAUSE
	=====
	
	Exchange Server 5.5 SP3 introduces additional functionality to the MTA,
	including modifications to X.400 header handling. When this MTA receives an
	incoming message that contains an O/R address with a DDA Type of RFC-822, and is
	required to relay the message, it may change the DDA Type to SMTP before
	relaying the message. This issue does not occur in earlier versions of Exchange
	Server 5.5.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	Additional query words: X400 X.400 RFC822
	
	======================================================================
	Keywords          : kbExchange550 kbExchange550bug kbExchange550fix exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Component         : MTA
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
