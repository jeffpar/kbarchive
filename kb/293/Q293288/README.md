---
layout: page
title: "Q293288: XFOR: Malformed SMTP Messages in the Internet Mail Service"
permalink: /kb/293/Q293288/
---

## Q293288: XFOR: Malformed SMTP Messages in the Internet Mail Service

{% raw %}

	Article: Q293288
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Mail Service may stop processing inbound or outbound SMTP mail and
	may stop responding (hang) in an uncontrollable state. If you attempt to restart
	the Internet Mail Service, the information store may stop responding and one or
	more of the following error messages may be generated:
	
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
	  successful, the service will be shut down. Data (Words) 0000: 00140667
	  80040115
	
	  Event ID 12007
	  Source: MSExchangeIS
	  Type: Error
	  Category: Content Engine
	  Description: Error 0-82000080 occurred while processing message (Long Message
	  ID) with subject (The subject of the message) from (Sender's Name). The
	  archive filename is 'VMS95LCZ'.
	
	  Event ID: 4182
	  Source: MSExchangeIMC
	  Type: Error
	  Category: Internal Processing
	  Description: An error was returned from the messaging software the Internet
	  Mail Service uses to process messages on the Microsoft Exchange Server. As a
	  result, the message in spool file HBWK2Q2P will be retried when the server is
	  restarted.
	
	  Event ID: 4102
	  Source: MSExchangeIMC
	  Type: Error
	  Category: Internal Processing
	  Description: A serious error has occurred while trying to send mail into the
	  Exchange Information Store. The Internet Mail Service is being shut down.
	
	CAUSE
	=====
	
	This issue can occur on the Exchange Server computer that is running the
	Internet Mail Service if the header of a message contains malformed
	information:
	
	  --=_ Boundary 1-KTwEv4jY84Hk
	  Content-Type: text/plain;
	  charset = ""
	  Content-Transfer-Encoding: 7bit
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Use the error messages that are generated to identify the message IDs of the
	  malformed messages.
	
	2. In Windows Explorer, locate the Imcdata\In and Imcdata\Out folders and either
	  move or delete the messages that you identified as malformed. Search for
	  messages that come from the same domain name. (In one situation where this
	  issue occurred, all of the malformed messages came from one domain.)
	
	3. Either apply the information store post-Exchange Server 5.5 Service Pack 3
	  (SP3) fix or upgrade the information store to version 2653.22 or later. The
	  best way to upgrade the information store is to apply Exchange Server 5.5
	  Service Pack 4 (SP4).
	
	4. Restart the Internet Mail Service and see if the information store keeps
	  running and if messages are processed successfully.
	
	5. If the Internet Mail Service brings in more malformed messages that may cause
	  the information store to hang again, change the Internet Mail Service to
	  outbound only:
	
	  a. Open the Internet Mail Service properties, and then click the Connections
	     tab.
	
	  b. Under Transfer Mode, click "Outbound only".
	
	  c. Click OK, and then and stop and restart the Internet Mail Service.
	
	6. Restart the Internet Mail Service. If the information store keeps running and
	  processes all messages, reconfigure the Internet Mail Service to both inbound
	  and outbound.
	
	7. Identify the malformed messages again (see step 1) and move the malformed
	  messages (see step 2). You can do this on the Connections tab.
	
	8. Restart the Internet Mail Service.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q278320 XFOR: Inbound Internet Message with Blank CHARSET Causes Dr. Watson
	  in Store.exe
	
	Additional query words: IMS IS corrupted bad
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
