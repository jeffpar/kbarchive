---
layout: page
title: "Q278320: XFOR: Dr Watson for Inbound Internet Message with Blank CHARSET"
permalink: /kb/278/Q278320/
---

## Q278320: XFOR: Dr Watson for Inbound Internet Message with Blank CHARSET

	Article: Q278320
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg exc55 kbExchange550sp4Fix
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A poorly formatted inbound Internet message may cause an error in the
	information store and start the Dr. Watson debugger. If you are experiencing the
	problem addressed in this article, you may receive the following events:
	
	  Event ID: 4116
	  Source: MSExchangeIMC
	
	  An error was returned from the messaging software the Internet Mail Service
	  uses to process messages on the Microsoft Exchange Server. It is possible
	  that the piece of mail being processed at the time will be returned to the
	  sender as a failed delivery instead of being delivered. The message will be
	  moved to the "BAD" folder, if possible, and the error is not a temporary
	  error. Otherwise it will be retried when the service is restarted. Use the
	  appropriate utilities found in the SUPPORT directory of your Exchange CD to
	  view and manipulate messages that have been moved to the "BAD" folder
	
	  Event ID: 3039
	  Source: MSExchangeIMC
	
	  The error 0x80040115 was encountered while trying to communicate with the
	  message store. An attempt to refresh the connection will be made. If not
	  successful, the service will be shut down.
	
	  Data (Words) 0000: 00140667 80040115
	
	CAUSE
	=====
	
	This problem is caused by an incorrectly formatted Internet message attribute.
	If an Internet message received by the Internet Mail Service has an attribute of
	CHARSET= " " in the header, the information store generates a Dr. Watson error
	during inbound conversion.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	This problem can be resolved by either installing Exchange Server 5.5 Service
	Pack 4 or information store hotfix build 5.5.2653.22.
	
	To download Exchange Server 5.5 Service Pack 4, please see the following
	Microsoft Web site:
	
	  http://www.microsoft.com/exchange/downloads/55/sp4.asp
	
	To download information store build 5.5.2653.22, please see the following
	Microsoft Web site:
	
	  http://www.microsoft.com/downloads/release.asp?ReleaseID=25443
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q275714 XADM: Information Store Stops Unexpectedly with Multipart or Mixed
	  Message and Null Boundary String
	
	
	Additional query words: IS
	
	======================================================================
	Keywords          : kberrmsg exc55 kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
