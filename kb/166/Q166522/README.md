---
layout: page
title: "Q166522: XFOR: From Field Changed When Message Sent to INS"
permalink: /kb/166/Q166522/
---

## Q166522: XFOR: From Field Changed When Message Sent to INS

	Article: Q166522
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0; Win95:5.0; winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 5.0 
	- Microsoft Exchange Client for Windows 95, version 5.0 
	- Microsoft Exchange Windows NT client, version 5.0 
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	If you send a message to the Internet News Service (INS) in the following
	format:
	
	  From: Address@site.net (Name)
	
	The INS changes the From field to the following:
	
	  From:"Address@site.net (name)" <Address@site.net>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	This problem was corrected in the latest Microsoft Exchange Server 5.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange500NT
	Version           : WINDOWS:5.0; Win95:5.0; winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
