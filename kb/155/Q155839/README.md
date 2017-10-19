---
layout: page
title: "Q155839: XFOR: IMC has Problems with Mail Sent from Eudora"
permalink: /kb/155/Q155839/
---

## Q155839: XFOR: IMC has Problems with Mail Sent from Eudora

	Article: Q155839
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Internet Mail Connector(IMC) won't be able to understand
	all the Far East characters in a message body sent from the US version of Eudora
	that uses the ISO-8859-1 charset.
	
	MORE INFORMATION
	================
	
	The IMC thinks that the ISO-8859-1 charset is pure English. It does understand
	some Far East characters in US-ASCII charsets.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: SP3 DBCS CHS CHT KOR
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
