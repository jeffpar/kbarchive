---
layout: page
title: "Q173343: XFOR: Slow Processing of Internet Messages with MIME Bodyparts"
permalink: /kb/173/Q173343/
---

## Q173343: XFOR: Slow Processing of Internet Messages with MIME Bodyparts

	Article: Q173343
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you receive messages from the Internet with nested MIME (Multipurpose
	Internet Mail Extensions) bodyparts, the conversion process for the MIME
	bodyparts may cause the slow delivery of these messages. As the messages are
	delivered, the server will require a large amount of system resources,
	especially memory. If a large number of these messages are received at the same
	time, the system may report it is running low on virtual memory.
	
	CAUSE
	=====
	
	MIME bodyparts within a message item can be nested. If the nesting level is
	high, the conversion process requires more and more resources to decode the
	entire message. A single message with a MIME bodypart nested to 700 levels can
	take up to 10 minutes to process.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.0.
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	
	MORE INFORMATION
	================
	
	Because it is unlikely that valid messages will be nested to much more than 30
	levels, the Microsoft Exchange information store should not try to process
	messages beyond this point. A new registry key has been added in the fix
	referred to in the STATUS section above that limits the amount of nesting the
	information store will process. The registry switch is at:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIs\Parame
	tersSystem\InternetContent\LimitNestingLevels
	
	If this entry is missing, a default of 30 nested MIME bodyparts will be processed
	per message. Specifying a DWORD value will prevent messages from being processed
	with nested bodyparts above that level. A value of zero will prevent all
	messages containing MIME bodyparts from being processed.
	
	Additional query words: 5.00 SP1 IMS IMC CONVERSION
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Solution Type     : kbfix
	
	=============================================================================
	
