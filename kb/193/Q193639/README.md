---
layout: page
title: "Q193639: XFOR: Internet Mail Service Stops with Event Log Error 4116"
permalink: /kb/193/Q193639/
---

## Q193639: XFOR: Internet Mail Service Stops with Event Log Error 4116

	Article: Q193639
	Product(s): Microsoft Exchange
	Version(s): WINNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 16-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Internet Mail Service stops with an event log error 4116, which states The
	following:
	
	  Event ID: 4116
	  Source:  MSExchangeIMC
	
	  Description: An error was returned from the messaging software the
	  Internet Mail Service uses to process messages on the Microsoft Exchange
	  Server. It is possible that the piece of mail being processed at the
	  time will be returned to the sender as a failed delivery instead of
	  being delivered. The message will be moved to the "BAD" folder, if
	  possible, and the error is not a temporary error. Otherwise it will be
	  retried when the service is restarted. Use the appropriate utilities
	  found in the SUPPORT directory of your Exchange CD to view and
	  manipulate messages that have been moved to the "BAD" folder.
	
	CAUSE
	=====
	
	The Internet Mail Service is trying to process outbound messages and receiving
	an error. The first line in the data portion of the error includes the
	following:
	
	  74 00 05 00 0e 00 07 80
	
	The last four numbers indicate the MAPI error that was received and caused the
	Event 4116. The error is 8007000e, which means out of memory. The Internet Mail
	Service is programmed to stop if it receives such a memory error.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 : XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Internet Mail Service
	
	  File Name      Version
	  -------------------------
	  Msexcimc.exe   5.5.2417.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5.
	This problem was first corrected in Exchange Server 5.5 Service Pack 2.
	
	
	MORE INFORMATION
	================
	
	A memory error in this instance incorrectly reports the error condition. A
	message in the MTS-OUT folder had a property header that contained more than 21
	KB of data. This header, plus the sizes of all the other headers, totaled more
	than 32 KB. The Exchange memory manager enforces a limit of 32 KB per remote
	procedure call (RPC). The RPC failed because the message properties totaled more
	than 32 KB. So the Internet Mail Service was not actually out of memory. To
	resolve this, the error returned in the condition was changed to a non-critical
	one, so that the Internet Mail Service would not shut down. In addition, if the
	Internet Mail Service cannot successfully retrieve all message properties at
	once, it divides them up and retrieves some in one attempt and the rest in a
	second attempt.
	
	
	Additional query words: crash
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
