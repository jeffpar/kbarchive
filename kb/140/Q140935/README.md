---
layout: page
title: "Q140935: XFOR: IMC: Empty or Partial Messages Received"
permalink: kb/140/Q140935/
---

## Q140935: XFOR: IMC: Empty or Partial Messages Received

	Article: Q140935
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an incoming SMTP message contains a period (.) at the beginning of a new line
	(crlf), the message may be missing all or parts of the message body.
	
	CAUSE
	=====
	
	The Microsoft Exchange Internet Mail Connector (IMC) interprets the period at
	the beginning of a new line as the data-end sequence. It looks for the final
	crlf and does not retain any other characters on that line.
	
	MORE INFORMATION
	================
	
	The SMTP specification (RFC 821) defines the end of a message by a crlf.crlf
	sequence. If a message contains a period at the beginning of a new line, the RFC
	821, section 4.5.2 number 1, requires an additional period to be added by the
	sending host. It also requires the receiving host to keep looking for more
	characters on the line, even if the double period is not there, (Section 4.5.2,
	number 2).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	The IMC will now correctly look for and retain other characters on the same line,
	and not assume the message ends.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	
	=============================================================================
	
