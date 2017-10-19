---
layout: page
title: "Q152926: XADM: Exchange IS Error 1025"
permalink: /kb/152/Q152926/
---

## Q152926: XADM: Exchange IS Error 1025

	Article: Q152926
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Information Store may report the following error in the Event Log:
	
	  Event ID: 1025
	  Source: MExchangeIS Private
	  Type: Warning
	  Category: Transport
	
	  Description:
	  An error occurred.
	  Function name or description of problem: EcGenerateNRN:
	  Error:0x8004010f
	
	CAUSE
	=====
	
	This happens when an expired message is in a mailbox that has never been logged
	on before and the message has a Read Notification Request. While trying to
	generate the Non-Read Notification (NRN), a logon object is supposed to be
	created for this mailbox, but at that point no Windows NT User Name is available
	because this is not a real logon from the user. The logon code tries to cache
	the Windows NT User Name, but because it does not have the Windows NT User Name,
	it cannot. At this point, the error code that it used to check whether the
	Windows NT User Name is already cached is not cleared properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to a problem in Microsoft Exchange Server, version
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: IES
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
