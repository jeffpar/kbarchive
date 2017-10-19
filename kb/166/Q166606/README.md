---
layout: page
title: "Q166606: XFOR: Msgs With Mixed Japanese Encoding Not Decoded Correctly"
permalink: /kb/166/Q166606/
---

## Q166606: XFOR: Msgs With Mixed Japanese Encoding Not Decoded Correctly

	Article: Q166606
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Messages received by the Japanese version of Microsoft Exchange Client 5.0 from
	the Internet News Service (INS) and Internet Mail Service (IMS) that have mixed
	character-set encoding are not decoded correctly. Those portions of the message
	not decoded appear as non-standard keyboard characters in the monitor.
	
	These symptoms are seen when the inbound message contains mixed character sets.
	For example, if some parts of the inbound message are encoded with JIS, and
	others encoded with Shift-JIS, the entire message will not be decoded correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
