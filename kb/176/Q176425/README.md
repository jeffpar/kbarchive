---
layout: page
title: "Q176425: XFOR: MS Mail Connector NDRs Messsage Due to Malformed Address"
permalink: /kb/176/Q176425/
---

## Q176425: XFOR: MS Mail Connector NDRs Messsage Due to Malformed Address

	Article: Q176425
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Microsoft Mail Connector generates a Non-Delivery Report
	(NDR) for messages that have X.400 addresses that use the '/' as the delimiter
	and use the '$' as the escape sequence before a '/' character.
	
	CAUSE
	=====
	
	The Microsoft Mail Connector does not recognize the '$' as a valid escape
	sequence in X.400 addresses. This causes the Microsoft Mail Connector to parse
	the address incorrectly, thereby incorrectly detecting a malformed X.400
	address.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The Microsoft Mail Connector incorrectly parses X.400 addressing that use the
	'$' as the escape sequence to denote that the next character should be treated
	as a plain character. For example, an address that look like this:
	
	  /C=us/a=MCI/p=microsoft/o=PSS/dda.type=ms/dda.value=net$/po$/mailbox
	
	is incorrectly parsed. The '/' in the dda.value are treated as delimiters and
	values after the '/' are not correct X.400 field tags.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
